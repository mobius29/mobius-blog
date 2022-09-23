import { Module } from '@nestjs/common';
import { RetrospectResolver } from './retrospect.resolver';
import { RetrospectService } from './retrospect.service';

@Module({
  imports: [],
  providers: [RetrospectResolver, RetrospectService],
  exports: [RetrospectService],
})
export class RetrospectModule {}
