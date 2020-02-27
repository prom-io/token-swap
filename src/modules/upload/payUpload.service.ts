import { Injectable, BadRequestException } from '@nestjs/common';
import { Web3Service } from '../web3/web3.service'
import { ConfigService } from '../../config/config.service';
import { PayUploadDto } from './payUpload.dto';
import Web3 from 'web3';

@Injectable()
export class PayUploadService {
	private web3: Web3;
	private contract: any;
	private config: ConfigService;

	constructor(
		web3Service: Web3Service,
		configService: ConfigService
	) { 
		let web3 = web3Service.websocketInstance();
		this.web3 = web3;
		this.config = configService;
		this.contract = new web3.eth.Contract(
			configService.getDataUploadAbi(), 
			configService.getDataUploadAddress()
		);
	}

	async payToUpload(dto: PayUploadDto): Promise<any> {
		try {
			let tenPercent = Number(dto.sum) / 10;
			let nineTeenPercent = Number(dto.sum) - tenPercent;

			let sumEther = this.web3.utils.toWei(String(tenPercent), 'ether');
			let sumSia = this.web3.utils.toWei(String(nineTeenPercent), 'ether');
			let tx = await this.contract.methods.upload(
				dto.id, 
				dto.name,
				dto.size,
				dto.extension,
				dto.mime_type,
				dto.meta_data,
				dto.data_validator,
				dto.service_node, 
				dto.data_owner, 
				sumEther, 
				sumSia,
				dto.signature,
				dto.messageHash
			)
			.send({
				from: dto.coinbase, 
				gas: 6600000,
				gasPrice: 8 * 1e9
			})
			return tx;
		} catch (e) {
			console.log(e);
			throw new BadRequestException(e.message);
		}
	}
}