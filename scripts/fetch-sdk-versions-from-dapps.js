const puppeteer = require("puppeteer");
const fs = require("fs");

const clickButton = async (page, query) => {
  page.evaluate((query) => {
    const elements = [...document.querySelectorAll("button")];

    // Either use .find or .filter, comment one of these
    // find element with find
    const targetElement = elements.find((e) => e.innerText.includes(query));

    // OR, find element with filter
    // const targetElement = elements.filter(e => e.innerText.includes(query))[0];

    // make sure the element exists, and only then click it
    targetElement && targetElement.click();
  }, query);
};

(async () => {
  const browser = await puppeteer.launch();

  const data = JSON.parse(fs.readFileSync("./src/data/dapps.json"));

  const newData = data.map(async (dApp) => {
    const page = await browser.newPage();
    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 1,
    });
    return getSdkVersionFromDapp(page, dApp);
  });

  fs.writeFileSync(
    "./src/data/dapps.json",
    JSON.stringify(await Promise.all(newData), null, 2)
  );

  await browser.close();
})();

const getSdkVersionFromDapp = async (page, dApp) => {
  // Instructs the blank page to navigate a URL
  await page.goto(dApp.checkUrl);

  await page.waitForSelector("title");

  await new Promise((resolve) => setTimeout(resolve, 5000));

  if (dApp.key === "plenty") {
    await page.evaluate(() => localStorage.setItem("newUser", false));
    await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });

    const connectButtonSelector =
      "#root > div > div.page-container.header-top-container > div > div.text-center.hidden.lg\\:flex.main-menu-container > div:nth-child(5) > button";

    await page.waitForSelector(connectButtonSelector);
    await page.click(connectButtonSelector);

    await new Promise((resolve) => setTimeout(resolve, 1000));
  } else if (dApp.key === "tezosdomains") {
    const connectButtonSelector =
      "body > td-root > td-top-nav > mat-toolbar > div > div:nth-child(4) > button.mat-focus-indicator.mr-2.mat-stroked-button.mat-button-base.mat-primary.ng-star-inserted > span.mat-button-wrapper";
    await page.waitForSelector(connectButtonSelector);
    await page.click(connectButtonSelector);
  } else if (dApp.key === "dexter") {
    await clickButton(page, "Connect Wallet");
  } else if (dApp.key === "tezosmandala") {
    await clickButton(page, "Connect Wallet");
  }
  // await page.screenshot({ path: `screenshot.png` });

  const sdkVersion = await page.evaluate(() =>
    localStorage.getItem("beacon:sdk_version")
  );

  console.log(`${sdkVersion} - ${dApp.checkUrl}`);
  const title = await page.title();

  if (sdkVersion) {
    return {
      ...dApp,
      title,
      sdkVersion,
      lastCheck: new Date().getTime(),
    };
  } else {
    return dApp;
  }
};
