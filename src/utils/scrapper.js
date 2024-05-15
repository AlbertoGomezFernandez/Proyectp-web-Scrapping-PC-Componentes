const puppeteer = require('puppeteer');
const fs = require('fs');


const laptopArray = [];

const scrapper = async (url) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url);
  repeat(page, browser);
  write(laptopArray);
};

// boton cookies = #cookiesAcceptAll;

const repeat = async (page, browser) => {
  const arrayDivs = await page.$$("div.product-card");

  const cookies = await page.$("#cookiesAcceptAll");

  if (cookies) {
    await cookies.click();
  }


  for (const laptopDiv of arrayDivs) {
    let price = await laptopDiv.$eval("div.product-card__price-container", el => el.innerText.replace("\n", " before "));
    let name = await laptopDiv.$eval("h3.product-card__title", el => el.innerText);
    let img = await laptopDiv.$eval("div.product-card__img-container img", el => el.src);
    try {
      const laptop = {
        price: price,
        name: name,
        img: img
      };
      console.log(laptop);
      laptopArray.push(laptop);
    } catch (error) {
      console.log(error.message);
    }
  }
  try {
    await page.$eval("[data-testid='icon_right']", (el) => el.click());
    await page.waitForNavigation();
    repeat(page, browser);
  } catch (error) {
    write(laptopArray);
    await browser.close();
  }
};


const write = (laptopArray) => {
  fs.writeFile("laptops.json", JSON.stringify(laptopArray), () => {
    console.log("Archivo creado con éxito!");
  });
};


module.exports = { scrapper };

