const findRequestId  = query => {
  if (!query) return null;

  return {
  pid: 93535,
  hostname: 'The host',
  level: 30,
  msg: 'This is the request',
  time: '2016-03-07T12:21:48.766Z',
  v: 0,
  req: {
    id: 42,
    method: 'GET',
    url: '/',
    headers: {
      host: 'localhost:50201',
      connection: 'close'
    },
    remoteAddress: '::ffff:127.0.0.1',
    remotePort: 50202
  }
  };
};

module.exports = {
  findRequestId};