# startrek-api

A simple api to access information about star trek television episodes 

<<<<<<< HEAD
After starting postgres run these bash commands from the ~/db/ folder:

* createdb startrek
* psql -d startrek -f seed_data.sql
=======
## Installation

### Requirements
* node
* express
* knex
* postgres



## Setup

After downloading the source code run:

```
yarn install
```


After starting postgres run these bash commands from the ~/db/ folder:

```
createdb startrek
psql -d startrek -f seed_data.sql
```

To set up the rest of the database
```
yarn migrate
```

To start the server on port **3000** http://localhost:3000/
```
yarn start
```
## Methods

## Development
### GET startrek/series
Returns a list of all the different Star Trek televevision series
### GET startrek/episodes
Returns a list of all the Star Trek episodes currently in the database
### GET startrek/episodes/:id
Returns a single Star Trek Episode by episode number
### POST startrek/episodes
Adds a Star Trek episode to the database when passed a JSON episode object
### PATCH startrek/episodes/:id
Updates a single Star Trek episode when passed a JSON episode object based on episode number
### DELETE startrek/episodes/:id
Deletes a single Star Trek episode by episode number 

## Data Definition


## Contributing
This project is just beginning development with several features yet to be implmented. Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
### Episode 

```JSON
{"startrek": [
   {"series_id":1,
   "season_id":1,
   "number":80,
   "title":"Added This one",
   "star_date":"1513.1",
   "air_date":"1966-09-07",
   "director_id":3,
   "story_writer_id":4,
   "teleplay_writer_id":null}]}
```
## License
[MIT](https://choosealicense.com/licenses/mit/)
>>>>>>> c8fb357f1b64ec4621f2a6b3109bdf93392a8529
