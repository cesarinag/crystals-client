'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')
const store = require('./../store')


const onCreateCrystal = function(event) {
  event.preventDefault()
  const crystalData = getFormFields(event.target)
  console.log(crystalData)
  api.createCrystal(crystalData)
  .then(ui.createCrystalSuccess)
  .catch(ui.createCrystalFailure)
}

// index all crystal
const onIndexCrystal = function (event) {
  // event.preventDefault()
  const form = event.target
  const crystalData = getFormFields(form)
  // console.log(CrystalData)
  api.indexCrystal(crystalData)
  .then(ui.indexCrystalSuccess)
  .catch(ui.createCrystalFailure)
}

// show one crystal
const onShowCrystal = function (event) {
  event.preventDefault()
  const form = event.target
  const crystalData = getFormFields(form)
  const crystalId = crystalData.crystal._id
  console.log(crystalId)
  console.log(crystalData)
  api.showCrystal(crystalId)
  .then(ui.showCrystalSuccess)
  .catch(ui.showCrystalFailure)
}

// update crystal
const onUpdateCrystal = function (event) {
  event.preventDefault()
  const crystalData = getFormFields(form).crystal
  const crystalId = crystalData.id
  // console.log(crystalData + `is crystalData`)
  // console.log(crystalData + `is crystalId`)
  api.updateCrystal(crystalId, crystalData)
  .then(ui.updateCrystalSuccess)
  .catch(ui.updateCrystalFailure)
}

module.exports = {
  onCreateCrystal,
  onIndexCrystal,
  onShowCrystal,
  onUpdateCrystal
}
