import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProxyModule } from './proxy/proxy.module';

@Module({
  imports: [ProxyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
