import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { Web3Module } from './modules/web3/web3.module';
import { PayUploadModule } from './modules/upload/payUpload.module';

@Module({
  imports: [
  	ConfigModule,
  	Web3Module,
  	PayUploadModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
