import winston from 'winston';

const logger = winston.createLogger({
  level: 'info', // Nível de log padrão
  format: winston.format.combine(
    winston.format.timestamp(), // Adiciona o carimbo de data/hora ao log
    winston.format.errors({ stack: true }), // Inclui a stack de erro no log
    winston.format.simple() // Formato do log
  ),
  transports: [
    new winston.transports.Console(), // Log para o console
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/info.log', level: 'info' }) // Log para arquivo

  ]
});

export default logger;