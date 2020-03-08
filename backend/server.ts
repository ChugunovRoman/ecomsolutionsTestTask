import * as Hapi from '@hapi/hapi';
import * as Inert from '@hapi/inert';
import * as Nes from '@hapi/nes';
import * as superagent from 'superagent';

import { initRoutes } from './routes';
import { Logger } from './plugins';

export class Server {
  private server: Hapi.Server;

  constructor(options: Hapi.ServerOptions) {
    this.server = new Hapi.Server(options);
  }

  private async register() {
    try {
      await Logger(this.server);
      await this.server.register([Inert, Nes]);
    } catch (error) {
      console.error('Register hapi plugins error: ', error.stack);
    }

    let interval: NodeJS.Timeout | null = null;
    this.server.subscription('/course', {
      onSubscribe: async (socket: Nes.Socket) => {
        interval = setInterval(async () => {
          const res = await superagent.get('https://blockchain.info/ru/ticker');
          const body = res.body as Global.BlockchainBody;

          this.server.publish('/course', JSON.stringify({ ...body.USD, timestamp: Date.now() }));
        }, 1000);
      },
      onUnsubscribe: async () => {
        if (interval) {
          clearInterval(interval);
        }
      },
    });

    try {
      initRoutes(this.server);
    } catch (error) {
      console.error('Initialize routes ERROR: ', error.stack);
    }
  }
  public async start() {
    try {
      await this.register();
      await this.server.start();
      console.info(`Server is running ${this.server.info.uri}`);
    } catch (error) {
      console.error('Hapi server start ERROR: ', error.stack);
    }
  }
}
