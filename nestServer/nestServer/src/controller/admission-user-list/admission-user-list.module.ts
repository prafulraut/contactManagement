import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { admissionUserListSchema } from '../../schemas/studentManagement.schema';
import { AdmissionUserListService } from './../../services/admission-user-list/admission-user-list.service';
import { AdmissionUserListController } from './admission-user-list.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'admissionUserList',
        schema: admissionUserListSchema,
        collection: 'admission_Form',
      },
    ]),
  ],
  controllers: [AdmissionUserListController],
  providers: [AdmissionUserListService],
})
export class AdmissionUserListModule {}
