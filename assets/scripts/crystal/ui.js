'use strict'

const store = require('./../store')



// create crystal success FUNCTION
const createCrystalSuccess = function (response) {
// console.log(response.crystal)
$('.authenticated').show()
$('#change-password').hide()
$('#message').text('Crystal Created!')
store.crystal = response.crystal
// console.log(store.crystal)
const crystalObject = response.crystal
// console.log('Crystal Object: ', crystalObject)
$('.unauthenticated').hide()
$('.container').show()
$('#change-password').show()
// $('.box').css('pointer-events', 'auto')
$('form').trigger('reset')
}
// create crystal failure function
const createCrystalFailure = function (error) {
  $('#message').text('No crystal for u ' + error.responseJSON.message)
}


// index crystal success
const indexCrystalSuccess = function (response) {
  // console.log(response)
  store.crystal = response.crystal
  // console.log(store.crystal)
  const currentCrystal = store.crystal
  const reverseCrystalIndex = currentCrystal.reverse()
  // console.log(store.crystal)
  let crystalHTML = ''
  reverseCrystalIndex.forEach(function (crystal) {
    const currentCrystalHTML = (`
      <div>Name: ${crystal.name}</div>
      <ul>
      <li>Crystal ID: ${crystal._id}</li>
      <li>Chakra: ${crystal.chakra}</li>
      <li>Indigenous To: ${crystal.indigenousTo}</li>
      <li>Suggested Use: ${crystal.ritualUse}</li>
      </ul>
      `)
      crystalHTML += currentCrystalHTML
  })
  $('#message').text('dis what we got')
  $('#crystals-display').html(crystalHTML)
  $('form').trigger('reset')
}

// index crystal fail
const indexCrystalFailure = function (error) {
  $('#message').text('nun here for u ' + error.responseJSON.message)
}


// show crystal sucess
const showCrystalSuccess = function (response) {
  // console.log(response)
  store.crystal = response.crystal
  const currentCrystal = store.crystal
  // console.log(currentCrystal)
  let crystalHTML = ''
    const crystalShowHTML = (`
      <div>Name: ${currentCrystal.name}</div>
      <ul>
      <li>Crystal ID: ${currentCrystal._id}</li>
      <li>Chakra: ${currentCrystal.chakra}</li>
      <li>Indigenous To: ${currentCrystal.indigenousTo}</li>
      <li>Suggested Use: ${currentCrystal.ritualUse}</li>
      </ul>
    `)
    crystalHTML += crystalShowHTML
  $('#message').text('is dis ur crystal?')
  $('#crystals-display').html(crystalHTML)
  $('form').trigger('reset')
}

// show crystal fail
const showCrystalFailure = function (error) {
  $('#message').text('cant show u crystal cause ' + error.responseJSON.message)
}


// update crystal success
const updateCrystalSuccess = function (response) {
  // console.log(response)
  store.crystal = response.crystal
  // console.log(store.crystal)
  const currentCrystal = store.crystal
  // console.log(currentCrystal)
  let crystalHTML = ''
    const crystalUpdateHTML = (`
      <div>Name: ${currentCrystal.name}</div>
      <ul>
      <li>Crystal ID: ${currentCrystal._id}</li>
      <li>Chakra: ${currentCrystal.chakra}</li>
      <li>Indigenous To: ${currentCrystal.indigenousTo}</li>
      <li>Suggested Use: ${currentCrystal.ritualUse}</li>
      </ul>
      `)
      crystalHTML += crystalUpdateHTML
    $('#message').text('crystal has been updated')
    $('#crystals-display').html(crystalHTML)
    $('form').trigger('reset')
}

// update crystal failure
const updateCrystalFailure = function (error) {
  $('#message').text('cant update ' + error.responseJSON.message)
}

// delete crystal success
const deleteCrystalSuccess = function () {
  const crystalHTML = (`
    <div>
    <h2> crystal is gone!</h2>
    </div>
    `)
    $('#message').text('crystal has been deleted')
    $('#crystals-display').html(crystalHTML)
    $('form').trigger('reset')
}


const deleteCrystalFailure = function (error) {
  $('#message').text('cant delete' + error.responseJSON.message)
}

module.exports = {
  createCrystalSuccess,
  createCrystalFailure,
  indexCrystalSuccess,
  indexCrystalFailure,
  showCrystalSuccess,
  showCrystalFailure,
  updateCrystalSuccess,
  updateCrystalFailure,
  deleteCrystalSuccess,
  deleteCrystalFailure
}
