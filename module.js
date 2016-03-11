actor = require('./actor.js')

module.exports = {
  create: function(config) {
    var client = new actor.ActorApp();
    client.init(config);
    return client;
  }
}
