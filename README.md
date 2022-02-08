# Info
This is a Vue 3 + Node (Express) application that main objective is to be a csv parser,
meaning that it will create a ETL from a CSV file to the Database, parsing a list of contacts to a validatable format and updating the respective DB.

# How to use this tool
It's pretty straigth forward, you will need an csv file, you will find a mock one on the `src` of the project.
Then you can access the `/insert` route and upload the list of contacts, then, all the contacts (valids and invalids) will be available at home (`"/"`)

# How to run this project

You can either run the frontend and backend separately using the following commands:
```
  frontend: npm run serve
  backend: npm run dev
```

If you follow the above route, you will need to configure the database on the orm file which is located at
`./backend/ormconfig.json`

Or you can use `Docker Compose` to run all services altogether using `docker-compose up` at the souce of the project.

# Limitations and future 
- Project currently lacks Unit tests
- The parsing of the CSV file should be done by the backend
- Increase the typing on the frontend side
- Needs to find a way to get Vue 3 to watch nested data on front end 