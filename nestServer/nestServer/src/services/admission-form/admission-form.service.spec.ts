import { Test, TestingModule } from '@nestjs/testing';
import { AdmissionFormService } from './admission-form.service';

describe('AdmissionFormService', () => {
  let service: AdmissionFormService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdmissionFormService],
    }).compile();

    service = module.get<AdmissionFormService>(AdmissionFormService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
