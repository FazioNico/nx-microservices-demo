import { Injectable } from '@nestjs/common';
import { IProxyService } from './proxy.interface';

import * as routes from '../config/routes';

@Injectable()
export class ProxyService implements IProxyService {
  getDefaultOptions(): object {
    return {
      logLevel: 'debug',
      changeOrigin: true,
      prependPath: false,
    };
  }

  getJsonRoutes(): any {
    return routes.default;
  }
}