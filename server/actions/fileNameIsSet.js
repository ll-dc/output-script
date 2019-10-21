'use strict'

let action

function fileNameIsSet () {
  try {

    action.resolve()
  } catch (exception) {
    action.reject(`[fileNameIsSet] ${exception}`)
  }
}

module.exports = (options) =>
  new Promise((resolve, reject) => {
    action = { resolve, reject }
    fileNameIsSet(options)
  })
