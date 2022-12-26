import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { monthlyFeeDetailsDto } from '../../dto/studentManagement.dto';
import { ImonthlyFeeDetails } from './../../interfaces/studentManagement.interface';

const projectionData = {
  __v: false,
};

@Injectable()
export class MonthlyFeeListService {
  constructor(
    @InjectModel('monthlyFeeDetails')
    private readonly monthlyFeeDetailsModel: Model<ImonthlyFeeDetails>,
  ) {}

  async getAdmissionUserList(): Promise<any> {
    const userList = await this.monthlyFeeDetailsModel
      .find({}, projectionData)
      .exec();
    if (!userList || !userList[0]) {
      throw new HttpException('Not Found', 404);
    }
    return userList;
  }

  async postAdmissionUserList(User): Promise<any> {
    if (Object.keys(User).length != 0) {
      const user = await new this.monthlyFeeDetailsModel(User);
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
    const userList = await this.monthlyFeeDetailsModel
      .findOneAndUpdate({ _id }, { [propertyName]: propertyValue })
      .exec();
    if (!userList) {
      throw new HttpException('Not Found', 404);
    }
    return userList;
  }

  async getAdmissionUserListById(_id: number): Promise<monthlyFeeDetailsDto> {
    const userList = await this.monthlyFeeDetailsModel
      .findOne({ _id }, projectionData)
      .exec();
    if (!userList) {
      throw new HttpException('Not Found', 404);
    }
    return userList;
  }

  async deleteAdmissionUserListById(_id: number): Promise<any> {
    const userList = await this.monthlyFeeDetailsModel.findByIdAndDelete({
      _id,
    });
    // if (userList. === 0) {
    //   throw new HttpException('Not Found', 404);
    // }
    return await userList;
  }
}
