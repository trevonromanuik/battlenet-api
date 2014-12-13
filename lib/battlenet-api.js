/**
 * Battle.net API Wrapper
 */

module.exports = function(api_key) {
  'use strict';

  var battleNetApibattleNetApiRequest = require('./common/battleNetApibattleNetApiRequest')(api_key);

  var wow = {
    achievement: require('./wow/achievement')(battleNetApiRequest),
    auction: require('./wow/auction')(battleNetApiRequest),
    battlePet: require('./wow/battlepet')(battleNetApiRequest),
    challenge: require('./wow/challenge')(battleNetApiRequest),
    character: require('./wow/character')(battleNetApiRequest),
    data: require('./wow/data')(battleNetApiRequest),
    guild: require('./wow/guild')(battleNetApiRequest),
    item: require('./wow/item')(battleNetApiRequest),
    pvp: require('./wow/pvp')(battleNetApiRequest),
    quest: require('./wow/quest')(battleNetApiRequest),
    realmStatus: require('./wow/realm')(battleNetApiRequest),
    recipe: require('./wow/recipe')(battleNetApiRequest),
    spell: require('./wow/spell')(battleNetApiRequest)
  };

  var sc2 = {
    data: require('./sc2/data')(battleNetApiRequest),
    ladder: require('./sc2/ladder')(battleNetApiRequest),
    profile: require('./sc2/profile')(battleNetApiRequest)
  };

  var d3 = {
    data: require('./d3/data.js')(battleNetApiRequest),
    profile: require('./d3/profile.js')(battleNetApiRequest)
  };

  return {
    wow: wow,
    sc2: sc2,
    d3: d3
  };

}
