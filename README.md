JOSE ANTONIO ALVAREZ MARI

Si se quiere realizar con Docker, es necesario ejecutar en el host:

-- docker run -p 27017:27017 mongo:latest

Desde la carpeta rest/BSDT_REST:

-- mongoimport --host localhost:27017 -d zips_small -c restaurants < zips_small.json
-- npm install && npm start
