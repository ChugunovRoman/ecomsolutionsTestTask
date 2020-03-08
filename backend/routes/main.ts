import * as Hapi from '@hapi/hapi';

import { mainController } from '../controllers';

export function mainRoutes(server: Hapi.Server): void {
  const routes: Hapi.ServerRoute[] = [
    {
      method: 'GET',
      path: '/',
      handler: {
        file: 'index.html',
      },
    },
    {
      method: 'GET',
      path: '/favicon.ico',
      handler: {
        file: 'favicon.ico',
      },
    },
    {
      method: 'GET',
      path: '/public/{path*}',
      handler: {
        directory: {
          path: '.',
          redirectToSlash: true,
          index: true,
        },
      },
    },
  ];

  server.route(routes);
}
