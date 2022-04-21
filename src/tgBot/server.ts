import fastify from 'fastify';
import { ENV } from '../common/config/config';
import { cronJobPlugin } from '../common/cron/cron';
import { dbPlugin } from '../common/db/db';
import { globalErrorDecorator } from '../common/decorators/decorator';
import { BotApi } from "../common/plugin/bot";
import { Start } from './command/start';
import { hearsPlugin } from './on/text';


const server = fastify({ logger: true });

server.register(dbPlugin);
server.register(globalErrorDecorator);
server.register(BotApi);
server.register(Start);
server.register(hearsPlugin);
server.register(cronJobPlugin);

async function start() {
  console.log('ENV.BOT: ', ENV.BOT);
  console.log('ENV.HOST: ', ENV.HOST);

  try {
    const options = {
      host: ENV.HOST,
      port: ENV.BOT,
    };

    await server.listen(options);
    server.log.info(server.route);
    server.log.info('Started user successfully');
  } catch (error) {
    console.log('error bot: ', error);
    process.exit(1);
  }
}

start();