const hello = 'Halo ';
class HelloWorldWebcomponent extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement('template');
    template.innerHTML = HelloWorldWebcomponent.template();
    this.attachShadow({
      mode: 'open'
    });

    if (this.shadowRoot) {
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }

  connectedCallback() {
    console.log(hello);
  }

  static template() {
    return `
        <style>
            div {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 200px;
                height: 200px;
                background-color: pink;
            }
        </style>
        <div>
            <span>${hello}</span><slot></slot>
        </div>`;
  }

}
customElements.define('hello-world-webcomponent', HelloWorldWebcomponent);

export { HelloWorldWebcomponent };
