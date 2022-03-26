var mycallback = function(){
    console.log("callback");
    setTimeout(() =>{'setTimeout'},1000);
}

var mygoodfunction = function(callback){
    callback();
    console.log("good function");
}

mygoodfunction(mycallback);