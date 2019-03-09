import {internal, internalChangedCallback, render} from '@corpuscule/element';
import {api, form, option} from '@corpuscule/form';
import {element, html} from '../app/config';
import Field from './Field';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

@form()
@element('ex1-form', {extends: 'form'})
export default class Form extends HTMLFormElement {
  @api formApi;
  @api @internal state;
  @option initialValues = {stooge: 'larry', employed: false};

  @option
  async onSubmit(values) {
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
  }

  connectedCallback() {
    this[internalChangedCallback]('state', null, this.state);
  }

  [internalChangedCallback](propName, oldValue, newValue) {
    if (propName === 'state') {
      this.dispatchEvent(new CustomEvent('form-state-changed', {detail: newValue}));
    }
  }

  [render]() {
    return html`
      <${Field} name="firstName">
        <label>First Name</label>
        <input type="text" placeholder="First Name">
      </${Field}>
      <${Field} name="lastName">
        <label>Last Name</label>
        <input type="text" placeholder="Last Name">
      </${Field}>
      <${Field} name="employed">
        <label>Employed</label>
        <input type="checkbox">
      </${Field}>
      <${Field} name="favoriteColor">
        <label>Favorite Color</label>
        <select>
          <option></option>
          <option value="#ff0000">❤️ Red</option>
          <option value="#00ff00">💚 Green</option>
          <option value="#0000ff">💙 Blue</option>
        </select>
      </${Field}>
      <${Field} name="toppings">
        <label>Toppings</label>
        <select multiple>
          <option value="chicken">🐓 Chicken</option>
          <option value="ham">🐷 Ham</option>
          <option value="mushrooms">🍄 Mushrooms</option>
          <option value="cheese">🧀 Cheese</option>
          <option value="tuna">🐟 Tuna</option>
          <option value="pineapple">🍍 Pineapple</option>
        </select>
      </${Field}>
      <${Field} name="sauces">
        <label>Sauces</label>
        <section class="list">
          <label>
            <input type="checkbox" value="ketchup">
            Ketchup
          </label>
          <label>
            <input type="checkbox" value="mustard">
            Mustard
          </label>
          <label>
            <input type="checkbox" value="mayonnaise">
            Mayonnaise
          </label>
          <label>
            <input type="checkbox" value="guacamole">
            Guacamole 🥑
          </label>
        </section>
      </${Field}>
      <${Field} name="stooge">
        <label>Best Stooge</label>
        <section class="list">
          <label>
            <input type="radio" value="larry">
            Larry
          </label>
          <label>
            <input type="radio" value="moe">
            Moe
          </label>
          <label>
            <input type="radio" value="curly">
            Curly
          </label>
        </section>
      </${Field}>
      <div class="buttons">
        <button type="submit">Send</button>
        <button type="reset">Reset</button>
      </div>
    `;
  }
}
