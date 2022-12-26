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
import { monthlyFeeDetailsDto } from './../../dto/studentManagement.dto';
import { MonthlyFeeListService } from './../../services/monthly-fee-list/monthly-fee-list.service';

@Controller('monthly-fee-list')
export class MonthlyFeeListController {
  constructor(private monthlyFeeListService: MonthlyFeeListService) {}

  @Get()
  public async getadmissionUserList() {
    const result = this.monthlyFeeListService.getAdmissionUserList();
    console.log(result);
    return await result;
  }

  @Post()
  public async postAdmissionUserList(
    @Body() admissionUserListForm: monthlyFeeDetailsDto,
  ) {
    const result = this.monthlyFeeListService.postAdmissionUserList(
      admissionUserListForm,
    );
    return await result;
  }

  @Get(':id')
  public async getAdmissionUserListById(@Param('id') id: number) {
    const result = this.monthlyFeeListService.getAdmissionUserListById(id);
    return await result;
  }

  @Delete(':id')
  public async deleteAdmissionUserListById(@Param('id') id: number) {
    const result = this.monthlyFeeListService.deleteAdmissionUserListById(id);
    return await result;
  }

  @Put(':id')
  public async updateAdmissionUserListById(
    @Param('id') id: number,
    @Query() query,
  ) {
    const propertyName = query.property_name;
    const propertyValue = query.property_value;

    const result = this.monthlyFeeListService.updateAdmissionUserListById(
      id,
      propertyName,
      propertyValue,
    );
    return await result;
  }
}
