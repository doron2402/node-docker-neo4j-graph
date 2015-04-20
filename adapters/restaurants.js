'use strict';
var request = require('request');
var querystring = require('querystring');
var restaurants = {};

restaurants.getRestaurants = function(args, cb) {
	var queryStringRequest = {
        page: args.page || 1,
        pageSize: args.pageSize || 20,
        domain: args.domain || 'com',
        metroId: args.metroId || 4,
    };
    var options = {
        url:  'http://restaurant-ci.otenv.com/v8/restaurants?' + querystring.stringify(queryStringRequest),
        headers: {
            'User-Agent': 'request'
        }
    };

    var callback = function(error, response, body) {
        return cb(error, JSON.parse(body));
    }

    request(options, callback);
};


module.exports = restaurants;