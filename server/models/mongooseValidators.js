
exports.urlValidator = function(){
  return [/^(ht|f)tps?:\/\/[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?$/, "{PATH} is invalid"];
};