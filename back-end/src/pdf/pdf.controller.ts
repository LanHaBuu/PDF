import { Controller, Get, Response } from '@nestjs/common'


import { PdfService } from './pdf.service'

@Controller('/pdf')
export class PdfController {
    constructor(private pdfService: PdfService) { }
    @Get()
    create(@Response() res: any) {
        return this.pdfService.create(res)
    }


}