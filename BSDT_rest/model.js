// MongoDriver client
var mongoose = require('mongoose')

// Database URL
var db_url = 'mongodb://localhost:27017/zips_small';
var Schema = mongoose.Schema
var Restaurants = mongoose.model('restaurants',new Schema({restaurant_id: Number, nombre: String}), 'restaurants');

// Inits the connection with the database
exports.init = async function (callback) {
	console.log('Connecting to the database', db_url, '...');

	mongoose.connect(db_url, {useNewUrlParser: true});
		callback();
	// Implementar conexión a la base de datos
	// El objeto de base de datos que devuelve la función de conexión debe asignarse a la variable global 'db'
	// Una vez conectado correctamente debe llamarse a la función 'callback'
}

// Returns a list of the available restaurants in the database
exports.list = async function (query) {
	console.log('Getting restaurants list. Query: ', query);

	let list = await Restaurants.find(query)
	console.log(list.length,' Restaurants found.')
	
	return list
	
	// Implementar consulta para listar los restaurantes disponibles.
	// Este método debe devolver el array de restaurantes
}

// Returns the details of a restaurant in the database
exports.read = async function (restaurantId) {
	console.log('Getting restaurant', restaurantId);
		
	let restaurant = await Restaurants.find({"restaurant_id": restaurantId})
	return restaurant
	// Implementar consulta para obtener los detalles del restaurante con 'restaurant_id' = restaurantId
	// Este método debe devolver El json con los detalles del restaurante
}

// Creates a new restaurant in the database
exports.create = async function (data) {

	data.restaurant_id = 47407482 + Math.floor(Math.random() * (10000000 - 0));
	console.log('Creating restaurant with data', data);
	let resultado = await Restaurants.create(data)
	return resultado
	// Implementar creación de restaurante con los datos contenidos en 'data'.
	// Este método debe devolver el resultado del método insert a la base de datos
}

// Updates the details of a restaurant in the database
exports.update = async  function (restaurantId, data) {
	console.log('Updating restaurant', restaurantId, 'with data', data);
	let resultado = await Restaurants.findOneAndUpdate({"restaurant_id":restaurantId}, data)
	return resultado
	// Implementar actualización de restaurante con los datos contenidos en 'data'.
	// Este método debe devolver el resultado del método update a la base de datos
}

// Removes a restaurant from the database
exports.delete = async function (restaurantId) {
	console.log('Deleting restaurant', restaurantId);
	Restaurants.findOneAndDelete({"restaurant_id":restaurantId})
	// Implementar borrado de restaurante del restaurante con 'restaurant_id' = restaurantId
	// Este método no devuelve nada
}
