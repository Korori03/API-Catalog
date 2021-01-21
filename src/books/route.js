const booksExpress = require('express')
const booksRouter = booksExpress.Router()
const booksController =   require('./controller');

// Calls BooksList(_userid);
booksRouter.get('/list', booksController.findList); 

// Calls BooksTotal(_userid);
booksRouter.get('/total', booksController.findTotal); 

// Calls BooksListPercent(_userid);
booksRouter.get('/percent', booksController.findAllPercent); 

// Calls BooksType(_type,_userid);
booksRouter.get('/:type', booksController.findType);

// Calls BooksTypePercent(_type,_userid);
booksRouter.get('/:type/percent', booksController.findTypePercent); 

// Calls BooksInfo(_type,_item,_userid);
booksRouter.get('/:type/:item/info', booksController.findBook); 

module.exports = booksRouter