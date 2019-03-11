import {internal, render} from '@corpuscule/element';
import styles from '@corpuscule/styles';
import {element, html} from '../app/config';
import commonFormStyles from '../styles/common-form.css';
import Form from './Form';

@element('ex3-field-level-validation-form')
@styles(commonFormStyles)
export default class RecordLevelForm extends HTMLElement {
  @internal formState = {};

  handleFormStateChange({detail: formState}) {
    this.formState = formState;
  }

  [render]() {
    return html`
      <form is="${Form}" @form-state-changed="${this.handleFormStateChange}"></form>
      <section class="display-form">
        <pre>${JSON.stringify(this.formState.values, null, 2)}</pre>
      </section>
    `;
  }
}
