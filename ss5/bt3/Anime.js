const $template = document.querySelector("template") 
class Anime extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild($template.content.cloneNode(true))
    }

    connectedCallback() {}
    attributeChangedCallback(attrName, oldValue, newValue) {
        console.log(attrName, newValue);
        if(attrName == 'image') {
            this.shadowRoot.querySelector('img').src = newValue
        }
        if(attrName == 'category') {
            this.shadowRoot.querySelector('.category').innerHTML = newValue
        }
        if(attrName == 'name') {
            this.shadowRoot.querySelector('.name').innerHTML = newValue
        }
        if(attrName == 'chapters') {
            this.shadowRoot.querySelector('.chapter').innerHTML = 'Số tập: ' + newValue
        }
        if(attrName == 'price') {
            this.shadowRoot.querySelector('.price').innerHTML = newValue
        }
        

    }

    disconnectedCallback() {}
    static get observedAttributes() {
        return ['image', 'category', 'name', 'chapters', 'price']
    }
}

window.customElements.define('anime-container', Anime)