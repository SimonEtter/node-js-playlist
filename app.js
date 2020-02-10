console.log('hey ninjas');
setTimeout(function() {
  console.log('3 have passed');
}, 3000)


var time = 0;
var timer = setInterval(function() {
  time += 2;
  console.log(time + ' seconds have passed');
if(time>7){
  console.log(__dirname);
  console.log(__filename);
  clearInterval(timer);
}
}, 2000);
