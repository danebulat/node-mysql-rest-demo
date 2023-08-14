# Node.js and MySQL REST API Demo

A small application comprising of CRUD endpoints for a 
user resource. 

## Setup

Enter MySQL on the command line and run the project's 
SQL scripts to setup a new database:

```bash
mysql -u root -p

# Create a new database and table
source sql/create.sql

# Insert some data into the users table
source sql/insert.sql

# Create a stored procedure to retrieve a user by id
source sql/procedure.sql
```

Then create a `.env` file in the project's root directory and 
refer to the `.env.example` file to setup your own database 
environment.

Finally, install the project's dependencies and start the server:

```bash
# install node packages
npm install

# start development server
npm run dev
```

## Testing 

A summary of the application's endpoints:

```
GET    /users     -> getMultiple()
GET    /users/:id -> search(id)
POST   /users     -> create()
PUT    /users/:id -> update(id)
DELETE /users/:id -> remove(id)
```

Simply use a browser to test the `GET` endpoints.
Some examples:

```bash
# list users (10 per page)
localhost:3000/users 
localhost:3000/users?page=2
localhost:3000/users?page=3

# get a user by id
localhost:3000/users/1
localhost:3000/users/2
```

To test the `POST`, `PUT` and `DELETE` endpoints, execute 
the included bash scripts, which consist of cURL commands.
Be sure to modify the script's payload to comply with 
your own database.

```bash
cd test

# insert a new user
./insert

# update a user
./update

# delete a user via an id (Ex. 20)
./delete 20
```
