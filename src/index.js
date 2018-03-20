const puppeteer = require('puppeteer');

//funçao que executa automaticameente (Função iife / função imediata)
;(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://www.reddit.com/r/hackernews/', {waitUntil: 'domcontentloaded'} );  //waitUntil faz com que espere alguma coisa

    await browser.close();
})();



