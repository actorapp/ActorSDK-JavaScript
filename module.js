actor = require('./actor.js')

module.exports = {
  create: function(endpoints) { return new actor.ActorApp(endpoints) }
}
