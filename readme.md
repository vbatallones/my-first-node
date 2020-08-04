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

insite that directory we type **npm init** and to skip all the deafult settings we can just type **npm init -y** <br />

and we open the node in the terminal by typing **code .** <br />

inside of that we have a **package.json** file 
```js
{
  "name": "my-first-node-proj",
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
after that we create a js file in the terminal by **touch index.js** we open that and console log
```js
console.log("Levin!");
```

to check if that console log is working at our text editor terminal we type in 
```js
☁  node_modules_practice  node index.js
```
and it logs the string beneath it
```js
Levin!
```

Create a res.js file and inside of that file is my array of foods.
```js
const  faveFood = ["Adobo", "Lumpia", "Lechon", "Pancit", "Sinigang"];

```
module exports is a js object that contains all code we want to export for import in other files (like entry point index.js).
```js
module.exports = faveFood;
```

In my index.js in order for me to use the array that was pass in the res.js file I need to pass in the node keyword require allows us to import modules
```js
const faveFoods = require("./res.js");
```

write code in your index.js so when you run your app, it loops through the array, printing all of your favorite foods to the console
```js 
for (let i = 0; i < faveFoods.length; i++) {
    console.log(faveFoods[i])
}
```

This is the [npm](https://www.npmjs.com/) that I have.
```js
const oneLinerJoke = require('one-liner-joke');
const getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke);
{
  body: "The easiest job in the world has to be coroner. Surgery on dead people. What's the worst thing that could happen? If everything went wrong, maybe you'd get a pulse.",
  tags: [ 'life' ]
}
```