import { Module, MiddlewareConsumer } from '@nestjs/common';
import * as httpProxy from 'http-proxy-middleware';

import { ProxyService } from './proxy.service';

@Module({
  imports: [],
  controllers: [],
  providers: [ProxyService],
})
export class ProxyModule {
  constructor(private readonly proxyService: ProxyService) {}
  /**
   * Apply http-proxy-middleware for Gateway Routes.
   * For more information, see: https://github.com/chimurai/http-proxy-middleware
   * @param consumer
   */
  configure(consumer: MiddlewareConsumer) {
    this.proxyService.getJsonRoutes().map(routeOptions => {
      const proxyPath = routeOptions.path;
      delete routeOptions.path;
      const proxyOptions = {
        ...this.proxyService.getDefaultOptions(),
        ...routeOptions,
      };
      consumer.apply(httpProxy(proxyPath, proxyOptions)).forRoutes('*');
    });
  }
}
