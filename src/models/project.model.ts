import { Schema, model, Types } from 'mongoose';
import { IOrganization } from './organization.model.js';

// Interfície TypeScript del nou model Project
export interface IProject {
  _id?: Types.ObjectId;
  title: string;
  budget: number;
  // Referència a la col·lecció Organization (pot ser l'ID o l'objecte sencer si fem populate)
  organization: Types.ObjectId | IOrganization;
}

// Schema de Mongoose vinculat a Organization
const projectSchema = new Schema<IProject>({
  title: { type: String, required: true },
  budget: { type: Number, required: true },
  organization: { type: Schema.Types.ObjectId, ref: 'Organization', required: true }
});

export const ProjectModel = model<IProject>('Project', projectSchema);
