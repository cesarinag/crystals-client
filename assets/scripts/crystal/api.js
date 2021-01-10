'use strict'

const config = require('./../config')
const store = require('./../store')


// create crystal
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

// INDEX crystal
const indexCrystal = function (crystalData) {
  return $.ajax({
    url: config.apiUrl + '/crystals',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: crystalData
  })
}


// SHOW crystal
const showCrystal = function (crystalData) {
  return $.ajax({
    url: config.apiUrl + '/crystal/' + crystalData.crystal.id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: crystalData
  })
}


// update crystal
const updateCrystal = function (crystalId, crystalData) {
  return $.ajax({
    url: config.apiUrl + '/crystals/' + crystalId,
    method: 'PATCH',
    data: crystalData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  createCrystal,
  indexCrystal,
  showCrystal,
  updateCrystal
}
