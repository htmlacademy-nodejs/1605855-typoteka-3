'use strict';

const {Router} = require(`express`);
const myRoutes = new Router();

myRoutes.get(`/comments`, (req, res) => res.send(`/my/comments`));
myRoutes.get(`/categories`, (req, res) => res.send(`/my/catgories`));

module.exports = myRoutes;
