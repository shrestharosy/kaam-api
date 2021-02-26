import * as mongoose from 'mongoose';

// schema defines how a model should look like regarding the properties it has
// models are blueprints for objects

export const KaamSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  salary: { type: String, required: true },
});
