const TeamMember = require('../../../models/standup');

module.exports = function (router) {
  router.get('/teams', (req, res) => {

  });

  // POST: Create new TeamMember...
  router.post('/team', (req, res) => {
    let member = new TeamMember(req.body);
    member.save((err, member) => {
      if (err) {
        return res.status(400).json(err);
      }
      return res.status(200).json(member);
    });
  });
};
