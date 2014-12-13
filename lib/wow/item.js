/**
 *
 */

module.exports = function(battleNetApiRequest) {
  'use strict';

  var item = {

    item: function(params, callback) {
      var origin = params.origin,
          id = params.id,
          locale = params.locale || '';

      battleNetApiRequest({
        origin: origin,
        path: '/wow/item/' + id,
        qs: {
          locale: locale
        }
      }, callback);
    },

    set: function(params, callback) {
      var origin = params.origin,
          id = params.id,
          locale = params.locale || '';

      battleNetApiRequest({
        origin: origin,
        path: '/wow/item/set/' + id,
        qs: {
          locale: locale
        }
      }, callback);
    }
  };

  return item;

};
