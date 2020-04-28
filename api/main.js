const express = require('express');

const router = express.Router();

// require each of the files in route folder (router) was expoerted to each route
require('./routes/standup')(router);
require('./routes/projects')(router);
require('./routes/team')(router);

module.exports = router;
