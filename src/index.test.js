import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});

describe('index.html', () => {
    it('should say hello', (done) => {
        const index = fs.readFileSync('./src/index.html', "utf-8");
        //you can optionally provide an array of js files to load into the JSDOM environment as the second parameter
        jsdom.env(index, function (err, window) {
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal("Hello World!");
            //it now safe to evaluate if your expect is true or false..
            //due to the Async callback
            done();
            //close the window so that we free up memory that was taken while creating the in memory DOM
            window.close();
        });
    })
})
