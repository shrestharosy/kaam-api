import { Document } from 'mongoose';
export interface Kaam extends Document {
  id?: string;
  title: string;
  description: string;
  salary: string | number;
}
