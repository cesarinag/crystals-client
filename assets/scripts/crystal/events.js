'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')
const store = require('./../store')


const onCreateCrystal = function(event) {
  event.preventDefault()
  const crystalData = getFormFields(event.target)
  // console.log(crystalData)
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
  // console.log(crystalId)
  // console.log(crystalData)
  api.showCrystal(crystalId)
  .then(ui.showCrystalSuccess)
  .catch(ui.showCrystalFailure)
}

// update crystal
const onUpdateCrystal = function (event) {
  event.preventDefault()
  const form = event.target
  const crystalData = getFormFields(form)
  const crystalId = crystalData.crystal._id
  // console.log(crystalData + `is crystalData`)
  // console.log(crystalId + `is crystalId`)
  api.updateCrystal(crystalData)
  .then(ui.updateCrystalSuccess)
  .catch(ui.updateCrystalFailure)
}


// // delete crystal
// const onDeleteCrystal = function (event) {
//   event.preventDefault()
//   console.log('Deleted', event.target)
//   const form = event.target
//   const crystalData = getFormFields(form)
//   api.deleteCrystal(crystalData)
//   .then(ui.deleteCrystalSuccess)
//   .catch(ui.deleteCrystalFailure)
// }

const onDeleteCrystal = function (event) {
  event.preventDefault()
  const form = event.target
  const crystalData = getFormFields(form)
  const crystalId = crystalData.crystal._id
  // console.log(crystalId)
  // console.log(crystalData)
  api.deleteCrystal(crystalId)
  .then(ui.deleteCrystalSuccess)
  .catch(ui.deleteCrystalFailure)
}


module.exports = {
  onCreateCrystal,
  onIndexCrystal,
  onShowCrystal,
  onUpdateCrystal,
  onDeleteCrystal
}
