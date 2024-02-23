---
permalink: /projects/dualsense-control
redirect_from: 
- /projects/DualSense-Control
- /projects/dualsense
- /projects/Dualsense%20Control
- /projects/DualSense%20Control.md
- /projects/DualSense%20Control.html
- /projects/DualSense-Control.html
layout: default
hastoc: true
title: DualSense Control App for Linux
category: Projects
author: kavish
subtitle: Control your dualsense controller using this app on linux.
excerpt_separator: <!--more-->
---

This project is a GUI for the [dualsensectl CLI](https://github.com/nowrep/dualsensectl). It is a simple app that allows you to control your dualsense controller on linux. It is built using C++ and Qt.

<!--more-->

### Note - Works only for Kernel 5.13 and above.
Control your dualsense controller using this app on linux.
### Credit - https://github.com/nowrep/dualsensectl

---
## Direct Run

### Download and Extract
1. Go to [Releases](https://github.com/kavishdevar/dualsensectl/releases)
2. Download the zip file named ```dualsensectl-[version].zip```
3. Extract it
4. `cd` to the directory where its extracted
5. And run: 
```bash
./DualSenseCtl
```
#### or

4. Open file manager and go to the directory where its extracted.
5. Double click the application with the icon

---

## From Source

### Build

#### Open a terminal 

Press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>t</kbd>
or 
Open it via gui depending upon your distro

#### Enter these commands.

```bash
git clone https://github.com/kavishdev/dualsensectl.git #Clone Repo
cd dualsensectl
mkdir build
cd build
cmake .. #run CMake
make #Build files
```

You will have a executable known as DualSenseCtl in the build forder

#### Now run
```bash
./DualSenseCtl
```

This will open up a window.

#### Enjoy controlling your controller

### Install

#### Repeat the steps for building if not already done.

#### Run `make` Install

Run this command and this will install exec file to `/usr/local/bin` and the desktop file to `/usr/share/applications`

```bash
make install
```