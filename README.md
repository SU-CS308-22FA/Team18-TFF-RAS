# [TFF-RAS](https://team18-tff-ras-production.up.railway.app/)

Go to website: https://team18-tff-ras-production.up.railway.app/

TFF-RAS is a free discussion space, a social platform, for football matches and how they were ruled. With its multilayered rating system it will allow TFF to see the public concerns about a referee and act accordingly.

## Installation
First of all be sure that you have npm installed to your device if not head to [this](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) website and follow the instructions and install it.

Clone the repository to a directory.

```bash
git clone <repository> <directory>
```

Head into the directory.

```bash
cd <directory>
```

Use the package manager [npm](https://www.npmjs.com) to install the packages used in this project, be sure that you are in the correct directory.

```bash
npm install
```
Run the app in your local host, there are multiple approaches listed below.

```bash
npm start server.js
```
```bash
nodemon server.js
```
```bash
node server.js
```
Now you will see "Listening from port 'port number'" on your screen.

Go to you browser and enter "localhost:'port number'", now you are able to interact with the project from your local host.

## Reporting bugs and suggesting fixes

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

Please be sure to check Known Bugs section before reporting bugs.

### Known Bugs

1- In search bar there are 2 bugs one related with backend one with frontend, backend problem does not reponds as it should if the imput has Turkish character in it. Please try to not use Turkish characters or otherwise you will not get the search you want. The front end bug is about pressing delete where it is unnecessary, after a word entered and deleted if delete is pressed again the page vanishes and refresh is needed to continue using the webpage.

## Obtaining the Source Code

### Cloneing the repository
To obtain the source code for the whole project you can
```bash
git clone <repo> <directory>
```
Such that all the files will be ready to de editted or observed. Do not forget that the frontend source codes are in client folder inside of the root folder. To navigate in there use

```bash
cd client
```

### Folder Structure

1. In the root file there are mainly backend source codes. server.js is the main file which will run the server on your localhost.
2. Controllers folder contains the variaty of controller files which include the functions that are used in api s and routes. 
3. Models folder cntains the MongoDB model schemas.
4. Routers folders contain the routes which are used in api and routing purposes.
5. db folder contains the definition of connection function to database.
6. errors folder contains the possible error file which can be seen or encountered during the development of this project.
7. middleware folder contains the middleware used durng the project.
8. client folder contains many folders in itself and it is for Front-End source codes.
 8.1. continue like this
 8.2. 

### How to Build the project

After cloneing the project with
```bash
git clone <repo> <directory>
```
go to the directory

```bash
cd <directory>
```
and run
```bash
npm install
```
this will load the packages used in backend. After the load ing is complete go to client folder
```bash
cd client
```
and run
```bash
npm install
```
This will load the packages used for frontend of the project.

### Deploying the project to a remote server (Railway)

#####Step 1: Clone to a git repository 
[Railway](https://railway.app) is a new cloud development platform! ??????

Use Railway to get a production environment that you can access from any device.

##### Step 2: On the railway web page, deploy from github repository

##### Step 3: Configure & launch your environment

On the railway web page, navigate to your dashboard, select your github deployment and change configuration settings  

##### Step 3: Modify environment variables

1. In Railway, select your deployment
2. Navigate to variables
3. Add all environment variables
4. railway automatically deploys once you are done editing

   
