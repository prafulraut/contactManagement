import { Test, TestingModule } from '@nestjs/testing';
import { AdmissionUserListController } from './admission-user-list.controller';

describe('AdmissionUserListController', () => {
  let controller: AdmissionUserListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdmissionUserListController],
    }).compile();

    controller = module.get<AdmissionUserListController>(AdmissionUserListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
