import { Test, TestingModule } from '@nestjs/testing';
import { AdmissionFormController } from './admission-form.controller';

describe('AdmissionFormController', () => {
  let controller: AdmissionFormController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdmissionFormController],
    }).compile();

    controller = module.get<AdmissionFormController>(AdmissionFormController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
