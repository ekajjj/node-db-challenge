const router = require('express').Router();

const Projects = require('./projectModel');

// Project find and add
router.get('/', (req, res) => {
    Projects.findAllProjects()
        .then(project => {
            res.status(200).json(project);
        })
        .catch(err => {
            res.status(500).json({
                errorMessage: `Got an error while finding projects: ${err}`
            });
        });
});

router.post('/', (req, res) => {
    const projectData = req.body;
    Projects.addProject(projectData)
        .then(ids => {
            res.status(201).json({ created: ids[0]})
        })
        .catch(err => {
            res.status(500).json({ errorMessage: `Got an error while adding your project: ${err}`})
        });
});

//Tasks find and add
router.get('/tasks', (req, res) => {
    Projects.findAllTasks()
        .then(task => {
            res.status(200).json(task);
        })
        .catch(err => {
            res.status(500).json({
                errorMessage: `Got an error while finding tasks: ${err}`
            });
        });
});

router.post('/tasks', (req, res) => {
    const taskData = req.body;
    Projects.addTask(taskData)
        .then(ids => {
            res.status(201).json({ created: ids[0]})
        })
        .catch(err => {
            res.status(500).json({ errorMessage: `Got an error while adding your task: ${err}`})
        });
});

//Resources find and add
router.get('/resources', (req, res) => {
    Projects.findAllResources()
        .then(resource => {
            res.status(200).json(resource);
        })
        .catch(err => {
            res.status(500).json({
                errorMessage: `Got an error while finding resources: ${err}`
            });
        });
});

router.post('/resources', (req, res) => {
    const resourceData = req.body;
    Projects.addResource(resourceData)
        .then(ids => {
            res.status(201).json({ created: ids[0]})
        })
        .catch(err => {
            res.status(500).json({ errorMessage: `Got an error while adding your resource: ${err}`})
        });
});

module.exports = router;