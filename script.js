//1. compare two JSON 

let obj1={
    "name":"person1",
    "age":"5"
};

let obj2={
    "age":"5",
   "name":"person1"
};

if(obj1.key==obj2.key){
    console.log("JSON is same")
}
else{
    console.log("Not same")
}



//2. print country flags using rest countries API

let request= new XMLHttpRequest();

request.open("GET","https://restcountries.com/v2/all");

request.send();

request.onload=function(){
    let result=JSON.parse(request.response);
  
   for(let i=0;i<result.length;i++){
    console.log("Country name:"+result[i].name,"Country's flag:"+result[i].flags.png);
   }
}

//3. print countries names, region, sub-region and populations using rest countries API

let request1= new XMLHttpRequest();

request1.open("GET","https://restcountries.com/v2/all");

request1.send();

request1.onload=function(){
    let res=JSON.parse(request1.response);
  
   for(let i=0;i<res.length;i++){
    console.log("Country name:"+res[i].name+",","Country's region:"+res[i].region+",","Country's sub-region:"+res[i].subregion+",","Country's Population:"+res[i].population+".");
   }
}