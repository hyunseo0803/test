import { Test, TestingModule } from '@nestjs/testing';
import { DumiService } from './dumi.service';

describe('DumiService', () => {
  let service: DumiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DumiService],
    }).compile();

    service = module.get<DumiService>(DumiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
