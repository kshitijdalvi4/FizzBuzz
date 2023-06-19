
//Get the Values from inputs
//controll
function getVal() {
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    
   //str parsed to int
    startValue=parseInt(startValue);
    endValue=parseInt(endValue);

   

    if(Number.isInteger(startValue) && Number.isInteger(endValue))
    {
         let num=generateNum(startValue,endValue);
             //Display Func
                 displayNum(num);

    }

    else{
        alert("Error: Enter Integers");
    }

  
}

//logic
function generateNum(start,end)
{
  let num=[];

for(let index=start; index<=end; index++){
    //index is not a keywiord
     num.push(index);
 }
  return num;
}


//display nums
function displayNum(num){
    
 let templateRows=[];
    for(let i=0; i<num.length; i++){
        
        let numbers = num[i];
        let className ="even";

        if (numbers %2 ==0)
        {
            className="even";
        }

        else{
            className="odd";
        }
        templateRows += `<tr><td class="${className}"> ${numbers} </td></tr>`;
      
    }
    
    document.getElementById("results").innerHTML=templateRows;
}

