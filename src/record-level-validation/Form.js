import {internal, internalChangedCallback, render} from '@corpuscule/element';
import {api, form, option} from '@corpuscule/form';
import {element, html} from '../app/config';
import Field from './Field';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

@form()
@element('ex2-form', {extends: 'form'})
export default class Form extends HTMLFormElement {
  @api formApi;
  @api @internal state;
  @option initialValues = {};

  @option
  async onSubmit(values) {
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
  }

  @option
  validate(values) {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    }
    if (!values.lastName) {
      errors.lastName = 'Required';
    }
    if (!values.age) {
      errors.age = 'Required';
    } else if (isNaN(values.age)) {
      errors.age = 'Must be a number';
    } else if (values.age < 18) {
      errors.age = 'No kids allowed';
    }
    return errors;
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
      <${Field} class="field" name="firstName">
        <label>First Name</label>
        <input type="text" placeholder="First Name">
      </${Field}>
      <${Field} class="field" name="lastName">
        <label>Last Name</label>
        <input type="text" placeholder="Last Name">
      </${Field}>
      <${Field} class="field" name="age">
        <label>Age</label>
        <input type="text" placeholder="Age">
      </${Field}>
      <div class="buttons">
        <button type="submit">Send</button>
        <button type="reset">Reset</button>
      </div>
    `;
  }
}
