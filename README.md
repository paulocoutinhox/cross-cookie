# Cross cookie test

This is a sample trying to use cookie across between different domains.  

The scenario is simple:  

```
-------------------------------------------|
|      LOCALHOST      | CROSS-DOMAIN.LOCAL | 
-------------------------------------------|
| Make ajax request -> Create cookie with  |
|                      another domain and  |
|                      put some data on    |
|                      session data        |
-------------------------------------------|
|                   <- Back with cookie    |
|                      on header           |
-------------------------------------------|
| Make other ajax   -> Initialize session  |
| request                                  |
-------------------------------------------|
|                   <- Show variables in   |
|                      session data defined|
|                      on first request    |
-------------------------------------------|
```

## How to use

1. Install docker  

2. Add this line to your /etc/hosts file:  
> 127.0.0.1 cross-domain.local

3. Build docker images:
> make docker-compose-rebuild

4. Start all requireddocker containers:
> make docker-compose-start

5. Open in your browser:  
> http://localhost

## Other things  

If you want more commands, type:  
> make help  

## Solutions

First solution dont need any change on server code, but only in nginx configuration to support CORS and the helper function to make requests with all required params.  

Second solution is using the same PHP Session ID from the start script that initialize the session and  use the returned session ID inside a header on other requests. All requisions after the first ajax call (can be a login script), will receive a header with that PHP Session ID to force always start the session with that ID.  

Both are working and tested on Chrome and Safari (OSX and iOS).  