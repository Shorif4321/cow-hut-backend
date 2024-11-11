import path from 'path';
import { createLogger, format, transports } from 'winston';
const { combine, timestamp, label, printf, prettyPrint } = format;
import DailyRotateFile from 'winston-daily-rotate-file';

const myFormat = printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp);
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const second = date.getSeconds();

  return `${date.toDateString()} ${hour}:${minutes}:${second} [${label}] : [${level}] : [${message}] `;
});

const logger = createLogger({
  level: 'info',
  format: combine(label({ label: 'CH' }), timestamp(), myFormat, prettyPrint()),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'success',
        'CH-%DATE%-success.log',
      ),
      datePattern: 'YYYY-DD-MM-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
});

const errorLogger = createLogger({
  level: 'error',
  format: combine(label({ label: 'CH' }), timestamp(), myFormat),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'error',
        'DCH-%DATE%-success.log',
      ),
      datePattern: 'YYYY-DD-MM-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
});

export { logger, errorLogger };
