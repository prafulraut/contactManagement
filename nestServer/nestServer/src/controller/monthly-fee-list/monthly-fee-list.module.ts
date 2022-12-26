import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { monthlyFeeDetailsSchema } from '../../schemas/studentManagement.schema';
import { MonthlyFeeListService } from './../../services/monthly-fee-list/monthly-fee-list.service';
import { MonthlyFeeListController } from './monthly-fee-list.controller';

@Module({
  controllers: [MonthlyFeeListController],
  imports: [
    MongooseModule.forFeature([
      {
        name: 'monthlyFeeDetails',
        schema: monthlyFeeDetailsSchema,
        collection: 'monthly_Fee_Form',
      },
    ]),
  ],
  providers: [MonthlyFeeListService],
})
export class MonthlyFeeListModule {}
