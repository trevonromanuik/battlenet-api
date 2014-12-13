/**
 *
 */

module.exports = function(battleNetApiRequest) {
  'use strict';

  return function(params, callback) {
    var origin = params.origin,
        id = params.id,
        locale = params.locale || '';

    battleNetApiRequest({
      origin: origin,
      path: '/sc2/ladder/' + id,
      qs: {
        locale: locale
      }
    }, callback);
  };

};
