import { Controller, Get, Query, Post, HttpStatus, Res, Body, Put, Param, Delete } from '@nestjs/common';
import { PayUploadDto } from "./payUpload.dto";
import { PayUploadService } from "./payUpload.service";
import { Response } from 'express';

@Controller('data')
export class PayUploadController {
	constructor(private readonly payUploadService: PayUploadService) {}

	@Post('/upload/pay')
	async pay(@Body() payUploadDto: PayUploadDto, @Res() res: Response) {
		console.log('1111');
		let tx = await this.payUploadService.payToUpload(payUploadDto);
		return res.status(HttpStatus.CREATED).send(tx);
	}
}