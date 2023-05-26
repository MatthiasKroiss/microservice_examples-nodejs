# microservice_examples-nodejs


To run ```npm run dev```

## Docker

### build
 ```docker build . -t user-service``` in user-service module and ```docker build . -t order-service``` in order-service module
### run
```docker run --name user-service -p 9000:9000 -d user-service```

```docker run --name user-service -p 9001:9001 -d order-service```


## APIs

| Method | url |
| ------ | --- |
| GET | localhost:9001/orders/:username |
| POST and GET | localhost:9001/orders |
| GET | localhost:9000/users/:username |
| POST and GET | localhost:9000/users |




