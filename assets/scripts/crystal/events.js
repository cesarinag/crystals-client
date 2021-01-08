'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')
const store = require('./../store')


const onCreateCrystal = function(event) {
  event.preventDefault()
  const form = event.target
  const crystalData = getFormFields(form)
  console.log(crystalData)
  api.createCrystal(crystalData)
  .then(ui.createCrystalSuccess)
  .catch(ui.createCrystalFailure)
}





module.exports = {
  onCreateCrystal
}
