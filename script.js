//DOM ELEMENTS & VARIABLES SETUP
//Grabbing/Selecting DOM elements from the HTML document to interact with them in JavaScript
const taskList = [];
const lisElement = document.getElementById("taskList");
const startTest = document.getElementById("start");

//basic setup for speech recognition
//Initializing the browser's speech recognition engine for cross-browser compatibility

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();                      //Creates a Speech Recognition object that will listen to the user's voice.
recognition.continuous = false;                                  //Tells the browser to stop listening after the user finishes speaking. It does not keep listening continuously.
recognition.lang ='en-US';                                       



//Callback function that executes automatically when speech recognition finishes processing audio into text
recognition.onresult =(event) => {
    
    const transcript = event.result[0][0].transcript.toLowerCase();

    statusText.innerText =`Heard : "${transcript} " `;

    if(transcript.startsWith("new task")){

        const taskTest = transcript.replace("new task", "").trim();

        if(taskTest)
            addTask(taskTest);

    }

    else if(transcript.startsWith("delete task")){

        const num = parseInt(transcript.split(" ")[2])-1;

        if(!isNaN(num))
             deleteTask(num);
       
    }        

    else if(transcript.startsWith("mark task")){

        const num = parseInt(transcript.split(" ")[2])-1;

        if(!isNaN(num))
            markTask(num);
      
    }

}


//Defines a function to add a new task. ---> This function checks if the task exists, deletes it, and then updates the list.

function addTask(task){          

    taskList.push({text :task, done :false});                    //Adds the task to the list and marks it as not completed.
    renderTasks();                                               //Updates/displays the task list on the webpage.

}


//Defines a function to delete a task using its number/index.

function deleteTask(num){

    if(taskList[num]){                        //Checks if the task exists at that position.
        taskList.splice(num, 1);              //Removes 1 task from the list at that position.
        
        renderTasks();
    }
}



//Defines a function to mark a task as completed.---->  This function finds a task, marks it as completed, and updates the display.

function markTaskDone(num){

    if(taskList[num]){                        //Checks if the task exists at that position.
        taskList[num].done = true;            //Changes the task's status to completed.
        
        renderTasks();
    }
}








