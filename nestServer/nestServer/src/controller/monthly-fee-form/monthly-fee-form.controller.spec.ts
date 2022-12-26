import { Test, TestingModule } from '@nestjs/testing';
import { MonthlyFeeFormController } from './monthly-fee-form.controller';

describe('MonthlyFeeFormController', () => {
  let controller: MonthlyFeeFormController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MonthlyFeeFormController],
    }).compile();

    controller = module.get<MonthlyFeeFormController>(MonthlyFeeFormController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
