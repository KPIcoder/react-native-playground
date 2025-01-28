## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```
   
3. Head to `app/(tabs)/_layout.tsx`

Choose `mealsPersistantMemory` as a meals data provider. 

## HTTP server 
### requirements

- Docker
- psql or db manager

1. clone https://github.com/KPIcoder/data-in-cloud
2. switch to `lab-4-infra`
3. create `.env` file and copy
````
POSTGRES_USER=postgres
POSTGRES_PASSWORD=Qwerty12345
POSTGRES_DB=postgres

MONGO_INITDB_ROOT_USERNAME=mongoadmin
MONGO_INITDB_ROOT_PASSWORD=SecureMongo123

DOTNET_ENVIRONMENT=Production
DB_CONNECTION_STRING=Host=postgres;Port=5432;Database=postgres;Username=postgres;Password=Qwerty12345
MONGO_CONNECTION_STRING=mongodb://mongoadmin:SecureMongo123@mongo:27017
MONGO_DATABASE_NAME=data-in-cloud
````
4. run `docker-compose up`
5. execute in a db console 
``````sql
create table "Meals"(
id serial primary key not null,
name text not null,
price int not null,
is_available boolean
)
``````
6. switch to frontend and head to `constants/external-links`
7. substitute '10.0.0.7' with your IP address to have cross-platform support
8. And you should be all set!