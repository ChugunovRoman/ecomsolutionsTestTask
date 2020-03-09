# Russian speaking Node.JS developer

## Run app via Docker

For launch the app first need download a docker container with the app:

```
docker pull 4tqrgqe5yrgfd/btc-usd-ticker:0.1.0
```

And then you can launch the app via next command:

```
docker run -p 3000:3000 4tqrgqe5yrgfd/btc-usd-ticker:0.1.0
```

The server starts on 3000 port. After start server the app will be available on `http://bubuntu:3000`
