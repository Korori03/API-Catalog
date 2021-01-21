const videosExpress = require('express')
const videosRouter = videosExpress.Router()
const videosController =   require('./controller');

// Calls VideosList(_userid);
videosRouter.get('/list', videosController.findAll);

// Calls VideosGroup(_userid);
videosRouter.get('/percent', videosController.findAllPercent);

// Calls VideosTotal(_userid);
videosRouter.get('/total', videosController.findAllTotal);

// Calls VideosType(_type,_userid);
videosRouter.get('/:type', videosController.findType);

// Calls VideosTypePercent(_type,_userid);
videosRouter.get('/:type/percent', videosController.findTypePercent);

// Calls VideosItemSelection(_type,_item,_userid);
videosRouter.get('/:type/:item/info', videosController.findItem); 

module.exports = videosRouter