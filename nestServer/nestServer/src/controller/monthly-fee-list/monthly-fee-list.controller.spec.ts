import { Test, TestingModule } from '@nestjs/testing';
import { MonthlyFeeListController } from './monthly-fee-list.controller';

describe('MonthlyFeeListController', () => {
  let controller: MonthlyFeeListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MonthlyFeeListController],
    }).compile();

    controller = module.get<MonthlyFeeListController>(MonthlyFeeListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
