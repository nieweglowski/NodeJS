'use strict';

exports.list_users = function(req, res) {
    res.send("users");
};

exports.create_user = function(req, res) {
    res.send("create user");
};

exports.get_user = function(req, res) {
    res.send("get user");
};

exports.update_user = function(req, res) {
    res.send("update user");
};

exports.delete_user = function(req, res) {
    res.send("delete user")
};