import * as mongoose from 'mongoose';

export const admissionFormSchema = new mongoose.Schema({
  id: Number,
  studentName: { type: String, required: true, trim: true },
  fatherName: { type: String, required: true, trim: true },
  class: { type: String, required: true, trim: true },
  fees: { type: String, required: true, trim: true },
  dateofadmission: { type: String, required: false, trim: true },
  comment: { type: String, required: false, trim: true },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  // avatar: String
});

export const admissionUserListSchema = new mongoose.Schema({
  id: Number,
  studentName: { type: String, required: true, trim: true },
  fatherName: { type: String, required: true, trim: true },
  class: { type: String, required: true, trim: true },
  fees: { type: String, required: true, trim: true },
  dateofadmission: { type: String, required: false, trim: true },
  comment: { type: String, required: false, trim: true },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  // avatar: String
});

export const monthlyFeeFormSchema = new mongoose.Schema({
  id: Number,
  studentName: { type: String, required: true, trim: true },
  feeStatus: { type: Boolean, required: true, trim: true },
  amount: { type: Number, required: true, trim: true },
  feePaidDate: { type: String, required: true, trim: true },
});

export const monthlyFeeDetailsSchema = new mongoose.Schema({
  id: Number,
  studentName: { type: String, required: true, trim: true },
  feeStatus: { type: Boolean, required: true, trim: true },
  amount: { type: Number, required: true, trim: true },
  feePaidDate: { type: String, required: true, trim: true },
});

export const contactSchema = new mongoose.Schema({
  id: Number,
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  confirmPassword: { type: String, required: true, trim: true },
  phoneNumber: { type: Number, required: true, trim: true },
  address: { type: String, required: true, trim: true },
});