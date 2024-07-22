# Harnessing UEF

This code is intended to demostrate during the Anthology Together 2024 conference how the Ultra Extension Frameworks (UEF) works registers with Ultra

# The code

## Prerequisites

### Software

- Your local machine must have NodeJS version 20 or above
- A way to tunnel your connection to the internet (if your machine is behind a closed router or firewall)

### Developer Portal application

- Create a new application on the Developer Portal [(HERE)](https://developer.anthology.com) following the steps outlined here for LTI applications: https://docs.anthology.com/docs/developer-portal/creating-new-rest-or-lti-application#register-application

  - When registering the application, use the following URLs for each of the fields:

    - Login initiation URL: https://<your domain>/lti/login/
    - Tool redirect URL(s): https://<your domain>/lti/uefLaunch/
    - Tool JWKS URL: https://<your domain>/.well-known/jwks.json

- Save the application information in a safe location for later use

> [!WARNING]  
> For this process you must already have a domain, whether you're using your own through your own DNS provider pointed to your local machine or a domain given to your by a tunnel provider such as Ngrok

> [!WARNING]
> If you're using Ngrok as your tunnel providers, make sure you configure a static domain for your application.
> If you don't do it, each time you launch Ngrok it will give you a random domain and you will have to edit your Developer Portal application each time

Example of the configuration within the Developer Portal (Note: the domain https://notlocalhost.ngrok.dev was used for demonstrations and is tied to our account, you will have to replace that domain with your own)

![Developer Portal configuration](https://github.com/OneComputerGuy/AT24-Harnessing-UEF-s-Power/blob/main/assets/devportal-config.png?raw=true)

### Learn environment

#### Install the application:

To install the application in Learn, copy the Application ID given by the Developer Portal and head over inside your Learn server to System Admin/Admin > LTI Tool Providers and click on the button "Register LTI 1.3/Advantage"

In the application ID field, paste your ID and then click Submit, in the next screen verify that the tool status is set to Approved instead of Excluded and then, click submit.

#### Create the UEF placement

To properly configure the system, you need to create a new placement under the application you installed in Learn. To do this, head over to LTI Tool Providers under the System Admin/Admin tab. Next, locate your application and click the chevron next to it, then click Manage Placements

In there, click the "Create placement" at the top left of the screen and in the configuration page, input/select the following:

- Label: <A name for your placement>
- Handle: <a unique handle>
- Availability: Yes
- Type: Ultra Extension
- Target Link URI: https://<your domain>/lti/uefLaunch

Then submit.

## To run the code:

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
