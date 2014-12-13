/**
 *
 */

var request = require('request'),
    extend = require('deep-extend');

module.exports = function(api_key) {
  'use strict';

  var version = 'v0.4.7';

  var defaults = {
    host: '.api.battle.net',
    method: 'GET',
    json: true,
    qs: {
      apikey: api_key || ''
    },
    headers: {
      'User-Agent': 'Node.js/' + process.version + ' battlenet-api/' + version
    },
    encoding: 'UTF-8',
    timeout: 10000,
    followRedirect: true,
    maxRedirects: 10,
    gzip: true
  };

  var regionMap = {
    us: 'en_US',
    eu: 'en_GB',
    sea: 'en_US',
    kr: 'ko_KR',
    tw: 'zh_TW'
  };

  return function(params, callback) {

    var options = extend(defaults, params);
        options.origin = options.origin || 'us';
        options.qs.locale = options.qs.locale || regionMap[options.origin];
        options.url = 'https://' + options.origin + options.host + options.path;

    request(options, function(err, resp, body) {
      callback(err, body);
    });

  };

};
