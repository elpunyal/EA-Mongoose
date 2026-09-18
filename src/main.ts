import mongoose from 'mongoose';
import { OrganizationModel } from './models/organization.model.js';
import {
  createProject,
  getProjectById,
  updateProject,
  deleteProject,
  listAllProjects
} from './services/project.service.js';

async function runDemo() {
  try {
    // 1. Connexió
    console.log('Connectant a MongoDB...');
    await mongoose.connect('mongodb://127.0.0.1:27017/ea_mongoose');
    console.log('Connectat a MongoDB');

    // Neteja per fer el test repetible
    await OrganizationModel.deleteMany({});

    // 2. Creem una organització base per enllaçar-la
    const org = await OrganizationModel.create({
      name: 'Universitat de Barcelona',
      country: 'Spain'
    });
    console.log(`Organització creada amb ID: ${org._id}`);

    console.log('\n--- INICI DEL TEST CRUD ---');

    // CREATE
    console.log('\n1. Provant create()...');
    const newProject = await createProject({
      title: 'Desenvolupament de App',
      budget: 15000,
      organization: org._id
    });
    console.log('   Projecte creat:', newProject);

    // GET BY ID (amb populate)
    console.log('\n2. Provant getById()...');
    const projectWithOrg = await getProjectById(newProject._id.toString());
    console.log('   Projecte amb Organització (Populate):', projectWithOrg);

    // UPDATE
    console.log('\n3. Provant update()...');
    const updatedProject = await updateProject(newProject._id.toString(), { budget: 20000 });
    console.log('   Projecte actualitzat (budget=20000):', updatedProject);

    // LIST ALL
    console.log('\n4. Provant listAll()...');
    const allProjects = await listAllProjects();
    console.log('   Tots els projectes:', allProjects);

    // DELETE
    console.log('\n5. Provant delete()...');
    const deletedProject = await deleteProject(newProject._id.toString());
    console.log('   Projecte eliminat:', deletedProject);

    console.log('\n--- FI DEL TEST CRUD ---');

  } catch (error) {
    console.error('Error:', error);
  } finally {
    // 3. Desconnexió
    await mongoose.disconnect();
    console.log('\nDesconnectat de MongoDB');
  }
}

runDemo();
