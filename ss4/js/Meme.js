const $template = document.querySelector("template")
class MemeContainer extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild($template.content.cloneNode(true))
    }

    //đc gọi khi component đc sinh ra
    connectedCallback() {

    }

    //đc gọi khi thuộc tính của component thay đổi
    attributeChangedCallback(name, oldValue, newValue) {

    }

    //gọi khi component mất đi
    disconnectedCallback() {

    }
}

window.customElements.define('meme-container', MemeContainer)