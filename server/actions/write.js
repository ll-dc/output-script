'use strict'

let action

function write () {
  try {

    action.resolve()
  } catch (exception) {
    action.reject(`[write] ${exception}`)
  }
}

module.exports = (options) =>
  new Promise((resolve, reject) => {
    action = { resolve, reject }
    write(options)
  })
