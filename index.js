// add solution here
function theBeatlesPlay(musicians,instruments){
  var array = []
  for(var i =0 ; i<musicians.length;i++ ){
    array.push(musicians[i]+ " plays " + instruments[i])
  }
  return array
}


function johnLennonFacts(johnLennon_array){
  var i = 0
  var array = []
  while(i < johnLennon_array.length){
    array.push(johnLennon_array[i] + "!!!")
    i++
  }
  return array
}



function iLoveTheBeatles(number){
  var array = []
  do{
    array.push("I love the Beatles!")
    number ++
  }while(number < 15);
  return array
}
