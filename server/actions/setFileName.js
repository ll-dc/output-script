'use strict'

let action

function setFileName () {
  try {

    action.resolve()
  } catch (exception) {
    action.reject(`[setFileName] ${exception}`)
  }
}

module.exports = (options) =>
  new Promise((resolve, reject) => {
    action = { resolve, reject }
    setFileName(options)
  })
