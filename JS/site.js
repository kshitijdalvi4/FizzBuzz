
//Get the Values from inputs
//controll
function getVal() {
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;
    
   //str parsed to int
    fizzValue=parseInt(fizzValue);
    buzzValue=parseInt(buzzValue);

   

    if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue))
    {
         let fbdata=FizzBuzzB(fizzValue,buzzValue);
             //Display Func
                 displayNum(fbdata);

    }

    else{
        alert("Error: Enter Integers");
    }

  
}

//logic


function FizzBuzzB(fizzValue,buzzValue)
{
    let returnArray=[];
    let Fizz=false;
   let Buzz=false;
    for (i=1;i<=100;i++) {

        Fizz = i%fizzValue==0;
        Buzz= i%buzzValue==0;

    switch(true){
        case Fizz && Buzz:{
            returnArray.push('FizzBuzz');
            break;
        }

        case Fizz:{
            returnArray.push('Fizz');
            break;

        }

        case Buzz:{
            returnArray.push('Buzz');
            break;

        }

        default:{
            returnArray.push(i);
        }
    }
    }



    return returnArray;

}


//display nums
function displayNum(fbdata){
    
 

        //get the table body element from the page
        let tableBody = document.getElementById("results");
    
        //get the row from the template
        let templateRow = document.getElementById("fbTemplate");
    
        //clear table first
        tableBody.innerHTML = "";
    
        for (let i = 0; i < fbdata.length; i += 5) {
            const tableRow = document.importNode(templateRow.content, true);
            //grab only the columns in the template
            rowCols = tableRow.querySelectorAll("td");
    
            rowCols[0].classList.add(fbdata[i]);
            rowCols[0].textContent = fbdata[i];
        
            rowCols[1].classList.add(fbdata[i+ 1]);
            rowCols[1].textContent = fbdata[i + 1];
           
            rowCols[2].classList.add(fbdata[i+2]);
            rowCols[2].textContent = fbdata[i + 2];
           
            rowCols[3].classList.add(fbdata[i+3]);
            rowCols[3].textContent = fbdata[i + 3];
           
            rowCols[4].classList.add(fbdata[i+4]);
            rowCols[4].textContent = fbdata[i + 4];
    
            tableBody.appendChild(tableRow);
        }
    
  
}

