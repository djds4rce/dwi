'use strict';
var UTIL = {
  joinNodes :function(){
    var _args = Array.prototype.slice.call(arguments);
    var arrayNodes = []
    _args.forEach(function(nodes){
      Array.prototype.slice.call(nodes).forEach(function(node){
        arrayNodes.push(node);
      });
    });
    return arrayNodes;
  }
}

