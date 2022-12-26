import * as mongoose from 'mongoose';

export interface IadmissionForm extends mongoose.Document {
  readonly id: number;
  readonly studentName: string;
  readonly fatherName: string;
  readonly class: string;
  readonly fees: string;
  readonly dateofadmission: any;
  readonly comment: string;
  // readonly avatar: string;
}

export interface IadmissionUserList extends mongoose.Document {
  readonly id: number;
  readonly studentName: string;
  readonly fatherName: string;
  readonly class: string;
  readonly fees: string;
  readonly dateofadmission: any;
  readonly comment: string;
  // readonly avatar: string;
}

export interface ImonthlyFeeForm extends mongoose.Document {
  readonly id: number;
  readonly studentName: string;
  readonly feeStatus: boolean;
  readonly amount: number;
  readonly feePaidDate: Date;
}

export interface ImonthlyFeeDetails extends mongoose.Document {
  readonly id: number;
  readonly studentName: string;
  readonly feeStatus: boolean;
  readonly amount: number;
  readonly feePaidDate: Date;
}

export interface Icontact extends mongoose.Document {
  readonly id: number;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: number;
  readonly password: string;
  readonly confirmPassword:string;
  readonly phoneNumber: number;
  readonly address: string;

}
