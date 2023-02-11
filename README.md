# Next.js OpenJira App
Para correr localmente, se necesita la base de datos
```
docker-compose up -d
```


* MongoDB URL local
```
mongodb://localhost:27017/entriesdb
```

## Configurar las variables de entorno
Renombrar el archivo __.env.template__ a __.env__

## LLenar la base de datos con información de pruebas
```
http://localhost:3000/api/seed
```