import mongoose from 'mongoose';
import app from './app';
import config from './config';
import { errorLogger, logger } from './shared/logger';
import { Server } from 'http';

// uncought Exception
process.on('uncaughtException', error => {
  errorLogger.error(error);
  process.exit(1);
});

let server: Server;

async function bootstrap() {
  try {
    await mongoose.connect(config.database_Url as string);
    logger.info('Database connected successfully');

    app.listen(config.port, () => {
      logger.info(`Cow hut bakend runing on port ${config.port}`);
    });
  } catch (err) {
    errorLogger.error('Failed to connected Database', err);
  }
}

bootstrap();

process.on('unhandledRejection', error => {
  if (server) {
    server.close(() => {
      errorLogger.error(error);
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});

//sigterm setup
process.on('SIGTERM', () => {
  logger.info('Sigterm is Received');
  if (server) {
    server.close();
  }
});
