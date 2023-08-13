curl -i -X PUT -H 'Accept: application/json' \
  -H 'Content-type: application/json' http://localhost:3000/users/21 \
  --data '{"first_name":"Bob", "last_name":"Smith", "email":"bob_new@email.com", "dob":"1981-05-30", "dept":"Marketing"}'
