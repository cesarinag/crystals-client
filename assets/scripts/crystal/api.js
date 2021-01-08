'use strict'

const config = require('./../config')
const store = require('./../store')



const createCrystal = function (crystalData) {
  return $.ajax({
    url: config.apiUrl + '/crystals',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: crystalData
  })
}



module.exports = {
  createCrystal
}
