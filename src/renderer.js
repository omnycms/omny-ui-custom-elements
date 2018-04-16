require('@skatejs/ssr/register')
const render = require('@skatejs/ssr')
const OmnyPage = require('./js/elements/Page')
const fetch = require('node-fetch');

const elementProvider = require('./js/ElementProvider')

elementProvider.defineElements()

const Fetcher = require('./js/utilities/Fetcher');
const fetcher = new Fetcher(fetch);

const FetchedPage = require('./js/elements/FetchedPage')

FetchedPage.init(fetcher)


const resolver = function(doc) {
    return async (f) => {
        await fetcher.getPromises();
        f(doc);
    };
}

customElements.define('x-fetch', FetchedPage.module)

module.exports = async function (pageData) {
  const page = new OmnyPage()
  page.innerHTML = pageData
  return await render(page, resolver)
}
