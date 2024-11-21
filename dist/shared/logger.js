'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.errorLogger = exports.logger = void 0;
const path_1 = __importDefault(require('path'));
const winston_1 = require('winston');
const { combine, timestamp, label, printf, prettyPrint } = winston_1.format;
const winston_daily_rotate_file_1 = __importDefault(
  require('winston-daily-rotate-file'),
);
const myFormat = printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp);
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const second = date.getSeconds();
  return `${date.toDateString()} ${hour}:${minutes}:${second} [${label}] : [${level}] : [${message}] `;
});
const logger = (0, winston_1.createLogger)({
  level: 'info',
  format: combine(label({ label: 'CH' }), timestamp(), myFormat, prettyPrint()),
  transports: [
    new winston_1.transports.Console(),
    new winston_daily_rotate_file_1.default({
      filename: path_1.default.join(
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
exports.logger = logger;
const errorLogger = (0, winston_1.createLogger)({
  level: 'error',
  format: combine(label({ label: 'CH' }), timestamp(), myFormat),
  transports: [
    new winston_1.transports.Console(),
    new winston_daily_rotate_file_1.default({
      filename: path_1.default.join(
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
exports.errorLogger = errorLogger;
