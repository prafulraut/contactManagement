import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { monthlyFeeFormSchema } from '../../schemas/studentManagement.schema';
import { MonthlyFeeFormService } from './../../services/monthly-fee-form/monthly-fee-form.service';
import { MonthlyFeeFormController } from './monthly-fee-form.controller';

@Module({
  controllers: [MonthlyFeeFormController],
  imports: [
    MongooseModule.forFeature([
      {
        name: 'monthlyFeeForm',
        schema: monthlyFeeFormSchema,
        collection: 'monthly_Fee_Form',
      },
    ]),
  ],
  providers: [MonthlyFeeFormService],
})
export class MonthlyFeeFormModule {}
