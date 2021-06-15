module.exports = rawRequest => {
  const parsedRequest = {};
  parsedRequest.method = rawRequest.split(' ')[0];
  parsedRequest.path = rawRequest.split(' ')[1];
  
 
  if(rawRequest.split('\r').pop()){
    parsedRequest.body = rawRequest.split('\r').pop().split('\n')[1];
  }
 

  return parsedRequest;
};
