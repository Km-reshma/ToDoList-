# ToDoList-
JavaScript Project-

Initializing the Speech Recognition Engine — 
Initializing the speech recognition engine means setting up the browser's speech recognition system so it is ready to listen to and understand the user's voice.

For cross-browser compatibility, we check which speech recognition version the browser supports and use the available one.

it's means preparing speech recognition so that voice input can work in different browsers.

window.SpeechRecognition → standard version supported by some browsers.
window.webkitSpeechRecognition → browser-specific version, commonly used in Chrome.

This line checks which Speech Recognition API is available in the browser and uses the supported one, making the code more compatible with different browsers

1. recognition.onresult = (event) => {
This runs when the browser successfully recognizes the user's speech.
event contains the information about what the user said.

2. const transcript = event.results[0][0].transcript.toLowerCase();
This gets the spoken words as text and stores them in transcript.

For example, if the user says:
"New Task Buy Milk"

Then: transcript = "new task buy milk"
toLowerCase() converts all letters to lowercase so that "New Task" and "new task" are treated the same.

3. statusText.innerText = `Heard : "${transcript}"`;
Displays the recognized speech on the webpage.

For example: Heard: "new task buy milk"

4. if (transcript.startsWith("new task")) {
Checks whether the user's speech starts with "new task".

Example:
"new task buy milk"       
"new task study JavaScript" 
"delete task buy milk"    

5. const taskText = transcript.replace("new task", "").trim();
 Removes "new task" from the sentence and keeps only the actual task.

Example:"new task buy milk"

becomes:"buy milk"

6. if (taskText)
Checks whether there is actually some task text.

For example:
"new task buy milk" → "buy milk" → ✅
"new task"          → ""         → wrong


7. addTask(taskText);
Calls the addTask() function and adds the task to the To-Do list
-----------------------------------------------------------------------------------------------

const num = parseInt(transcript.split(" ")[2]) - 1;

(a). transcript.split(" ")
    It breaks the sentence into separate words wherever there is a space.

Example: transcript = "delete task 3"

After: transcript.split(" ")

we get: ["delete", "task", "3"]

(b). [2]

transcript.split(" ")[2]

Gets the third word. JavaScript counting starts from 0:

[0] → "delete"
[1] → "task"
[2] → "3"

So the result is: "3"

(c). parseInt()    -> parseInt("3")
     Converts the text "3" into the number 3.

(d). - 1,       -> means      3 - 1

     Gives: 2

Why subtract 1? Usually because the user sees task numbers starting from 1, but JavaScript arrays use indexes starting from 0.


(e). if (!isNaN(num))
means: If num is a valid number, then continue.

(f). Then: deleteTask(num);
     Calls the deleteTask() function and deletes that task.