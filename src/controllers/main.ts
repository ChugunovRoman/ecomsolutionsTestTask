import * as Hapi from 'hapi';
import * as Boom from '@hapi/boom';

export async function mainController(req: Hapi.Request) {
  try {
    return new Boom<string>('', {
      statusCode: 200,
      data: 'Ok',
    });
  } catch (error) {
    return Boom.badRequest(error);
  }
}
