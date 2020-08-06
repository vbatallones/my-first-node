# BACK END

## CRRUD
Read files
Create files
Update files
Delete files
Rename files

## INSTRUCTIONS
We type in the terminal the **BREW UPDATE** to check updates on our brew doctor installer.

Install the the node

checked the version of the node. (v14.7.0)

Make a file directory 

# Node Module / Express

## Terminal

Make a root folder directory and **cd** into the folder. <br />

    mkdir view_homework
    

In that folder we are going to type <br />

    npm init 
```js
{
  "name": "view_homework",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

To skip all the deafult settings we can just type <br />


    npm init -y 

create a js file in the terminal by<br />

    touch index.js

install the express <br /> 

    npm i express

open the node in the terminal by typing  <br />

    code .


### Text editor / VS code

Create another js file in the terminal of **VS code** <br />

    touch res.js

and inside of that file is my array of foods. <br />

```js
const  placesToVisit = ["Palawan", "Siargao", "Cebu", "Bohol", "Boracay"];

```
module exports is a js object that contains all code we want to export for import in other files (entry point index.js).

```js
module.exports = placesToVisit;
```

check the code if it is function by iterating to the array.

```js
for (let i = 0; i < placesToVisit.length; i++) {
  console.log(placesToVisit[i])
}
```

install a [npm](https://www.npmjs.com/) package. I have the one liner joke.

    npm install one-liner-joke

```js
const oneLinerJoke = require('one-liner-joke');
const getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke);
{
  body: "The easiest job in the world has to be coroner. Surgery on dead people. What's the worst thing that could happen? If everything went wrong, maybe you'd get a pulse.",
  tags: [ 'life' ]
}
```
## Node/Express

Create routes:

```js
const express = require('express');
const app = express();
const port = 3000;
```
### Home route

```js
    app.get('/', (res, req) => {
        res.sendFile(`${__dirname} /views/index.html`)
    })
```

### About route
```js
    app.get('/about', (res, req) => {
        res.sendFile(`${__dirname} /views/about.html`)
    })
```
### Blog-directory Route
```js
    app.get('/blog', (res, req) => {
        res.sendFile(`${__dirname} /views/blog-directory.html`)
    })
```
**__dirname** is a Node keyword that gives us the absolute path of the current directory, so we can just tack that on in front of the relative path

Create a HTML file for each route

    touch index.html about.html blog-directory.html

## Templates

### EJS: Embedded JavaScript

Install the ejs.

    npm i ejs

Above our routes we need to add 

    app.set('view engine', 'ejs')

app.set takes to parameter the name and value which in our case the name is the "view engine" and value is the "ejs".

Now the next step is to change all the HTML file to ejs 

    index.html ---> index.ejs
    about.html ---> about.ejs
    blog-directory.ejs ---> blog-directory.ejs

Ejs assumes a lot about the path to the template files, so as long as they are nested in a views folder and have .ejs extensions, you can simply pass the filename (no extension, though it wont break it if you include it) into res.render().
### Home route with ejs
```js
app.get('/', (req, res) => {
  res.render('index') 
})
```
### About route with ejs
```js
app.get('/about', (req, res) => {
    res.render('about')
})
```
### Blog-directory route with ejs
```js
app.get('/blog', (req, res) => {
    res.render('blog-directory')
})
```

## Templating with variables

```js
app.get('/', (req, res) => {
  res.render('index', {name: 'Sterling Archer', age: 35}) // express will look inside views folder by default for an ejs file with this name
})

app.get('/about', (req, res) => {
    res.render('about', {faveFood:['Adobo', 'Lumipa', 'Pancit']})
})

app.get('/blog', (req, res) => {
    res.render('blog-directory', {team: 'Trail Blazers', city: 'Portland'})
})
```

Create a folder name Partials for our header and footer ejs file.

    mkdir partials
    touch header.ejs
    touch footer.ejs

for each ejs files that's in our view folder we will link each partial files.

### index.ejs
```html
<%- include("../partials/header.ejs") %> 
    <h1>Hello, <%= name %>!</h1>
    <% let dogAge = age*7%>
    <h2>You are <%= age*7%> in dog years!</h2>
    <% let status %>
    <% if (dogAge<100) { %>
    <%} else { %>
        <% status = 'old'%>
        <%# comment  %> 
    <%}%>
    <h3>this means you are <%= status %>!</h3>
    <footer>
        <%- include("../partials/footer.ejs") %> 
    </footer>
```

### about.ejs

```html
<header>
        <%- include("../partials/header.ejs") %> 
    </header>
    <h1>My favorite foods are</h1>
    <ul>
        <% faveFood.forEach(function(food) { %>
          <li><%= food %></li>
        <% }) %>
      </ul> 
      <footer>
 <%- include("../partials/footer.ejs") %> 
    </footer>
```

### blog-directory.ejs

```html
<header>
        <%- include("../partials/header.ejs") %> 
    </header>
    <h1>A directory of all my blog posts will go here.</h1>
    <p>The <%= city  %> <%= team %> will be in the playoffs!</p>
    <footer>
        <%- include("../partials/footer.ejs") %> 
    </footer>
```
### Ejs Layouts
EJS layouts is a node package that allows us to create a boilerplate (aka a layout) that we can inject content into based on which route is reached. 

install the ejs layouts

    npm install express-ejs-layouts

Require the module and add it to the app.

    app.set('view engine', 'ejs');
    app.use(ejsLayouts);

The app.use(ejsLayouts) is an express function that indicates middleware.<br />
Middleware functions intercepts the request object when it comes in from the client, but before it hits any route. 
## Controllers

Controllers become important organizational tools when you start making apps with several views.

create a folder name **controllers** and inside that we generate js files.
    
    mkdir controllers
    touch faves.js hates.js
    
```js
const express = require('express');
const app = express();
const ejsLayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs');
app.use(ejsLayouts);
  //control center
app.use('/faves', require('./controllers/faves'));
app.use('/hates', require('./controllers/hates'));
app.get('/', (req, res) => {
    res.render('home')
})
app.listen(8000, () => {
    console.log('listening in port 8000')
})
```
Instead of having this lines of code in our index.js
```js
   app.get('/faves/animals', function(req, res) {
       res.render('animals', {title: 'Favorite Animals', animals: ['sand crab', 'corny joke dog', 'cat']})
     });
     app.get('/fave/foods', (req, res) => {
       res.render('food', {title: 'Favorite Foods', faveFood:['Adobo', 'Lumipa', 'Pancit']})
   })
```

We have this in a seperate file in the controller folder. So that our main index.js is not overfill with routes.
```js
var express = require('express');
var router = express.Router();

router.get('/foods', function(req, res) {
    res.render('faves/foods', {title: 'Favorite Foods', foods: ['coconut', 'avocado']});
  });
  
  router.get('/animals', function(req, res) {
    res.render('faves/animals', {title: 'Favorite Animals', animals: ['sand crab', 'corny joke dog']})
  });
  module.exports = router;
  ```