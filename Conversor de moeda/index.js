import puppeteer from 'puppeteer';
import readlineSync from 'readline-sync'

console.log('Bem-vindo ao robo de conversor!');


async function robo(){

    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    const moedaBase = readlineSync.question('Informe uma moeda base: ') || 'dolar';
    const moedaFinal = readlineSync.question('Moeda final: ') || 'real';

    const qualquerUrl = `https://www.melhorcambio.com/conversor-de-moeda/${moedaBase}/${moedaFinal}`;

    await page.goto(qualquerUrl);


    const resultado = await page.evaluate(() => {
        return document.querySelector('#comercial').value;         
    });
    console.log(`O valor de 1 ${moedaBase} em ${moedaFinal} ${resultado}`);
    
    await browser.close();  
}
    
robo();