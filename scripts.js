 //...calculator

 function calc(){
     //grab value from DOM
     let x = parseInt(document.querySelector("#value1").value); 
     let y = parseInt(document.querySelector("#value2").value);
     let z = document.querySelector("#operator").value;
     let calculate; //dec var not within conditions

     if (z == "add"){
         
        calculate = x+y;
    
     } else if (z == "min"){

        calculate = x-y;

     }else if (z == "div"){

        calculate = x/y;
     }else if (z == "mul"){

        calculate = x*y;

     }
              
     document.querySelector("#results").innerHTML=calculate;
      
     }
    