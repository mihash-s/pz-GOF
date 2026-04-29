// src/creational/factory-method/Loggers.ts
interface ILogger {
    log(message: string): void;
}

class FileLogger implements ILogger {
    log(message: string) { console.log(`Writing to FILE: ${message}`); }
}

class CloudLogger implements ILogger {
    log(message: string) { console.log(`Sending to CLOUD: ${message}`); }
}

abstract class LoggerFactory {
    abstract createLogger(): ILogger;

    output(msg: string) {
        const logger = this.createLogger();
        logger.log(msg);
    }
}

export class FileLoggerFactory extends LoggerFactory {
    createLogger() { return new FileLogger(); }
}

export class CloudLoggerFactory extends LoggerFactory {
    createLogger() { return new CloudLogger(); }
}
