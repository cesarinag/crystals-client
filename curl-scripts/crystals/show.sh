curl --include "https://arcane-meadow-00738.herokuapp.com/crystals/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"
echo
