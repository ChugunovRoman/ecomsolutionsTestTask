import * as Hapi from '@hapi/hapi';

import { mainController } from '../controllers';

export function mainRoutes(server: Hapi.Server): void {
  const routes: Hapi.ServerRoute[] = [
    {
      method: 'GET',
      path: '/',
      handler: mainController,
    },
  ];

  server.route(routes);
}
