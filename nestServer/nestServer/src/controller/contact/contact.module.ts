import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { contactSchema } from './../../schemas/studentManagement.schema';
import { ContactService } from './../../services/contact/contact.service';
import { contactController } from './contact.controller';
import { contactDto } from 'src/dto/studentManagement.dto';

@Module({
  controllers: [contactController],
  imports: [
    MongooseModule.forFeature([ 
      {
        name: 'contact',
        schema: contactSchema,
        collection: 'contactList',
      },
    ]),
  ],
  providers: [ContactService],
})
export class contactModule {}
