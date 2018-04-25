'use strict';

module.exports = function(app) {
    var usersController = require('../controllers/usersController');

    app.route('/users')
        .get(usersController.list_users)
        .post(usersController.create_user);

    app.route('/users/:userId')
        .get(usersController.get_user)
        .put(usersController.update_user)
        .delete(usersController.delete_user);
};