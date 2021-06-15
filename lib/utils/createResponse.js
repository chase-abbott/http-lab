module.exports = ({ body = '', contentType = 'text/html', status = '200 OK' }) => {
  return `HTTP/1.1 ${status}
Accept-Ranges: bytes
Content-Type: ${contentType}\r
\r
${body}`;
};
