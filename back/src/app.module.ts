import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RetrospectController } from './retrospect/retrospect.controller';
import { RetrospectService } from './retrospect/retrospect.service';

@Module({
  imports: [],
  controllers: [AppController, RetrospectController],
  providers: [AppService, RetrospectService],
})
export class AppModule {}
