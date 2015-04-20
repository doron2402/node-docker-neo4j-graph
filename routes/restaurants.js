var RestaurantModel = require('../models/restaurants');
var restaurantsAdapter = require(__BASE + '/adapters/restaurants');
/**
 * GET /restaurants
 */
exports.list = function (req, res, next) {
  restaurantsAdapter.getRestaurants(req.params, function(err, results) {
    if (err) {
      console.log(err);
      return next(err);
    }
    console.log(results);
    return res.render('restaurants', {
      restaurants: results.data
    });
  });
    // Restaurants.getAll(function (err, restaurants) {
        // if (err) return next(err);
        
    // });
};

/**
 * GET /restaurants/:id
 */
exports.show = function (req, res, next) {
    // Restaurants.get(req.params.id, function (err, restaurants) {
    //     if (err) return next(err);
    //     // TODO also fetch and show followers? (not just follow*ing*)
    //     Restaurants.getFollowingAndOthers(function (err, following, others) {
    //         if (err) return next(err);
    //         res.render('restaurants', {
    //             restaurants: restaurants,
    //             followers: followers
    //             others: others
    //         });
    //     });
    // });
 	res.render('restaurant', {
    restaurant: {name: 'no name'},
    restaurant_id: req.params.id || null
  });
};

/**
 * POST /restaurants/:id
 */
exports.create = function (req, res, next) {
	//Check if node exist
	
	//if not exist create
  RestaurantModel.create({
      name: req.body['name'],
      restaurant_id: req.body['restaurant_id'],
      metro_id: req.body['metro_id']
  }, function (err, user) {
      if (err) return next(err);
      return res.json({code: 'ok'});
  });
};