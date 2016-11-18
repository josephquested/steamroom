var header = require('./partials/header')

function render (data) {
  return `
    ${header()}
  `
}

module.exports = render
