import * as Hapi from '@hapi/hapi';
import * as Inert from '@hapi/inert';
import * as Vision from '@hapi/vision';
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
      await this.server.register([Inert, Vision]);
    } catch (error) {
      console.error('Register hapi plugins error: ', error.stack);
    }

    try {
      const interval = setInterval(async () => {
        const res = await superagent.get('https://blockchain.info/ru/ticker');
        const body = res.body as Global.BlockchainBody;

        console.log('Res: ', body.USD);
      }, 1000);
    } catch (error) {
      console.error('Failed connect to wss://ws.cex.io/ws, ERROR ', error.stack);
    }

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
