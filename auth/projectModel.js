const db = require('../database/dbConfig');

function addProject(project) {
    return db('projects').insert(project);
}
function addResource(resource) {
    return db('resources').insert(resource);
}
function addTask(task) {
    return db('tasks').insert(task);
}

function findAllProjects() {
    return db('projects');
}
function findAllResources() {
    return db('resources');
}
function findAllTasks() {
    return db('tasks');
}

module.exports = {
    addProject,
    addResource,
    addTask,
    findAllProjects,
    findAllResources,
    findAllTasks
};