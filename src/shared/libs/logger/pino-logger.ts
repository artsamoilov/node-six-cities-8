import {Logger, pino} from 'pino';
import {ILogger} from './types/logger.interface.js';

export class PinoLogger implements ILogger {
  private readonly logger: Logger;

  constructor() {
    this.logger = pino();
  }

  public debug(message: string, ...args: unknown[]): void {
    this.logger.debug(message, ...args);
  }

  public error(message: string, error: Error, ...args: unknown[]): void {
    this.logger.error(error, message, ...args);
  }

  public info(message: string, ...args: unknown[]): void {
    this.logger.info(message, ...args);
  }

  public warn(message: string, ...args: unknown[]): void {
    this.logger.warn(message, ...args);
  }
}
