const { authenticate } = require("@feathersjs/authentication").hooks;
const conversRes = require("../../hooks/refill-coins/convers-res");
const addCoins = require("../../hooks/refill-coins/add-coins");
module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [conversRes],
    get: [],
    create: [],
    update: [],
    patch: [addCoins],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
