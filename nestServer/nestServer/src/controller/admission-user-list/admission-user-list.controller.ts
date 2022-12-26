import { AdmissionUserListService } from './../../services/admission-user-list/admission-user-list.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { admissionUserListDto } from '../../dto/studentManagement.dto';

@Controller('admission-user-list')
export class AdmissionUserListController {
  constructor(private admissionUserListService: AdmissionUserListService) {}

  // working
  @Get()
  public async getadmissionUserList() {
    const result = this.admissionUserListService.getAdmissionUserList();
    console.log(result);
    return await result;
  }

  // working
  @Post()
  public async postAdmissionUserList(
    @Body() admissionUserList: admissionUserListDto,
  ) {
    const result =
      this.admissionUserListService.postAdmissionUserList(admissionUserList);
    return await result;
  }

  @Get(':id')
  public async getAdmissionUserListById(@Param('id') id: number) {
    const result = this.admissionUserListService.getAdmissionUserListById(id);
    return await result;
  }

  @Delete(':id')
  public async deleteAdmissionUserListById(@Param('id') id: number) {
    const result =
      this.admissionUserListService.deleteAdmissionUserListById(id);
    return await result;
  }

  @Put(':id')
  public async updateAdmissionUserListById(
    @Param('id') id: number,
    @Query() query,
  ) {
    const propertyName = query.property_name;
    const propertyValue = query.property_value;

    const result = this.admissionUserListService.updateAdmissionUserListById(
      id,
      propertyName,
      propertyValue,
    );
    return await result;
  }
}
