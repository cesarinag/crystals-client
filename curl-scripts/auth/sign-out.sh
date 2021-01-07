curl "https://arcane-meadow-00738.herokuapp.com/sign-out" \
  --include \
  --request DELETE \
  --header "Content-Type: application/jason" \
  --header "Authorization: Bearer ${TOKEN}"
echo
