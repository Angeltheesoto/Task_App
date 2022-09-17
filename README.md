# TASK APP

## DEPENDENCIES

for MERN-Notezipper
mongoDB pass: kgl0sH6YF5IGvGwJ

## NPM packages

Installed in order

---- Getting started with the whole project and back end ----
_[npm init -y] : gets your package.json file.
_[npm install] : gets all the node packages.
_[npm install express] : need express to run all our url paths in the browser. ex: const app = express();
_[npm i dotenv] : Holds our port number
_[npm i nodemon] : Lets us run the backend server without killing the terminal everytime. In the package.json change inside scripts -> start: "nodemon back-end/server.js"
---- Packages for the front end ----
_[npx create-react-app {name of app}] : gives you boilerplate stuff for a front end app.
_[npm i react-bootstrap bootstrap] : is a css library that makes it easier to style. In app.js add [import "bootstrap/dist/css/bootstrap.min.css"]
_[nnpm i react-router-dom@5.0.0] : Make sure it is this version.
_[npm i axios] : It helps make api calls easier than using fetch.
_[npm i concurrently] : lets you start front end and backend together. Install in root folder. Make changes to the root package.json folder => npm run dev

```
"scripts": {
    "start": "nodemon back-end/server.js",
    "client": "npm start --prefix {file name}",
    "dev": "concurrently \"npm start\" \"npm run client\""
  }
```

## NOTES

check out bootswatch.com for free premade templates of bootstrap
