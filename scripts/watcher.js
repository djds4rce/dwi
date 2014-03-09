'use strict';
var watcher = {};
(function(q){
  q.init = function(){
    var nodes = UTIL.joinNodes(document.querySelectorAll("input[data-model][type='text']"),document.querySelectorAll('textarea[data-model]'))
    nodes.forEach(function(el) {
      el.addEventListener('keyup', function() {
        pubsub.publish("model:Change",{ key: this.getAttribute('data-model'),value:this.value});
      },false);
    });

    pubsub.subscribe("model:Change",function(type,model){
      modelObject.setClean(model.key,model.value);
      [].forEach.call(document.querySelectorAll("[data-model='"+model.key+"']"),function(el){
        if(el.type=="text"|| el.type=="textarea"){
          el.value = model.value;
        }
        else{
          el.innerHTML = model.value;
        }
      });
    });
  };
}(watcher));

