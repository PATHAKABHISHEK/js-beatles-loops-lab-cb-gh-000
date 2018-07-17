// add solution here
function theBeatlesPlay(musicians,instruments){
  var array = []
  for(var i =0 ; i<musicians.length;i++ ){
    array.push(musicians[i]+ " plays " + instruments[i])
  }
  return array
}


function johnLennonFacts(johnLennon_array){
  var i = johnLennon_array.length
  var array = []
  while(i >0){
    array.push(johnLennon_array[i] + "!!!")
    i--
  }
  return array
}
