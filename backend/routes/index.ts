import * as Hapi from '@hapi/hapi';
import { staticRoutes } from './main';
import { forbidden } from './forbidden';

export function initRoutes(server: Hapi.Server) {
  staticRoutes(server);
  forbidden(server);
}
