# LoadMonitoring

Made on mac but should work on windows or Linux as well. 

To run Backend
--

(main.py)

100. Create virtualenv and activate it (optional)

	- Run `pip install virtualenv`
	- `cd` to Backend folder
	- Run `virtualenv venv`
	- Run `source venv/bin/activate`

200. Install the required libraries:

	- Run `pip install -r requirements.txt`

300. launch the app:

	- Run `python main.py`

To run frontend
--

Made with Angular 

- PROD Build

	Open the index.html inside Frontend/load-monitoring/dist in a browser will launch the app

	Additionnaly, We would just need to have our server using Apache or nginx serve all requests to this `index.html` file. Angular will take care of the rest


  - DEV version

	100. Make sure Node.js and npm are install.

		You can install [here](https://nodejs.org/en/)

	200. Install the JS dependencies: 

		run: `npm install`
		-> this will create the node_modules folder

	300. make sure angular/cli works: 

		run: `npm install @angular/cli` this should install it. 
		To check the installation, run: `ng version`
if this doesnt work, probably "ng" is not in the path ... You can reference it directly though the actual path: 
`node_module/@angular/cli/bin/ng`

	400. launch the app:

		in the project: `ng serve` (to run) or `ng test` (to run tests)

Tests
--

- The tests for the backend are explained in the README of the backend. 

- For the Frontend, there are several unittesting in the `*spec.ts` files in the project. They use Karma. 
Regarding the test for the alert (mentionned in the requirements) it can be found in the `statistics.component.spec.ts` under `it should create an alert and then release it`

# LoadMonitoring



