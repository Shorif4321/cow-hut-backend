import mongoose from 'mongoose';
import app from './app';
import config from './config';
import { errorLogger, logger } from './shared/logger';

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
