import * as dotenv from 'dotenv';
import * as fs from 'fs';

export class ConfigService {
	private readonly envConfig: { [key: string]: string };

	constructor(filePath: any) {
		this.envConfig = dotenv.parse(fs.readFileSync(filePath));
	}

	get(key: string): string {
		return this.envConfig[key];
	}

	getDataUploadAddress(): string {
		return this.get("DATA_UPLOAD_CONTRACT_ADDRESS");
	}

	getDataUploadAbi(): any {
		return [
		    {
		      "constant": true,
		      "inputs": [
		        {
		          "name": "",
		          "type": "uint256"
		        }
		      ],
		      "name": "fileList",
		      "outputs": [
		        {
		          "name": "id",
		          "type": "string"
		        },
		        {
		          "name": "name",
		          "type": "string"
		        },
		        {
		          "name": "size",
		          "type": "uint256"
		        },
		        {
		          "name": "file_extension",
		          "type": "string"
		        },
		        {
		          "name": "mime_type",
		          "type": "string"
		        },
		        {
		          "name": "meta_data",
		          "type": "string"
		        },
		        {
		          "name": "owner",
		          "type": "address"
		        },
		        {
		          "name": "exist",
		          "type": "bool"
		        }
		      ],
		      "payable": false,
		      "stateMutability": "view",
		      "type": "function"
		    },
		    {
		      "constant": true,
		      "inputs": [
		        {
		          "name": "",
		          "type": "string"
		        }
		      ],
		      "name": "uploadedData",
		      "outputs": [
		        {
		          "name": "id",
		          "type": "string"
		        },
		        {
		          "name": "sum",
		          "type": "uint256"
		        },
		        {
		          "name": "buySum",
		          "type": "uint256"
		        },
		        {
		          "name": "serviceNodeAddress",
		          "type": "address"
		        },
		        {
		          "name": "dataOwner",
		          "type": "address"
		        }
		      ],
		      "payable": false,
		      "stateMutability": "view",
		      "type": "function"
		    },
		    {
		      "constant": true,
		      "inputs": [],
		      "name": "fileCount",
		      "outputs": [
		        {
		          "name": "",
		          "type": "uint256"
		        }
		      ],
		      "payable": false,
		      "stateMutability": "view",
		      "type": "function"
		    },
		    {
		      "constant": true,
		      "inputs": [],
		      "name": "accountManage",
		      "outputs": [
		        {
		          "name": "",
		          "type": "address"
		        }
		      ],
		      "payable": false,
		      "stateMutability": "view",
		      "type": "function"
		    },
		    {
		      "constant": true,
		      "inputs": [],
		      "name": "wallet",
		      "outputs": [
		        {
		          "name": "",
		          "type": "address"
		        }
		      ],
		      "payable": false,
		      "stateMutability": "view",
		      "type": "function"
		    },
		    {
		      "constant": true,
		      "inputs": [
		        {
		          "name": "",
		          "type": "address"
		        }
		      ],
		      "name": "fileUploadedCount",
		      "outputs": [
		        {
		          "name": "",
		          "type": "uint256"
		        }
		      ],
		      "payable": false,
		      "stateMutability": "view",
		      "type": "function"
		    },
		    {
		      "constant": true,
		      "inputs": [
		        {
		          "name": "",
		          "type": "address"
		        },
		        {
		          "name": "",
		          "type": "string"
		        }
		      ],
		      "name": "files",
		      "outputs": [
		        {
		          "name": "id",
		          "type": "string"
		        },
		        {
		          "name": "name",
		          "type": "string"
		        },
		        {
		          "name": "size",
		          "type": "uint256"
		        },
		        {
		          "name": "file_extension",
		          "type": "string"
		        },
		        {
		          "name": "mime_type",
		          "type": "string"
		        },
		        {
		          "name": "meta_data",
		          "type": "string"
		        },
		        {
		          "name": "owner",
		          "type": "address"
		        },
		        {
		          "name": "exist",
		          "type": "bool"
		        }
		      ],
		      "payable": false,
		      "stateMutability": "view",
		      "type": "function"
		    },
		    {
		      "constant": true,
		      "inputs": [
		        {
		          "name": "",
		          "type": "address"
		        },
		        {
		          "name": "",
		          "type": "uint256"
		        }
		      ],
		      "name": "fileUploaded",
		      "outputs": [
		        {
		          "name": "id",
		          "type": "string"
		        },
		        {
		          "name": "name",
		          "type": "string"
		        },
		        {
		          "name": "size",
		          "type": "uint256"
		        },
		        {
		          "name": "file_extension",
		          "type": "string"
		        },
		        {
		          "name": "mime_type",
		          "type": "string"
		        },
		        {
		          "name": "meta_data",
		          "type": "string"
		        },
		        {
		          "name": "owner",
		          "type": "address"
		        },
		        {
		          "name": "exist",
		          "type": "bool"
		        }
		      ],
		      "payable": false,
		      "stateMutability": "view",
		      "type": "function"
		    },
		    {
		      "constant": true,
		      "inputs": [],
		      "name": "transaction",
		      "outputs": [
		        {
		          "name": "",
		          "type": "address"
		        }
		      ],
		      "payable": false,
		      "stateMutability": "view",
		      "type": "function"
		    },
		    {
		      "inputs": [
		        {
		          "name": "_transaction",
		          "type": "address"
		        },
		        {
		          "name": "_wallet",
		          "type": "address"
		        },
		        {
		          "name": "_accountManage",
		          "type": "address"
		        }
		      ],
		      "payable": false,
		      "stateMutability": "nonpayable",
		      "type": "constructor"
		    },
		    {
		      "anonymous": false,
		      "inputs": [
		        {
		          "indexed": false,
		          "name": "id",
		          "type": "string"
		        },
		        {
		          "indexed": false,
		          "name": "serviceNodeAddress",
		          "type": "address"
		        },
		        {
		          "indexed": false,
		          "name": "dataOwner",
		          "type": "address"
		        },
		        {
		          "indexed": false,
		          "name": "sum",
		          "type": "uint256"
		        }
		      ],
		      "name": "DataUploaded",
		      "type": "event"
		    },
		    {
		      "constant": false,
		      "inputs": [
		        {
		          "name": "_id",
		          "type": "string"
		        },
		        {
		          "name": "_name",
		          "type": "string"
		        },
		        {
		          "name": "_size",
		          "type": "uint256"
		        },
		        {
		          "name": "_file_extension",
		          "type": "string"
		        },
		        {
		          "name": "_mime_type",
		          "type": "string"
		        },
		        {
		          "name": "_meta_data",
		          "type": "string"
		        },
		        {
		          "name": "_owner",
		          "type": "address"
		        },
		        {
		          "name": "_serviceNodeAddress",
		          "type": "address"
		        },
		        {
		          "name": "_dataOwner",
		          "type": "address"
		        },
		        {
		          "name": "_sumEther",
		          "type": "uint256"
		        },
		        {
		          "name": "_sumSia",
		          "type": "uint256"
		        },
		        {
		          "name": "_sig",
		          "type": "bytes"
		        },
		        {
		          "name": "_message",
		          "type": "bytes32"
		        }
		      ],
		      "name": "upload",
		      "outputs": [],
		      "payable": false,
		      "stateMutability": "nonpayable",
		      "type": "function"
		    },
		    {
		      "constant": false,
		      "inputs": [
		        {
		          "name": "_id",
		          "type": "string"
		        },
		        {
		          "name": "_name",
		          "type": "string"
		        },
		        {
		          "name": "_size",
		          "type": "uint256"
		        },
		        {
		          "name": "_file_extension",
		          "type": "string"
		        },
		        {
		          "name": "_mime_type",
		          "type": "string"
		        },
		        {
		          "name": "_meta_data",
		          "type": "string"
		        },
		        {
		          "name": "_owner",
		          "type": "address"
		        }
		      ],
		      "name": "uploadFile",
		      "outputs": [],
		      "payable": false,
		      "stateMutability": "nonpayable",
		      "type": "function"
		    },
		    {
		      "constant": true,
		      "inputs": [
		        {
		          "name": "_owner",
		          "type": "address"
		        },
		        {
		          "name": "_id",
		          "type": "string"
		        }
		      ],
		      "name": "checkFileOwner",
		      "outputs": [
		        {
		          "name": "",
		          "type": "bool"
		        }
		      ],
		      "payable": false,
		      "stateMutability": "view",
		      "type": "function"
		    },
		    {
		      "constant": true,
		      "inputs": [
		        {
		          "name": "_owner",
		          "type": "address"
		        },
		        {
		          "name": "_fileId",
		          "type": "string"
		        }
		      ],
		      "name": "checkFileExist",
		      "outputs": [
		        {
		          "name": "",
		          "type": "bool"
		        }
		      ],
		      "payable": false,
		      "stateMutability": "view",
		      "type": "function"
		    },
		    {
		      "constant": true,
		      "inputs": [
		        {
		          "name": "_owner",
		          "type": "address"
		        },
		        {
		          "name": "_id",
		          "type": "string"
		        }
		      ],
		      "name": "getOwnerFile",
		      "outputs": [
		        {
		          "name": "",
		          "type": "string"
		        },
		        {
		          "name": "",
		          "type": "string"
		        },
		        {
		          "name": "",
		          "type": "uint256"
		        },
		        {
		          "name": "",
		          "type": "string"
		        },
		        {
		          "name": "",
		          "type": "string"
		        }
		      ],
		      "payable": false,
		      "stateMutability": "view",
		      "type": "function"
		    }
		  ];
	}
}