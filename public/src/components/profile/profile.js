class MyProfile extends HTMLElement {
  // this is how you declare which props are you interested in
  static get observedAttributes() {
    return ['name', 'occupation', 'distance', 'age', 'image'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(propName, oldValue, newValue) {
    this[propName] = newValue;
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="./src/components/profile/styles.css">
    <div class="card">
    <div class="navbar">
        <img src="./assets/menu.png" alt="" class="menu">
        <img src="./assets/tinderIcon.png" alt="" class="logo">
        <img src="./assets/messages.png" alt="" class="messages">
    </div>
    <div class="main">
              <div class="gradient"></div>
                <img src="${this.image}" alt="" class="mainphoto">
        <div class="phototext">
            <h2>${this.name}, ${this.age}</h2>
            <h3>${this.occupation}</h3>
            <h4>${this.distance}</h4>
        </div>
    </div>

    `
}
}
customElements.define('my-profile', MyProfile);
export default MyProfile;
