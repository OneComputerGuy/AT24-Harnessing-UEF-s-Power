# Harnessing UEF

This code is intended to demostrate during the Anthology Together 2024 conference how the Ultra Extension Frameworks (UEF) works registers with Ultra

# The code

## Prerequisites

- Your local machine must have NodeJS version 20 or above
- A way to tunnel your connection to the internet (if your machine is behind a closed router or firewall)

To run this code, simply clone the repository to your local machine and run the following commands inside the created folder:

```shell
npm i
```

Once it npm finishes the dependencies installation, run `npm run dev` to start the NextJS server which will run the backend API and the frontend of the app.

# To tunnel out of your machine

By default, the port that is exposed in your local machine is 3000, if it's already in use, NextJS will show in the terminal output the port being used.

Tunnel options will depend on your use case and we don't vouche any in particular, however, ngrok is a solution I personally use for it's simplistic usage.

To open the tunnel using ngrok just run:

`ngrok http 3000`
