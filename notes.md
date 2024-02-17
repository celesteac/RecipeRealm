# Notes
[Readme](https://github.com/celesteac/Startup/blob/main/README.md#startup) <br />
[How to write in Markup](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#styling-text) <br />
My startup IP address http://23.23.184.165/

## Git notes
Use git fetch to see changes on github without downloading them <br />
Use git status to see if the local repo is up to date with github

## AWS notes
Use git bash or Mingw to ssh into the server. <br />
Use the command  ```ssh -i [key pair file] ubuntu@[ip address]``` <br />
Once in, use ```ls -l``` to see the files <br />
<br />
In order to create new domain names go to the Route 5 service and create new records <br />
*.yourwebsite.domainname will reroute anything (rand.happyrecipes.click)

## HTTP/HTTPS
With Http, any message sent on the network is readable by everybody

## Vim notes
standard mode cannot write <br />
: command <br />
:w to save (write to disk) <br />
:q to quit <br />
:wq save and quit <br />
escape to get back to standard mode from anywhere else <br />
i for insert mode <br />
insert mode cannot save <br />

## Caddy Notes
Caddy does 3 important things
1. web certificates
2. serves up static HTML files
3. gateway for subdomain requests

## Shell Script Notes
Write a shell script file.sh that can be run with specified commands from the command line. Very useful.

## HTML Notes
An HTML page is built to render just one page at a time and allow linking to other pages. When you load a new page, the whole state is dropped <br/>
Server side rendering vs client side rendering <br/>
Server side rendering is multiple files that the server takes, puts together, and sends off to display as one page. Client side rendering is when there is only one page, and javascript is used to dynamically change the content.

## CSS Notes
Defines rules sets composed of a _selector_ to select a group of elements and one or more _delaractions_ with _properties_ and _property values_
The box model: **todo insert picture**

### Three ways to do CSS:
inline: style tags work on **all** HTML elements<br />
style element: in the head of the file <br />
in a style sheet linked in the head: <link rel="stylesheet" href="styles.css"/> <br/>
_important:_ more specific styling is always taken over inherited styling <br/>
if specificity is equal, whichever is second takes precedence

### Ways to do responsive design
1. inside meta put name="viewport" property
2. inside a CSS rule for an object put float: inline-end or float: right
3. In a CSS display rule use block, inline, flex, or grid

**CSS Grid** formats the element's children into a grid format and has them re-arrange < br/>
**Debugging CSS** Use the Chrome debugger to turn styles on elements on and off and understand, don't just change the actual code until it looks ok

## JavaScript Notes
The primitive types are Null(a var w/out a value), Undefined(a var not defined), boolean, number, BigInt, String, Symbol(a unique value) <br/>
The object types are Object(like dict) function(can be called), Date, Array, Map(different from Object?), JSON(uses objects for info exchange) <br/>
In JS functions can be passed like first order or primitive type (like an int) <br/>
A JS object is like a map or dictionary (key-value pairs) <br/>
Arrays are not first-order objects??? <br />
Object equality is compared with memory addresses, not with actual content, so [1,2] != [1,2] <br/>
"undefined" is a primitive type, used often for things that have been declared or defined but not given a value (like some functions) <br/>
**const** is used to declare a variable that can't be changed, or more precisely what it is pointing to. If it were an object, you could still modify the object but not reassign the const variable <br/>
Equality is generally defined with truthy and falsy, or converted to a boolean and then evaluated. So, to show whether two variable are actually the same, use the strict equality === and inequality !== operators <br/>
ternary operator: a === 1 ? console.log(1) : console.log('not 1');
### Loops
**for** like c++ <br/>
**for in** for (const name in obj) - for object property names
when used on an array, prints indices, not values <br/>
**for of** for (const val of arr) - iterates over iterable's (map, array, set..) property values <br/>
**while** normal <br/>
**do while** do once then while <br/>
**switch** exist <br/>
**continue and break** can be put inside while loops 
### Anonymous Functions
variable = function() { ... } <br/>
a function with no name, kind of like a pointer to a function but actually a higher order function <br/>
useful to pass the anonymous function as a variable to some other function <br/>
the value of "variable" is the entire function definition <br/>
### Arrow Functions
A type of anonymous functions ...
### Closures
A functionthat uses its surrounding state when it was created and those are the parameters it works with 
