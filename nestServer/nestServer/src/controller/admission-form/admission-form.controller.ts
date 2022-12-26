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
import { admissionUserListDto } from '../../dto/studentManagement.dto';
import { AdmissionFormService } from './../../services/admission-form/admission-form.service';


@Controller('admission-form')
export class AdmissionFormController {
  constructor(private admissionFormService: AdmissionFormService) {}

  @Get()
  public async getadmissionUserList() {
    const result = this.admissionFormService.getAdmissionUserList();
    console.log(result);
    return await result;
  }

  @Post()
  public async postAdmissionUserList(
    @Body() admissionUserListForm: admissionUserListDto,
  ) {
    const result = this.admissionFormService.postAdmissionUserList(
      admissionUserListForm,
    );
    return await result;
  }

  @Get(':id')
  public async getAdmissionUserListById(@Param('id') id: number) {
    const result = this.admissionFormService.getAdmissionUserListById(id);
    return await result;
  }

  @Delete(':id')
  public async deleteAdmissionUserListById(@Param('id') id: number) {
    const result = this.admissionFormService.deleteAdmissionUserListById(id);
    return await result;
  }

  @Put(':id')
  public async updateAdmissionUserListById(
    @Param('id') id: number,
    @Query() query,
  ) {
    const propertyName = query.property_name;
    const propertyValue = query.property_value;

    const result = this.admissionFormService.updateAdmissionUserListById(
      id,
      propertyName,
      propertyValue,
    );
    return await result;
  }
}
