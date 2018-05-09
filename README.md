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

## Problems found

Apple **removed** this option from Safari (osx and ios), but works on other browsers.  

The found solution was pass the **PHP session ID** in a header and start a session with this **session ID** from **header**.  

Solution is in file: **ajax3.php**  

You can use other auth options by header, like JWT too or a own method.  