// Importando dependencia debug
import Debug from 'debug';
// importando config keys
import configKeys from '../config/configKeys';
// Establecemos el proceso a debuggear
const debug = Debug(configKeys.debug);
// exportando el logger de debuggeo
export default debug;
