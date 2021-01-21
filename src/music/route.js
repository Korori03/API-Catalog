const musicExpress = require('express')
const musicRouter = musicExpress.Router()
const musicController =   require('./controller');

// Calls MusicList(_userid);
musicRouter.get('/list', musicController.findAll);

// Calls MusicGroup(_userid);
musicRouter.get('/percent', musicController.findAllPercent);

// Calls MusicTotal(_userid);
musicRouter.get('/total', musicController.findAllTotal);

// Calls MusicType(_type,_userid);
musicRouter.get('/:type', musicController.findType);

// Calls MusicTypePercent(_type,_userid);
musicRouter.get('/:type/percent', musicController.findTypePercent);

// Calls MusicItemSelection(_type,_item,_userid);
musicRouter.get('/:type/:item/info', musicController.findItem); 

module.exports = musicRouter