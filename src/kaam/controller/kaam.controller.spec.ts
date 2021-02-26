import { Test, TestingModule } from '@nestjs/testing';
import { KaamController } from './kaam.controller';

describe('KaamController', () => {
  let controller: KaamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KaamController],
    }).compile();

    controller = module.get<KaamController>(KaamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
