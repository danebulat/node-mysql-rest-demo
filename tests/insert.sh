curl -i -X POST -H 'Accept: application/json' \
  -H 'Content-type: application/json' http://localhost:3000/users \
  --data '{ "first_name":"Bob", "last_name":"Smith", "email":"bob@email.com", "dob":"1981-05-30", "dept":"Software" }'

