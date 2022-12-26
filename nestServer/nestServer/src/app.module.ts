import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdmissionFormModule } from './controller/admission-form/admission-form.module';
import { AdmissionUserListModule } from './controller/admission-user-list/admission-user-list.module';
import { contactModule } from './controller/contact/contact.module';
import { MonthlyFeeFormModule } from './controller/monthly-fee-form/monthly-fee-form.module';
import { MonthlyFeeListModule } from './controller/monthly-fee-list/monthly-fee-list.module';
import { MongoDB } from './dbconfig';

@Module({
  imports: [
    // MongooseModule.forFeature(
    //   [
    //     {
    //       name: 'admissionUserList',
    //       schema: admissionUserListSchema,
    //       collection: 'admission_user_list',
    //     },
    //   ],
    //   'dataManagementDb',
    // ),

    // for multiple
    // MongooseModule.forFeature([
    //   {
    //     name: 'admissionUserList',
    //     schema: admissionUserListSchema,
    //     collection: 'admission_user_list',
    //   },
    // ],),

    // MongooseModule.forRoot('mongodb://localhost/student_management'),
    // ConfigModule.forRoot({ load: [configuration] }),
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(MongoDB.DbConnection),
    AdmissionFormModule,
    AdmissionUserListModule,
    MonthlyFeeFormModule,
    MonthlyFeeListModule,
    contactModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
