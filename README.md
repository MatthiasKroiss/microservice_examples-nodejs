# microservice_examples-nodejs


To run ```npm run dev```

## Docker

### build
 ```docker build . -t user-service``` in user-service module and ```docker build . -t order-service``` 
### run
```docker run --name user-service -p 9000:9000 -d user-service```

```docker run --name user-service -p 9001:9001 -d order-service```
