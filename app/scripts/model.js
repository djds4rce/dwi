'use strict';
var modelObject = {};
(function(q) {
  var model = {}; 

  q.set =  function(key,value){
    this.setClean(key,value);
    pubsub.publish("model:Change",{key:key,value:value});
  };

  q.setClean = function(key,value){
    key = key.split(".");
    var obj = model[key.shift()];
    while (key.length > 1)
      obj = obj[key.shift()];
    if(obj){
      obj[key.shift()] = value;
    }
    else{
      key = value;
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
