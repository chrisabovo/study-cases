export class AppConfig {
  // String de conexão com o Banco de Dados Mongo.
  static MONGODB_CONNECTION_STRING: string = process.env.GE_MONGODB_CONNECTION_STRING || 'mongodb://172.28.187.26/GestaoEmail';

  //
  static PORT: number = process.env.PORT ? Number.parseInt(process.env.PORT) : 3600;
  static APP_ENDPOINT: string = process.env.APP_ENDPOINT || 'http://localhost:3600';
  static API_ENDPOINT: string = process.env.API_ENDPOINT || 'http://localhost:3600';
  static JWT_SECRET: string = process.env.JWT_SECRET || 'myS33!!creeeT';
  static JWT_EXPIRATION_IN_SECONDS: number = process.env.JWT_EXPIRATION_IN_SECONDS ? Number.parseInt(process.env.JWT_EXPIRATION_IN_SECONDS) : 36000;
  static ENVIRONMENT: string = process.env.ENVIRONMENT || 'dev';
  static PERMISSION_LEVELS_NORMAL_USER: number = process.env.PERMISSION_LEVELS_NORMAL_USER ? Number.parseInt(process.env.PERMISSION_LEVELS_NORMAL_USER) : 1;
  static PERMISSION_LEVELS_PAID_USER: number = process.env.PERMISSION_LEVELS_PAID_USER ? Number.parseInt(process.env.PERMISSION_LEVELS_PAID_USER) : 4;
  static PERMISSION_LEVELS_ADMIN: number = process.env.PERMISSION_LEVELS_ADMIN ? Number.parseInt(process.env.PERMISSION_LEVELS_ADMIN) : 2048;
}

Object.seal(AppConfig);
