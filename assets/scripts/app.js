'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// use require with a reference to bundle the file and use it in this file
const authEvents = require('./auth/events.js')
const crystalEvents = require('./crystal/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

// SHORTHAND FOR DOCUMENT READY WAITS FOR THE PAGE TO LOAD THEN RUNS THE GIVEN
// CALLBACK FUNCTION

$(() => {
  $('.authenticated').hide()
  $('.container').hide()
  // user sign-up listener
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#create-crystal').on('submit', crystalEvents.onCreateCrystal)
  // $('.box').on('click', gameEvents.onBoardClick)
  // $('#get-games').on('click', gameEvents.onGetGames)
})
