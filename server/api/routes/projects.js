const Project = require('../../../models/standup');


module.exports = function (router) {
  router.get('/projects', (req, res) => {

  });
  // POST: Create new project...
  router.post('/projects', (req, res) => {
    const project = new Project(req.body);
    project.save((err, project) => {
      if (err) {
        return res.status(400).json(err);
      }
      return res.status(200).json(project);
    });
  });
};
