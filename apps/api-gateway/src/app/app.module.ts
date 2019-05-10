import { Module } from '@nestjs/common';
import { MorganModule, MorganInterceptor } from 'nest-morgan';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProxyModule } from './proxy/proxy.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { environment } from '../environments/environment';

@Module({
  imports: [
    ProxyModule,
    MorganModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: MorganInterceptor((!environment.production) ? 'dev' : 'combined'),
    },
  ],
})
export class AppModule {}
