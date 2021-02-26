import { Test, TestingModule } from '@nestjs/testing';
import { KaamService } from './kaam.service';

describe('KaamService', () => {
  let service: KaamService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KaamService],
    }).compile();

    service = module.get<KaamService>(KaamService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
