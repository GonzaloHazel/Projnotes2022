// importando Mongoose
import mongoose from 'mongoose';
// destructurando un generador de schemas de mongoose
const { Schema } = mongoose;

const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
// Exportando la compliacion de ProjectSchema
// en un modelo de mongoose
export default mongoose.model('project', ProjectSchema);
