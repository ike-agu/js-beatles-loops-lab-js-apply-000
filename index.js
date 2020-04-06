// add solution here

function theBeatlesPlay(musicians , instruments){

let newArr = [];

for (let i = 0 ; i < musicians.length ; i++){

newArr.push(`${musicians[i]} plays ${instruments[i]}`);
}
return newArr;
}


function iLoveTheBeatles(number){
  
  
  let arr= [];
 
 do{
   
  arr.push("I love the Beatles!" );
number +=1;
 }while(number<15);
   
 
  return arr;
}




function johnLennonFacts (factsAboutJohn){
  
   var i = 0;
  
  let arr = [];
  
  while (i < factsAboutJohn.length){
    
    arr.push(`${factsAboutJohn[i]}!!!`);
    
    i++;
  }
  return arr;

}