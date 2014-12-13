/**
 *
 */

module.exports = function() {
  'use strict';

  return function(params, callback) {
    var origin = params.origin,
        id = params.id,
        locale = params.locale || '';

    battleNetApiRequest({
      origin: origin,
      path: '/wow/recipe/' + id,
      qs: {
        locale: locale
      }
    }, callback);
  };

};
