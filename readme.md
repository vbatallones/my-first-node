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
console.log("Hello world!");
```

to check if that console log is working at our text editor terminal we type in 
```js
☁  my-first-node-proj  node index.js
```
and it logs the string beneath it
```js
hello world!
```