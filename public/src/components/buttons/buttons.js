class MyCounter extends HTMLElement {
  // this is how you declare which props are you interested in
  static get observedAttributes() {
    return ['like', 'dislike'];
  }

  attributeChangedCallback(propName, oldValue, newValue) {
    console.log("changed");
    this[propName] = newValue;
    this.mount();
  }

  // this is the method is triggered when the component is added to the document
  connectedCallback() {
    console.log("mounted");
    this.mount();
  }

  disconnectedCallback() {
    console.log("unmounted");
    this.removeEventListeners();
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.onDislikeClicked = this.onDislikeClicked.bind(this);
    this.onLikeClicked = this.onLikeClicked.bind(this);
  }

  mount() {
    this.render();
    this.addEventListeners();
  }

  addEventListeners() {
    this.shadowRoot
      .querySelector(".dislike")
      .addEventListener("click", this.onDislikeClicked);

      this.shadowRoot
      .querySelector(".like")
      .addEventListener("click", this.onLikeClicked);
  }




  render() {
    console.log("render");
    // adding external styles to the component
    this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="./src/components/profile/styles.css">
    <div class="buttons">
            <button class="dislike">${this.dislike || 0}</button>
            <button class="like">${this.like || 0}</button>
    </div>
    `
  }

  removeEventListeners() {
    this.shadowRoot
      .querySelector('button.dislike')
      .removeEventListener('click', this.onDislikeClicked)
  }

  onDislikeClicked() {
    console.log("clicked");
    const currentValue = Number(this.getAttribute("dislike")) || 0;
    this.setAttribute("dislike", currentValue + 1);
  }

  onLikeClicked() {
    console.log("clicked");
    const currentValue = Number(this.getAttribute("like")) || 0;
    this.setAttribute("like", currentValue + 1);
  }

}

customElements.define("my-counter", MyCounter);
export default MyCounter;
