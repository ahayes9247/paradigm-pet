# Navigation

<div align="center"><a href="#introduction">Introduction</a> &bull; <a href="#installation-instructions">Installation Instructions</a> &bull; <a href="#additional-installation-notes">Additional Installation Notes</a> &bull;<br> <a href="#tech-stack">Tech Stack</a> &bull; <a href="#credits">Credits</a> &bull; <a href="#copyright">Copyright</a></div>


# Introduction

This project is a re-design of a pet clinic website. It is the live version of work done for the course <strong>C773, User Interface Design</strong>, at <strong>Western Governor's University</strong>. 

The course guides students through the process of designing a user interface, including: discussing stakeholder and audience needs, developing website architecture, designing a wireframe, and producing a working prototype of said wireframe with responsive web design in mind. 

You can view the original UI specifications for the project <a href="https://www.dropbox.com/s/ea3lvtp52xgbx9z/Paradigm%20Pet%20Professionals%20UI%20Design%20Specifications.pdf?dl=0">here</a>, the original website <a href="https://www.dropbox.com/s/jr3oiwsvhnlmqgx/paradigm-original.pdf?dl=0">here</a>, my proposals for improvements <a href="https://www.dropbox.com/s/2gfjit5hnzhv9er/Amanda_Hayes_C773_Task_1_Proposals.pdf?dl=0">here</a>, and the wireframe <a href="https://www.figma.com/proto/QrX2gA5NGDvNuQHby4sUgT/c773?node-id=67%3A1419&scaling=scale-down&page-id=0%3A1&starting-point-node-id=67%3A1419">here</a>.

# Installation Instructions

To install and run this project on your own computer, perform the following actions:

1. Open your terminal. On Windows, this is also known as the Command Prompt.

2. Change directories to the folder you want to install the project in:

> `cd {folderpath}`

3. Clone the project to the folder you chose in Step 2.

> `git clone git@github.com:ahayes9247/paradigm-pet.git`

4. Change directories into your newly cloned folder.

> `cd paradigm-pet`

5. Install the project to your computer.

> `npm install`

6. Run the app.

> `npm start`

7. To close the app, type CTRL + C, then type Y when the terminal asks whether you want to close the app.

# Additional Installation Notes

## Common Errors

### react-scripts error

You may encounter an error that says that "react-scripts is not recognized as an internal or external command, operable program or batch file." If this happens, you can correct the error using the following code:

> `npm install react-scripts --save`

Then type:

> `npm install`

Then press enter, and the program should open in your browser.

## Open Ports

Closing the port when you are no longer using it is important to your computer's security. Closing the port will also ensure that the port is available when you want to run other projects on that port.

To close Port 3000, open your terminal and enter the following code:

> npx kill-port 3000

# Tech Stack 

* HTML5
* CSS3
* React
* Visual Studio Code
* Git and GitHub

# Credits
* Images from [Unsplash](https://unsplash.com)

# Copyright

Copyright © 2023 Amanda Hayes
