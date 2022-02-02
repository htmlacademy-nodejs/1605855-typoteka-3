'use strict';

const {Router} = require(`express`);
const articlesRouter = new Router();

articlesRouter.get(`/category/:id`, (req, res) => res.render(`/admin/all-categories`));
articlesRouter.get(`/add`, (req, res) => res.render(`/admin/post`));
articlesRouter.get(`/edit/:id`, (req, res) => res.render(`/admin/admin-add-new-post`));
articlesRouter.get(`/:id`, (req, res) => res.render(`/post/user/post-user`));

module.exports = articlesRouter;
