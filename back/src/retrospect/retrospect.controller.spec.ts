import { Test, TestingModule } from '@nestjs/testing';
import { RetrospectController } from './retrospect.controller';

describe('RetrospectController', () => {
  let controller: RetrospectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RetrospectController],
    }).compile();

    controller = module.get<RetrospectController>(RetrospectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
