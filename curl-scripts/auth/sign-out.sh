curl "http://localhost:4741/sign-out" \
  --include \
  --request DELETE \
  --header "Content-Type: application/jason" \
  --header "Authorization: Bearer ${TOKEN}"
echo
