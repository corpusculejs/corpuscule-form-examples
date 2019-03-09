import {internal, render} from '@corpuscule/element';
import styles from '@corpuscule/styles';
import {element, html} from '../app/config';
import recordLevelFormStyles from './record-level-form.css';
import Form from './Form';

@element('ex2-record-level-form')
@styles(recordLevelFormStyles)
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
