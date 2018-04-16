class Fetcher {
    constructor(fetch) {
        this.fetch = fetch;
        this.promises = new Map();
    }

    requireGet(url) {
        if(!this.promises[url]) {
            this.promises.set(url, this.fetch(url).then(response => {
                return response.text();
            }));   
        }
        
        return this.promises.get(url);
    }

    getPromises() {
        return this.promises.values;
    }
}

module.exports = Fetcher;