'use strict';

const {Router} = require(`express`);
const myRoutes = new Router();

myRoutes.get(`/comments`, (req, res) => res.render(`admin/comments`));
myRoutes.get(`/categories`, (req, res) => res.render(`admin/all-categories`));

module.exports = myRoutes;
