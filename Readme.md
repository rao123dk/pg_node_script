
## Installation Steps:
1. Update the config/config.json file with database credentials. Here, we can use multiple environemnt credentials.
2. Run the migrations 

 1. Clone the repository
    ```sh
    $ git clone https://github.com/amitrhd/hiring-task.git
    ```
 2. Install these npm packages
    ```sh
     $ npm install
    ```
3. Make a copy of config/config.example.json and rename it to config/config.json. Insert the db credentials in config.json for different environements.
  
4. Run the migration using --env <env_name> falg, default It takes development credentials from config/config.json.
    ```sh
     $ npx sequelize db:migrate --env production
    ```
5. Run the index.js script with NODE_ENV=<environment_name>. For development you can skip it. 
 ```sh
     $ NODE_ENV=production node index.js
    ```


