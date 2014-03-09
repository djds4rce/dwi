'use strict';
var modelObject = {};
(function(q) {
  var model = {}; 

  q.set =  function(key,value){
    pubsub.publish("model:Change",{key:key,value:value});
  };

  q.setClean = function(key,value){
    var keys = key.split(".");
    var obj = model[keys.shift()];
    while (keys.length > 1)
      obj = obj[keys.shift()];
    if(obj){
      obj[keys.shift()] = value;
    }
    else{
      model[key] = value;
    }
    return;
  }
  q.get =  function(key){
    return key.split(".").reduce(function(o, x) { return o[x] }, model);
  };
  q.send = function(){
    return model;
  };
}(modelObject));
