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
import { contactDto } from '../../dto/studentManagement.dto';
import { ContactService } from '../../services/contact/contact.service';


@Controller('contact-form')
export class contactController {
  constructor(private contactService: ContactService) { }

  @Get()
  // public async getcontact() {
  //   const result = this.contactService.getcontact();
  //   console.log(result);
  //   return await result;
  // }
  public async getadmissionUserList() {
    const result = this.contactService.getAdmissionUserList();
    console.log(result);
    return await result;
  }

  // @Post()
  // public async postAdmissionUserList(
  //   @Body() admissionUserListForm: contactDto,
  // ) {
  //   const result = this.contactService.postAdmissionUserList(
  //     admissionUserListForm,
  //   );
  //   return await result;
  // }
  @Post()
  public async postContactUserList(
    @Body() contactUserListForm: contactDto,
  ) {
    const result = this.contactService.postAdmissionUserList(
      contactUserListForm,
    );
    return await result;
  }

  @Get(':id')
  public async getAdmissionUserListById(@Param('id') id: number) {
    const result = this.contactService.getAdmissionUserListById(id);
    return await result;
  }

  @Delete(':id')
  public async deleteAdmissionUserListById(@Param('id') id: number) {
    const result = this.contactService.deleteAdmissionUserListById(id);
    return await result;
  }

  @Put(':id')
  public async updateAdmissionUserListById(
    @Param('id') id: number,
    @Query() query,
  ) {
    const propertyName = query.property_name;
    const propertyValue = query.property_value;

    const result = this.contactService.updateAdmissionUserListById(
      id,
      propertyName,
      propertyValue,
    );
    return await result;
  }
}
