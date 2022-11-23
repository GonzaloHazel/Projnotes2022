import mongoose from 'mongoose';
import logger from './winston';

class MongooseOdm {
  // Contructor de la clase
  constructor(url) {
    this.url = url;
  }

  // Metodo para conectar la BD
  async connect() {
    try {
      // Configuraciones que requiere mongoose
      mongoose.Promise = global.Promise;
      logger.info(`🔌 Conectando a la BD en : ${this.url}`);
      // Intento de conexion
      const connection = await mongoose.connect(this.url);
      return connection;
    } catch (error) {
      logger.error(`💀 no se realizo la conexion debido a: ${error.message}`);
      return false;
    }
  }
}

export default MongooseOdm;
