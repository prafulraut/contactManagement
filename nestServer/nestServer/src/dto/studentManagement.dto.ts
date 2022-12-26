export class admissionFormDto {
  readonly id: number;
  readonly studentName: string;
  readonly fatherName: string;
  readonly class: string;
  readonly fees: string;
  readonly dateofadmission: any;
  readonly comment: string;
  // readonly avatar: string;
}

export class admissionUserListDto {
  readonly id: number;
  readonly studentName: string;
  readonly fatherName: string;
  readonly class: string;
  readonly fees: string;
  readonly dateofadmission: any;
  readonly comment: string;
  // readonly avatar: string;
}

export class monthlyFeeFormDto {
  readonly id: number;
  readonly studentName: string;
  readonly feeStatus: boolean;
  readonly amount: number;
  readonly feePaidDate: Date;
}

export class monthlyFeeDetailsDto {
  readonly id: number;
  readonly studentName: string;
  readonly feeStatus: boolean;
  readonly amount: number;
  readonly feePaidDate: Date;
}

export class contactDto {
  readonly id: number;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: number;
  readonly password: string;
  readonly confirmPassword:string;
  readonly phoneNumber: number;
  readonly address: string;

}