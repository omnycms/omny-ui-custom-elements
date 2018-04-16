const OmnyPage = require('./elements/Page')
const OmnyContent = require('./elements/Content')

module.exports = {
  defineElements: function () {
    customElements.define('x-page', OmnyPage)
    customElements.define('x-content', OmnyContent)
  }
}
