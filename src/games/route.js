const gamesExpress = require('express')
const gamesRouter = gamesExpress.Router()
const gamesController =   require('./controller');

// Calls GamesList(_userid);
gamesRouter.get('/list', gamesController.findAll);

// Calls GamesPercent(_userid);
gamesRouter.get('/percent', gamesController.findAllPercent);

// Calls GamesPercent(_userid);
gamesRouter.get('/total', gamesController.findAllTotal);

// Calls GamesBrand(_brand,_userid);
gamesRouter.get('/brand', gamesController.findBrands);

// Calls GamesBrandPercent(_brand,_userid);
gamesRouter.get('/brand/percent', gamesController.findBrandsPercent);

// Calls GamesSystem(_brand,_system,_userid);
gamesRouter.get('/brand/system', gamesController.findSystems);

// Calls GamesSystemPercent(_brand,_system,_userid);
gamesRouter.get('/brand/systems/percent', gamesController.findSystemsPercent);

// Calls GamesInfo(_brand,_system,_item,_userid);
gamesRouter.get('/brand/systems/item', gamesController.findGame);

module.exports = gamesRouter