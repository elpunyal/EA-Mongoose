import { ProjectModel, IProject } from '../models/project.model.js';

// Service Layer: funcions asíncrones pures per gestionar la col·lecció Project

export async function createProject(data: Partial<IProject>) {
  const newProject = new ProjectModel(data);
  return await newProject.save();
}

export async function getProjectById(id: string) {
  // Retorna el document amb el populate de l'organització
  return await ProjectModel.findById(id).populate('organization').lean();
}

export async function updateProject(id: string, data: Partial<IProject>) {
  return await ProjectModel.findByIdAndUpdate(id, data, { new: true }).lean();
}

export async function deleteProject(id: string) {
  return await ProjectModel.findByIdAndDelete(id).lean();
}

export async function listAllProjects() {
  // Llista tots els documents usant .lean()
  return await ProjectModel.find().populate('organization').lean();
}
