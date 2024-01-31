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
