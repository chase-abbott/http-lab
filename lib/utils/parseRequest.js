module.exports = rawRequest => {
  const parsedRequest = {};
  parsedRequest.method = rawRequest.split(' ')[0];
  parsedRequest.path = rawRequest.split(' ')[1];
  
  if(rawRequest.split('\r')[2]){
    parsedRequest.body = rawRequest.split('\r')[2].split('\n')[1];
  }
 

  return parsedRequest;
};
