import * as httpProxy from 'http-proxy-middleware';

interface IHttpProxy extends httpProxy.Config {
  path: string[];
}

export interface IProxyService {
  getDefaultOptions(): any;
  getJsonRoutes(): IHttpProxy[];
}