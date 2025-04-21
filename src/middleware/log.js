
const log = async (req, res, next) => {
  try {
    const request = {
      method: req.method,
      url: req.url,
      params: req.params,
      query: req.query,
      body: req.body,
      headers: {
        host: req.headers.host,
        accept: req.headers.accept,
        'user-agent': req.headers['user-agent'],
        referer: req.headers.referer
      }
    };

    const response = {
      status: res.statusCode,
      headers: res.getHeaders(),
    };

    console.log('Request:', request);
    console.log('Response:', response);

    next();
  } catch (error) {
    console.error('日志记录错误:', error);
  }
};

module.exports = { log };
