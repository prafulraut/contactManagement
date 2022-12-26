import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { admissionUserListDto } from '../../dto/studentManagement.dto';
import { IadmissionForm } from './../../interfaces/studentManagement.interface';

const projectionData = {
  __v: false,
};

@Injectable()
export class AdmissionFormService {
  constructor(
    @InjectModel('admissionForm')
    private readonly admissionFormModel: Model<IadmissionForm>,
  ) {}

  async getAdmissionUserList(): Promise<any> {
    const userList = await this.admissionFormModel
      .find({}, projectionData)
      .exec();
    if (!userList || !userList[0]) {
      throw new HttpException('Not Found', 404);
    }
    return userList;
  }

  async postAdmissionUserList(User): Promise<any> {
    if (Object.keys(User).length != 0) {
      const user = await new this.admissionFormModel(User);
      return user.save();
    } else {
      throw new HttpException('Enter Data', 404);
    }
  }

  async updateAdmissionUserListById(
    _id: number,
    propertyName: string,
    propertyValue: string,
  ): Promise<any> {
    const userList = await this.admissionFormModel
      .findOneAndUpdate({ _id }, { [propertyName]: propertyValue })
      .exec();
    if (!userList) {
      throw new HttpException('Not Found', 404);
    }
    return userList;
  }

  async getAdmissionUserListById(_id: number): Promise<admissionUserListDto> {
    const userList = await this.admissionFormModel
      .findOne({ _id }, projectionData)
      .exec();
    if (!userList) {
      throw new HttpException('Not Found', 404);
    }
    return userList;
  }

  async deleteAdmissionUserListById(_id: number): Promise<any> {
    const userList = await this.admissionFormModel.findByIdAndDelete({
      _id,
    });
    // if (userList. === 0) {
    //   throw new HttpException('Not Found', 404);
    // }
    return await userList;
  }
}
