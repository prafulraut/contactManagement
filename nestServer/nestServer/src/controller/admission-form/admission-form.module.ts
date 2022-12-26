import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { admissionFormSchema } from '../../schemas/studentManagement.schema';
import { AdmissionFormService } from './../../services/admission-form/admission-form.service';
import { AdmissionFormController } from './admission-form.controller';

@Module({
  controllers: [AdmissionFormController],
  imports: [
    MongooseModule.forFeature([ 
      {
        name: 'admissionForm',
        schema: admissionFormSchema,
        collection: 'admission_Form',
      },
    ]),
  ],
  providers: [AdmissionFormService],
})
export class AdmissionFormModule {}
