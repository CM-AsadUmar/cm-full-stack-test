# Welcome to Creative Morph!

Hi, in this test you will be creating a chat app! This chat will have:
1. Frontend in Typescript React.
2. Backend in Nodejs

# Frontend (50 points)
The frontend test will be in Typescript React. There are 2 main routes home and chat.
1. ```/home```: On this page you will write the documentation for this app.
2. ```/chat```: This is the page where you will make the actual chat app.

## Setup
Please fork the [repository](https://github.com/CM-AsadUmar/cm-full-stack-test) 

Use the command below to install all the dependencies for the frontend. 
```sh
npm install
```
You can run the development server for the front end by running
```sh
npm run start
```

And run tests by running
```sh
npm run test
```

And build by running 
```sh
npm run build:dev
```

## Task#1: Fix the router (10 points)

The ```/chat``` route seems to be broken, even when you change the route to ```localhost:3000/chat``` it will stay at the ```/home``` directory please fix this.

## Task#2 Create a chat (40 points)
In section this you must create a chat application. You have to:

1. Create a store that will house all your chats.
2. Be able to send/receive messages in real time.
3. Write some brief documentation about how your app works on the ```/home``` page and include a link to the chat as well.  

you will be graded on:

1. The functionality of the overall app.
2. The quality of your code.
3. How you used typescript's strict syntax to avoid type conflicts.
4. How your app handles errors (like not being connected to the internet).

## Bonus Task
If you can 
1. Write some tests for your app using whatever testing framework you see fit.
2. Deploy your app to github pages.

Both of these steps are optional however you do gain an upper hand if you do them.


# Backend (50 points)

You must use nodejs to implement your backend, with that said you are free to use whatever libraries, technologies you see fit to accomplish the task above. just put your code in the `\server` folder of the repository you forked above

# Submission

To submit you code just commit your code and create a pull request against the master branch of the repository you forked. 
