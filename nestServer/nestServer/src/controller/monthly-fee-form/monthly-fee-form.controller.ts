import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query
} from '@nestjs/common';
import { monthlyFeeFormDto } from '../../dto/studentManagement.dto';
import { MonthlyFeeFormService } from './../../services/monthly-fee-form/monthly-fee-form.service';

@Controller('monthly-fee-form')
export class MonthlyFeeFormController {
  constructor(private monthlyFeeFormService: MonthlyFeeFormService) {}

  @Get()
  public async getadmissionUserList() {
    const result = this.monthlyFeeFormService.getAdmissionUserList();
    console.log(result);
    return await result;
  }

  @Post()
  public async postAdmissionUserList(
    @Body() admissionUserListForm: monthlyFeeFormDto,
  ) {
    const result = this.monthlyFeeFormService.postAdmissionUserList(
      admissionUserListForm,
    );
    return await result;
  }

  @Get(':id')
  public async getAdmissionUserListById(@Param('id') id: number) {
    const result = this.monthlyFeeFormService.getAdmissionUserListById(id);
    return await result;
  }

  @Delete(':id')
  public async deleteAdmissionUserListById(@Param('id') id: number) {
    const result = this.monthlyFeeFormService.deleteAdmissionUserListById(id);
    return await result;
  }

  @Put(':id')
  public async updateAdmissionUserListById(
    @Param('id') id: number,
    @Query() query,
  ) {
    const propertyName = query.property_name;
    const propertyValue = query.property_value;

    const result = this.monthlyFeeFormService.updateAdmissionUserListById(
      id,
      propertyName,
      propertyValue,
    );
    return await result;
  }
}
