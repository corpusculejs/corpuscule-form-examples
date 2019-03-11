import {internal, internalChangedCallback, render} from '@corpuscule/element';
import {api, form, option} from '@corpuscule/form';
import {element, html} from '../app/config';
import Field from './Field';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const required = value => (value ? undefined : 'Required');
const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined);
const minValue = min => value =>
  isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`;
const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

const age = composeValidators(required, mustBeNumber, minValue(18));

@form()
@element('ex3-form', {extends: 'form'})
export default class Form extends HTMLFormElement {
  @api formApi;
  @api @internal state;
  @option initialValues = {};

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
      <${Field} class="field" name="firstName" .validate="${required}">
        <label>First Name</label>
        <input type="text" placeholder="First Name">
      </${Field}>
      <${Field} class="field" name="lastName" .validate="${required}">
        <label>Last Name</label>
        <input type="text" placeholder="Last Name">
      </${Field}>
      <${Field} class="field" name="age" .validate="${age}">
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
