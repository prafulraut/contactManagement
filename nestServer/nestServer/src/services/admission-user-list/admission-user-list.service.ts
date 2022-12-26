import { HttpException, Injectable } from '@nestjs/common';
import { USERLIST } from './../../mockData/mock.data';
import { IadmissionUserList } from '../../interfaces/studentManagement.interface';
import { admissionUserListSchema } from '../../schemas/studentManagement.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { admissionUserListDto } from '../../dto/studentManagement.dto';

const projectionData = {
  __v: false,
};

@Injectable()
export class AdmissionUserListService {
  constructor(
    @InjectModel('admissionUserList')
    private readonly admissionUserListModel: Model<IadmissionUserList>,
  ) {}

  public async getAdmissionUserList(): Promise<any> {
    const userList = await this.admissionUserListModel
      .find({}, projectionData)
      .exec();
    if (!userList || !userList[0]) {
      throw new HttpException('Not Found', 404);
    }
    return userList;
  }

  public async postAdmissionUserList(User): Promise<any> {
    if (Object.keys(User).length != 0) {
      const user = await new this.admissionUserListModel(User);
      return user.save();
    } else {
      throw new HttpException('Enter Data', 404);
    }
  }

  public async updateAdmissionUserListById(
    _id: number,
    propertyName: string,
    propertyValue: string,
  ): Promise<any> {
    const userList = await this.admissionUserListModel
      .findOneAndUpdate({ _id }, { [propertyName]: propertyValue })
      .exec();
    if (!userList) {
      throw new HttpException('Not Found', 404);
    }
    return userList;
  }

  public async getAdmissionUserListById(
    _id: number,
  ): Promise<admissionUserListDto> {
    const userList = await this.admissionUserListModel
      .findOne({ _id }, projectionData)
      .exec();
    if (!userList) {
      throw new HttpException('Not Found', 404);
    }
    return userList;
  }

  public async deleteAdmissionUserListById(_id: number): Promise<any> {
    const userList = await this.admissionUserListModel.findByIdAndDelete({ _id });
    // if (userList. === 0) {
    //   throw new HttpException('Not Found', 404);
    // }
    return await userList;
  }
}
