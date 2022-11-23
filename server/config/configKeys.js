// Importamos la dependencia de dotEnv
import dotEnv from 'dotenv';
// Cargamos las variable de entorno
dotEnv.config();

// Creando objeto de configuracion

// Creando configuracion por defecto
const defaultConfig = {
  port: process.env.PORT || '3000',
  appVersion: process.env.APP_VERSION,
};

// Configuracion de desarrollo
const devConfig = {
  env: 'development',
  moongoUrl: process.env.DEV_DATABASE_URL,
  debug: process.env.DEBUG,
};

// Creando configracion para produccion
const prodConfig = {
  env: 'production',
  moongoUrl: 'could url',
};

// Funcion ado el entorno de ejecucion
// nos retotne el objeto de configuracion adecuado
function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig;
    case 'producction':
      return prodConfig;
    default:
      return prodConfig;
  }
}
// ... <- espread operator
// Exportamos la configuracion
export default {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV),
};
