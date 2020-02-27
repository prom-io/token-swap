import { Module } from '@nestjs/common';
import { PayUploadService } from './payUpload.service';
import { PayUploadController } from './payUpload.controller';

@Module({
  exports: [],
  imports: [],
  controllers: [PayUploadController],
  providers: [PayUploadService],
})
export class PayUploadModule {}
