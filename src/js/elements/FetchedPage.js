let dataFetcher;

class FetchedPage extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        return this.getData();
    }

    async getData() {
        const response = await dataFetcher.requireGet("https://www.google.ca");
        //console.log(await response.text());
        console.log(response);
        this.innerHTML = await response;//.text();
    } 
}

module.exports = {
    init: (fetcher) => { dataFetcher = fetcher },
    module: FetchedPage
};