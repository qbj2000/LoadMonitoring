#Flask Backend 

##What I do ? 

The application is basically consisted of 3 main functions: 

100. `auto_load()` :

	This function is run on a separate thread and will get a value of load every 10 secondes and will insert it into the cache, mySQL. 
	To avoid infinite loop, if the service is not called during 15 min or more the thread will end. It will restart when the service is called again
	To avoid the db to become to big, stored data are flushed if older than 24 hours. 

200. `get_load()`:

	 Answer to HTTP GET `/get_load` and will return the last time and value of load in the db. 

300. `get_load_multiple(minutes)`:

	Answer to HTTP GET `/get_loads/<minutes>'` and will return all the data in the db for the last number of minutes specified in argument. 


##tests

Run `python -m pytest`

All tests are in the `tests` folder

For this simple flask app, the only test we really need to do is the auto_load function. For this we create a test app client and a test db and a test modele object linked to the db

