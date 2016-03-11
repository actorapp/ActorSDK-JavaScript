actor = require('./actor.js')

module.exports = {
  create: function(config) {
    if (Array.isArray(config)) {
      console.error('Deprecation notice: first argument should be an object with "endpoints" key.');
      config = {
        endpoints: config
      };
    }

    var client = new actor.ActorApp();
    client.init(config);

    return client;
  }
};
