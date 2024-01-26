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
