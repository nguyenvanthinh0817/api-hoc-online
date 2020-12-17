const type = {
  ALL_CHANNEL: 1,
  ALL_VOD: 2,
  LIST_CHANNEL: 3,
  LIST_VOD_CATEGORY: 4,
  LIST_VOD: 5,
  ALL_ON_STREAM_EVENT: 6,
};

const resStatus = {
  BAD_REQUEST: 400,
  CREATED: 201,
};

const pagination = {
  SKIP: 0,
  LIMIT: 100,
};

const joiValid = {
  days: [1, 2, 3, 4, 5, 6],
};
module.exports = {
  type,
  resStatus,
  pagination,
  joiValid,
};
