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

        if(!isNan(num))

            deleteTask(num);
       
    }        

    else if(transcript.startsWith("mark task")){

        const num = parseInt(transcript.split(" ")[2])-1;

        if(!isNan(num))

            markTask(num);
      
    }
            
}




