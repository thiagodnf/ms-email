<img src="https://user-images.githubusercontent.com/114015/72431788-65b02c80-3774-11ea-833d-31ad3edbf9a2.png" width="500px"/>

A microservice in Node.js for email management

# Screenshots

An example of email sent by using this tool:

<img src="https://user-images.githubusercontent.com/114015/72455458-8fcc1380-37a1-11ea-9fa5-75aa77a06a30.png" width="500px"/>


# Locales Supported

Right now **2** locales are supported.

| Language Code| Language Name |  
| :-----: | :---- | 
| en-US | English (US) | 
| pt-BR | Portuguese (Brazil) |
 
# Available Templates

This project supports the following email templates:

| Name| Description | Screenshot | 
| :-----: | :---- | :----: | 
| confirm-email | Send it when the users sign up in your app | [Click here](https://github.com/thiagodnf/ms-email/blob/master/assets/screenshots/confirm-email.png) |
| user-activated | Send it when the users activate their accounts | [Click here](https://github.com/thiagodnf/ms-email/blob/master/assets/screenshots/user-activated.png) |

# How to use

Once the app is working, you can send request for the following API

# Deploy on Heroku

Click the button below to deploy this project on Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/thiagodnf/ms-email)

With the "Deploy to Heroku" button, you can easily deploy MS Email to Heroku from your web browser by following the steps below.

**Heroku configuration** 

1. Click the Deploy to Heroku button to go to the Heroku Dashboard to configure and deploy the app.
2. Enter a Heroku app name (optional).
3. Enter the following Heroku config variables.
Channel ID: Found on the "Basic information" page in the Channel Console
Channel secret: Found on the "Basic information" page in the Channel Console
Callback URL: https:// + "Heroku app name" + .herokuapp.com/auth
Click the Deploy button. Heroku then deploys this repository to a new Heroku app on your account.
