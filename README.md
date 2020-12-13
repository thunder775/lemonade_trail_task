PROJECT RUN STEPS:
    
    TECH STACK USED
    1. Typescript
    2. React.js(Frontend)
    3. Express(Backend)
    
    MIDDLEWARES USED
    1. compression
        - To reduce the size of initial React.js bundle build to reduce the the download size
    
    Pre-requisites:
    1. Install node and npm
   
    Steps:
    A. TO RUN THE EXPRESS SERVER
    1. Go to the "server" directory.
    2. run the command and install the required packages using the following command:
            npm i 
    3. run the command to start the server at port 5000:
            nodemon src/app.ts
    4. go to the url "http://localhost:5000/" to see the web-app in action 