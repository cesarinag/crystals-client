curl "https://arcane-meadow-00738.herokuapp.com/sign-up" \
--include \
--request POST \
--header "Content-Type: application/json" \
--data '{
  "credentials": {
    "email": "'"${EMAIL}"'",
    "password": "'"${PW}"'",
    "password_confirmation": "'"${PW}"'"
  }
}'
echo
