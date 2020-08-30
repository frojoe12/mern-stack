# postman cheatsheet

GET request
add http link to top

body:none

Headers:
KEY: x-auth-token
VALUE: jwt response when logging in

POST request
Headers
set Content-Type eg application/json
Body
add json object to send to server
eg {
"name":"user",
"password":"123"
}
