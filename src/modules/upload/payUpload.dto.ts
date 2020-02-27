import { Matches, IsEmail, IsNotEmpty } from 'class-validator';

export class PayUploadDto {
	@IsNotEmpty()
	readonly id: string;

	@IsNotEmpty()
	@Matches(
        new RegExp("^0x[a-fA-F0-9]{40}$"),
        {
            message: "Data Validator address must be valid Ethereum address"
        }
    )
	readonly data_validator: string;

	@IsNotEmpty()
	readonly name: string;

	@IsNotEmpty()
	readonly size: number;

	@IsNotEmpty()
	readonly extension: string;

	@IsNotEmpty()
	readonly mime_type: string;

	readonly meta_data: string;

	@IsNotEmpty()
	readonly private_key: string;

	@IsNotEmpty()
	@Matches(
        new RegExp("^0x[a-fA-F0-9]{40}$"),
        {
            message: "Service node address must be valid Ethereum address"
        }
    )
	readonly service_node: string;

	@IsNotEmpty()
	sum: string;

	@IsNotEmpty()
	readonly signature: string;

	@IsNotEmpty()
	readonly messageHash: string

	@IsNotEmpty()
	readonly data_owner: string;

	@IsNotEmpty()
	readonly coinbase: string;
}