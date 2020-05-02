# Overview

This is a quick node.js server meant to serve static (HTML & other) content from a local folder.

Once started, it will automatically reload content as soon as file changes are detected.

## Installation

Clone the repository to a local folder, navigate there in the Terminal and execute `npm install`.

## Usage

Put all the files to be served in the `/public` folder, and then run `npm start`.

If the content you wish to serve is in another folder/repository, you can always sync them:

```bash
#!/bin/bash

cd /wherever/your/current/files/are
rm -rf /path/to/quick-static-server-nodejs/public/{,.[!.],..?}*
cp -R . /path/to/quick-static-server-nodejs/public/
```

The default address to serve content from is `localhost:3000`.

Note that the app will by default log every single request in the console. To change this, edit the `server.js` file and comment the logging instruction under `app.all('*', ...`.

## "Clean" the `/public` folder

To remove all contents from the `/public` folder, you can (among other ways) run `npm run reset`.
