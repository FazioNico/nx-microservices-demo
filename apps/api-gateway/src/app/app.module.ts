import { Module, MiddlewareConsumer } from '@nestjs/common';
import { MorganModule, MorganInterceptor } from 'nest-morgan';
import { ServeFaviconMiddleware } from '@nest-middlewares/serve-favicon';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProxyModule } from './proxy/proxy.module';
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
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    // IMPORTANT! Call Middleware.configure BEFORE using it for routes
    ServeFaviconMiddleware.configure(join(__dirname, '/assets/favicon.ico'))
    consumer.apply(ServeFaviconMiddleware).forRoutes( '' );
  }
}
