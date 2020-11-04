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
    attributeChangedCallback(attrName, oldValue, newValue) {
        console.log(attrName, newValue);
        if(attrName == 'name') {
            this.shadowRoot.querySelector('.meme-name').innerHTML = newValue
        }
        if(attrName == 'date-modified') {
            this.shadowRoot.querySelector('.meme-date-modified').innerHTML = newValue
        }
        if(attrName == 'image') {
            this.shadowRoot.querySelector('.meme-photo').src = newValue
        }
        if(attrName == 'description') {
            this.shadowRoot.querySelector('.meme-description').innerHTML = newValue
        }
    }

    //gọi khi component mất đi
    disconnectedCallback() {

    }

    static get observedAttributes() {
        return ['name', 'date-modified', 'image', 'description']
    }
}

window.customElements.define('meme-container', MemeContainer)