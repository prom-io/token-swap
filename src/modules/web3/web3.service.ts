import { Injectable } from '@nestjs/common';
import Web3 from "web3";
import net from "net";
import { ConfigService } from "../../config/config.service";

@Injectable()
export class Web3Service {
	private web3: Web3;
	private config: ConfigService

	constructor(config: ConfigService) {
		this.config = config;
	}

	public httpInstance(): Web3 {
		this.web3 = new Web3(new Web3.providers.HttpProvider(this.config.get('HTTP_NETWORK')));
		return this.web3;
	}

	public websocketInstance(): Web3 {
		this.web3 = new Web3(new Web3.providers.WebsocketProvider(this.config.get('WEBSOCKET_NETWORK')));
		return this.web3;
	}
}