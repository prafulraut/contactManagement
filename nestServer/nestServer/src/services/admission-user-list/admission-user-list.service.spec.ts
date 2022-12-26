import { Test, TestingModule } from '@nestjs/testing';
import { AdmissionUserListService } from './admission-user-list.service';

describe('AdmissionUserListService', () => {
  let service: AdmissionUserListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdmissionUserListService],
    }).compile();

    service = module.get<AdmissionUserListService>(AdmissionUserListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
