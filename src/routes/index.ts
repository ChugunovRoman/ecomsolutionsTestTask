import * as Hapi from '@hapi/hapi';
import { mainRoutes } from './main';
import { forbidden } from './forbidden';

export function initRoutes(server: Hapi.Server) {
  mainRoutes(server);
  forbidden(server);
}
