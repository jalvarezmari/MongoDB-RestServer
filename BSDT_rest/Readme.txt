## Restaurants REST server

### Dependencies

- node.js
- npm

### How to install

Download the project and uncompress it.

cd BSDT_rest
npm install


### How to configure

+ The server is configured to listen in port 8000. You can modify it by changing the variable `port` in `rest_server.js` file.
+ The server is configured to connect to database in `mongodb://localhost:27017/zips_small`. You can modify it by changing the variable `db_url` in `model.js` file.

### How to run


npm start


### How to test

You can use any REST client to test the API. A test web page is also included in `http://localhost:<port>/webtest.html`

Examples using curl client:

#### Check server
	curl http://localhost:8000

#### List restaurants
	curl http://localhost:8000/restaurants

#### List restaurants including a query
	curl "http://localhost:8000/restaurants?nombre=miRestaurante&calle=calle30"

#### Get restaurant details
	curl http://localhost:8000/restaurants/2

#### Update restaurant details
	curl -H "Content-type:application/json" -X PUT -d '{"nombre":"Nuevo nombre"}' http://localhost:8000/restaurants/2

#### Create restaurant
	curl -H "Content-type:application/json" -X POST -d '{"nombre":"Mi restaurante"}' http://localhost:8000/restaurants

#### Delete restaurant
	curl -X DELETE http://localhost:8000/restaurants/3

#### Note:
When using CURL in Windows, simple quotes are not accepted. For instance, to update a restaurant the next command must be used:

	curl -H "Content-type:application/json" -X PUT -d "{\"nombre\":\"Nuevo nombre\"}" http://localhost:8000/restaurants/2`

### static webpage to test the REST API
In the public folder we can find a webtest.html page that can be used to test the API
You can serve that page with any static server of your choice
