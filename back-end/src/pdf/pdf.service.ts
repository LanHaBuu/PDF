import { Injectable } from '@nestjs/common'
import puppeteer from 'puppeteer'

@Injectable()
export class PdfService {
    async get() {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.goto('https://google.com.vn', { waitUntil: 'networkidle0' });
        const pdf = await page.pdf({ format: 'A4' });
        await browser.close();
        return pdf
    }

    async create(res) {
        this.get().then(pdf => {
            res.set({ 'Content-Type': 'pdf', 'Content-Length': pdf.length })
            res.send(pdf)
        })
    }
}