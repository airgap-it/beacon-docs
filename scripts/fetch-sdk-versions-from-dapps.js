const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch();

  const data = JSON.parse(fs.readFileSync("./src/data/dapps.json"));

  const newData = data.map(async (dApp) => {
    const page = await browser.newPage();
    return await getSdkVersionFromDapp(page, dApp);
  });

  fs.writeFileSync(
    "./src/data/dapps.json",
    JSON.stringify(await Promise.all(newData), null, 2)
  );

  await browser.close();
})();

const getSdkVersionFromDapp = async (page, dApp) => {
  // Instructs the blank page to navigate a URL
  await page.goto(dApp.url);
  await page.setViewport({
    width: 1920,
    height: 1080,
    deviceScaleFactor: 1,
  });

  await page.waitForSelector("title");

  await new Promise((resolve) => setTimeout(resolve, 5000));

  if (dApp.url === "https://www.plentydefi.com/farms") {
    await page.evaluate(() => localStorage.setItem("newUser", false));
    await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });

    const connectButtonSelector =
      "#root > div > div.page-container.header-top-container > div > div.text-center.hidden.lg\\:flex.main-menu-container > div:nth-child(5) > button";

    await page.waitForSelector(connectButtonSelector);
    await page.click(connectButtonSelector);

    await new Promise((resolve) => setTimeout(resolve, 1000));
  } else if (dApp.url === "https://app.tezos.domains") {
    const connectButtonSelector =
      "body > td-root > td-top-nav > mat-toolbar > div > div:nth-child(4) > button.mat-focus-indicator.mr-2.mat-stroked-button.mat-button-base.mat-primary.ng-star-inserted > span.mat-button-wrapper";
    await page.waitForSelector(connectButtonSelector);
    await page.click(connectButtonSelector);
  }
  // await page.screenshot({ path: `screenshot.png` });

  const sdkVersion = await page.evaluate(() =>
    localStorage.getItem("beacon:sdk_version")
  );

  // if (!sdkVersion) {
  //   const test = await page.evaluate(() =>
  //     localStorage.getItem("beacon:sdk_version")
  //   );
  //   console.log('test')
  // }

  console.log(`${sdkVersion} - ${dApp.url}`);

  if (sdkVersion) {
    return {
      ...dApp,
      sdkVersion,
      lastCheck: new Date().getTime(),
    };
  } else {
    return dApp;
  }
};
