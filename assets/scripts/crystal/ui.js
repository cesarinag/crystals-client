'use strict'

const store = require('./../store')



// create game success FUNCTION
const createCrystalSuccess = function (response) {
console.log(response.crystal)
$('.authenticated').show()
$('#change-password').hide()
$('#message').text('Crystal Created!')

store.crystal = response.crystal
const crystalObject = response.crystal
console.log('Game Object: ', gameObject)

$('.unauthenticated').hide()
$('.container').show()
$('#change-password').show()
// $('.box').css('pointer-events', 'auto')

// $('.box').on('click', gameEvents.onBoardClick)
}
// create game failure function
const createCrystalFailure = function (error) {
  $('#message').text('No crystal for u ' + error.responseJSON.message)
}


module.exports = {
  createCrystalSuccess,
  createCrystalFailure
}
