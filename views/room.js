var header = require('./partials/header')

function render (data) {
  return `
    ${header()}
    <h1>${data.name}</h1>
    <h2>${data.genre}</h2>
  `
}

module.exports = render
