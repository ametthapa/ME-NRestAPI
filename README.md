1. npm init -y (for npm pagkage.json)
2. express and mongoose (express for easy creation of web application and mongoose for connecting with mongo db)
3. npm i --save-dev dotenv nodemom (Here using --save-dev it is development depedencies not for production ,pull env variable from env file and nodemom for live server)
4. Create own script for runnig server as inside scripts in package.json
   "start":"nodemom server.js" (here server.js is the file we want to run)

5. create .env file and .gitignore file
6. create a db in mongodb then, inside connect inside connect your application the url for db
   in the db url change username, pwd and dbname accordingly. here the password is url ocded means @ is %40, so make it similar with comparing to that value.
7. In .env file add db url and port number
8. in db.js code for db connectivity
9. in server.js add dotenv library using require and provide path to your .env file using config for dotenv
10. now app listen to check db and port connectivity.
