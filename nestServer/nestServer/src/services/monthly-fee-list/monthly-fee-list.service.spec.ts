import { Test, TestingModule } from '@nestjs/testing';
import { MonthlyFeeListService } from './monthly-fee-list.service';

describe('MonthlyFeeListService', () => {
  let service: MonthlyFeeListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MonthlyFeeListService],
    }).compile();

    service = module.get<MonthlyFeeListService>(MonthlyFeeListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
