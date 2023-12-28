function greetings() {

    //    setting a guide to confirm subission of form
        alert("Are you sure you want to submit?");
        
    
        // collecting data from our html file
        const userInput = document.querySelector("#userInput");
        const welcomeMessage = document.querySelector("#welcome-message");
        let clear = document.querySelector("#clear");
    
        // A message of welcome sent to the user
        welcomeMessage.innerHTML = "Welcome to Cesca's page, " + userInput.value;
    
    
        // storing the input from users to the local storage
        let arryOfNames = document.querySelector("input").value;
    
        // where the name inputed by the user is not in the array, add it to the list of names
        
        if (localStorage.getItem("data") == null){
            localStorage.setItem("data", "[]");
        }
    
        let arryOfNamesTwo = JSON.parse(localStorage.getItem("data"));
        arryOfNamesTwo.push( arryOfNames);
    
        //conveting the user input to string using JSON.stringify as local storage only accepts strings
        localStorage.setItem("data",  JSON.stringify(arryOfNamesTwo));
    
        clear.onclick=function(){
            alert("Are you sure you want to clear your local storage?");
    
            localStorage.removeItem("data");
    
            // A message of welcome sent to the user
            welcomeMessage.innerHTML = "Local storage cleared";
    
        }
    
    
    }
    
      
    