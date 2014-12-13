/**
 *
 */

module.exports = function(battleNetApiRequest) {
  'use strict';

  function character(params, callback) {
    var origin = params.origin,
        realm = params.realm,
        name = params.name,
        locale = params.locale || '',
        fields = params.fields;

    battleNetApiRequest({
      origin: origin,
      path: '/wow/character/' + realm + '/' + name,
      qs: {
        locale: locale,
        fields: fields.join(',')
      }
    }, callback);
  }

  return {

    profile: function(params, callback) {
      params.fields = [];
      character(params, callback);
    },

    achievements: function(params, callback) {
      params.fields = ['achievements'];
      character(params, callback);
    },

    appearance: function(params, callback) {
      params.fields = ['appearance'];
      character(params, callback);
    },

    guild: function(params, callback) {
      params.fields = ['guild'];
      character(params, callback);
    },

    hunterPets: function(params, callback) {
      params.fields = ['hunterPets'];
      character(params, callback);
    },

    items: function(params, callback) {
      params.fields = ['items'];
      character(params, callback);
    },

    mounts: function(params, callback) {
      params.fields = ['mounts'];
      character(params, callback);
    },

    pets: function(params, callback) {
      params.fields = ['pets'];
      character(params, callback);
    },

    petSlots: function(params, callback) {
      params.fields = ['petSlots'];
      character(params, callback);
    },

    progression: function(params, callback) {
      params.fields = ['progression'];
      character(params, callback);
    },

    pvp: function(params, callback) {
      params.fields = ['pvp'];
      character(params, callback);
    },

    quests: function(params, callback) {
      params.fields = ['quests'];
      character(params, callback);
    },

    reputation: function(params, callback) {
      params.fields = ['reputation'];
      character(params, callback);
    },

    stats: function(params, callback) {
      params.fields = ['stats'];
      character(params, callback);
    },

    talents: function(params, callback) {
      params.fields = ['talents'];
      character(params, callback);
    },

    titles: function(params, callback) {
      params.fields = ['titles'];
      character(params, callback);
    },

    audit: function(params, callback) {
      params.fields = ['audit'];
      character(params, callback);
    },

    aggregate: function(params, callback) {
      character(params, callback);
    }

  };

};
