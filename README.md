# RCE_SCORM_Upload
This is a Remote Code Execution on SCORM Upload function

Summary:
There was a Remote Code Execution (RCE) vulnerability at a application I tested befoere (I removed any data about that web application and addresses) which allowed attacker to upload a SCORM package. Furthermore, a malicious user could add a javascript reverse shell to the SCORM package which will then get extracted onto the server when user logged in and used the app, where the attacker can then execute commands on client’s browser.

Steps To Reproduce:
1- Visit [the address of the web applicaiton\SCORM_Upload_function] and log in with credentials.
2- Now download a simple template SCORM course package from here [(you need to download SCORM 1.2 sample package file (ScormDriver_scorm12.zip)
](https://app.cloud.scorm.com/sc/user/authoring/AddContent?emptyLibrary=true&preserveMessages=true)
3- Unzip this zip file and do these changes in the following files:
    - Add a script.js file under /scormcontent folder which includes a sample reverse shell client code (added the sample source code here)
    - change the index.html to call the script.js file
    - Change the imsmanifest.xml file to reference the script.js file too!
4- Now zip the package again with this terminal command (on MAC):
    - zip -r my-scorm-package3.zip *
    - Note for MAC: you need to cd inside the package file then run the above command. 
5- upload this customised SCORM Package in the web application

6- Next step is to Create a server.js as reversel shell server! (added the code in repo)
7- open a terminal here and Install Node.js and WebSocket module if you haven't already
    - npm install ws
    - then run the server: node server.js
8- Now when victim user log in into the web app and start to use SCORM paackge modules, the Weeb-socket connection will be established!
9- As soon as the Web-socket connection would be established (between client and server), the malicious user can easily run java script command on the client browser. some example of java script commands would be:
     - console.log("Hello, World!");
     - alert("Hello from the server!");
     - document.title;
     - navigator.userAgent;
I try to take a video and post it on Youtube too
