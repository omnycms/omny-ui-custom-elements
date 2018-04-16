class Content extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = "Yo there";
    }
}

module.exports = Content;