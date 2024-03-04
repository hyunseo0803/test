import { Test, TestingModule } from '@nestjs/testing';
import { DumiController } from './dumi.controller';

describe('DumiController', () => {
  let controller: DumiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DumiController],
    }).compile();

    controller = module.get<DumiController>(DumiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
