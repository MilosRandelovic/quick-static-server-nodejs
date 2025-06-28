# Overview

This is a quick Node.js server meant to serve static (HTML & other) content from a local folder.

Once started, it will automatically reload content as soon as file changes are detected.

## Installation

Clone the repository to a local folder, and execute `npm install`.

## Usage

Put all the files to be served in the `/public` folder, and then run `npm start`.

If the content you wish to serve is in another folder/repository, you can always sync them:

```bash
npm run reset
cd /wherever/your/current/files/are
cp -R . /path/to/quick-static-server-nodejs/public/
```

The default address to serve content from is `localhost:3000`.

## "Clean" the `/public` folder

To remove all contents from the `/public` folder, you can run `npm run reset`.
