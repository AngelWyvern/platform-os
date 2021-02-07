<h5 align="center">:warning: WARNING! :warning:<br>This project is still in early development stages!<br>Do not expect most features to work as expected.</h5>
<h1 align="center">platform-os</h1>
 An application that will work on all platforms with controls in their native visual style.

# What is platform-os?
This project, platform-os, was made to simulate visual styles from a variety of operating systems while still keeping main window controls (e.g. Buttons, Combo Boxes, etc.). The window controls are even functional through JavaScript.

# How can I use platform-os?
Platform-os is built on HTML, JavaScript, and CSS, and was created using NodeJS and Electron.<br>
I'm not here to show you how you could use this in your own project, but you can peek at the source code and use/modify it, it you feel like.<br>
No guarantees it'll work on generic websites since the code includes Node functions. Should work fine if you're using it in an Electron project with Node integration.

# Can I test the controls/styles?
Of course. We provide a demo that you can launch to mess around with or test with adding your own visual styles. To open the demo, follow these steps:
- **Prerequisite:** Download and install the recomended version of [NodeJS](https://nodejs.org)
- Open Command Prompt (Windows) or Terminal (macOS/Linux)
- Clone the repository by typing the following: `git clone https://github.com/AngelDTF/platform-os.git`
- Change directory to the project directory by typing `cd platform-os`
- Install the project dependencies with `npm i`
- And finally, launch the demo with `npm test`

# Can I add my own visual styles?
Yup! Platform-os is built to automatically search for visual styles in the right folder. Just follow these steps:
- **Optional:** Fork [this repository](https://github.com/AngelDTF/platform-os)
- Clone the repository to a local space on your drive
- Change directory to `platform-os/static/css/platforms`
- Go into the folder matching your platform. If it does not exist, you can create one
- Create a new CSS file and rename it so the name matches up with the version number of the platform/style you're trying to replicate
## So, how do I code my own visual style?
There's currently no documentation on it. I'd recommend looking at the existing visual styles and trying to learn off of those. Note: you should have a basic understanding of CSS before trying to get into this.
## Well, I made a visual style. How do I test it?
It's pretty much the same way you test it in the section "[Can I test the controls/styles?](https://github.com/AngelDTF/platform-os#can-i-test-the-controlsstyles)"<br>
Here's a quick rundown:
- Make sure you have the recommended version of [NodeJS](https://nodejs.org)
- Go to the root directory of the project
- Open Command Prompt (Windows) or Terminal (macOS/Linux)
- Install the project dependencies with `npm i`
- Then open the project with `npm test`