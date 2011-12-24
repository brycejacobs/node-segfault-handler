var _ = require('underscore');
var Step = require('step');
var vows = require('vows');
var assert = require('assert');
var segvhandler = require('../lib/segvhandler');

vows.describe('segvhandler')
.addBatch({
  'how on earth to test this?': {
    topic: function() {
      return 1;
    }
    ,'no idea': function(ret) {
      assert.equal(ret, 1);
    }
  }
})
.export(module);

