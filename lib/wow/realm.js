/**
 *
 */

module.exports = function(battleNetApiRequest) {
  'use strict';

  return function(params, callback) {
    var origin = params.origin,
        realms = params.realms || [],
        locale = params.locale || '';

    battleNetApiRequest({
      origin: origin,
      path: '/wow/realm/status',
      qs: {
        locale: locale,
        realms: realms.join(',')
      }
    }, callback);
  };

};
