const puppeteer = require("puppeteer");
const fs = require("fs");

const sleep = (delay) => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};

const clickButton = async (page, query, selector = "button") => {
  page.evaluate(
    (input) => {
      const elements = [...document.querySelectorAll(input.selector)];

      // Either use .find or .filter, comment one of these
      // find element with find
      // const targetElement = elements.find((e) => e.innerText === input.query);

      // OR, find element with filter
      const targetElements = elements.filter(
        (e) => e.innerText === input.query
      );
      targetElements.forEach((el) => {
        el.click();
      });

      // make sure the element exists, and only then click it
      // targetElement && targetElement.click();
    },
    { query, selector }
  );
};

(async () => {
  const browser = await puppeteer.launch();

  const data = JSON.parse(fs.readFileSync("./src/data/dapps.json"));

  let newDapps = data.dapps;

  const dAppCopy = JSON.parse(JSON.stringify(data.dapps));
  for (const dApp of dAppCopy.sort(
    (d1, d2) => (d1.lastCheck ?? 0) - (d2.lastCheck ?? 0)
  )) {
    if (dApp.inactive) {
      continue;
    }

    const page = await browser.newPage();

    page.setDefaultNavigationTimeout(30000);

    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 1,
    });

    const updated = await getSdkVersionFromDapp(page, dApp).catch((e) => {
      console.log(`ERROR:`, dApp.key, e);
      return dApp;
    });

    newDapps = newDapps.map((el) => {
      if (el.key === updated.key) {
        return updated;
      } else {
        return el;
      }
    });

    fs.writeFileSync(
      "./src/data/dapps.json",
      JSON.stringify(
        { lastCheck: new Date().getTime(), dapps: newDapps },
        null,
        2
      )
    );
  }

  await browser.close();
})();

const getSdkVersionFromDapp = async (page, dApp) => {
  // if (dApp.key !== "tezosprofiles") {
  //   return dApp;
  // }

  // Instructs the blank page to navigate a URL
  await page.goto(dApp.checkUrl);

  await page.waitForSelector("title");

  await sleep(5000);

  if (dApp.key === "plenty") {
    await page.evaluate(() => localStorage.setItem("newUser", false));
    await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });

    await sleep(2000);

    await clickButton(page, "Connect");
  } else if (dApp.key === "tezosdomains") {
    const connectButtonSelector =
      "body > td-root > td-top-nav > mat-toolbar > div > div:nth-child(4) > button.mat-focus-indicator.mr-2.mat-stroked-button.mat-button-base.mat-primary.ng-star-inserted > span.mat-button-wrapper";
    await page.waitForSelector(connectButtonSelector);
    await page.click(connectButtonSelector);
  } else if (dApp.key === "bettercalldev") {
    await clickButton(page, "EXECUTE", "span");
    await sleep(200);
    await clickButton(page, "Wallet", "div");
  } else if (dApp.key === "dexter") {
    await clickButton(page, "Connect Wallet");
  } else if (dApp.key === "tezosmandala") {
    await clickButton(page, "Connect Wallet");
  } else if (dApp.key === "tezosprofiles") {
    await clickButton(page, "Connect Wallet");
    await sleep(500);
    await clickButton(page, "Connect Wallet");
  } else if (dApp.key === "tzkt") {
    await sleep(5000);
  } else if (dApp.key === "freibier") {
    await sleep(2000);
  } else if (dApp.key === "tezotopia") {
    await sleep(2000);
  } else if (dApp.key === "glry-art") {
    await sleep(2000);
  } else if (dApp.key === "matterdefi") {
    await sleep(2000);
  } else if (dApp.key === "dogami") {
    await clickButton(page, "CONNECT", "p");
    await sleep(200);
  } else if (dApp.key === "rarible") {
    await clickButton(page, "Tezos", "span", "div");
    await sleep(200);
    await clickButton(page, "Beacon", "span");
    await sleep(200);
  } else if (dApp.key === "tezex") {
    await clickButton(page, "Connect Wallet", "span", "div");
    await sleep(200);
  }
  await sleep(5000);
  // await page.screenshot({ path: `screenshot.png` });

  const sdkVersion = await page.evaluate(() =>
    localStorage.getItem("beacon:sdk_version")
  );

  console.log(`${sdkVersion} - ${dApp.checkUrl}`);
  const title = await page.title();

  if (sdkVersion && sdkVersion !== dApp.sdkVersion) {
    console.log(`NEW VERSION ${sdkVersion} ${dApp.checkUrl}`);

    return {
      ...dApp,
      title,
      sdkVersion,
      lastUpdate: new Date().getTime(),
      lastCheck: new Date().getTime(),
    };
  } else if (sdkVersion) {
    return {
      ...dApp,
      lastCheck: new Date().getTime(),
    };
  } else {
    return dApp;
  }
};
