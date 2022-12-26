import { Test, TestingModule } from '@nestjs/testing';
import { MonthlyFeeFormService } from './monthly-fee-form.service';

describe('MonthlyFeeFormService', () => {
  let service: MonthlyFeeFormService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MonthlyFeeFormService],
    }).compile();

    service = module.get<MonthlyFeeFormService>(MonthlyFeeFormService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
