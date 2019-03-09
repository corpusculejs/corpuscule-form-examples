import {internal, render} from "@corpuscule/element";
import styles from "@corpuscule/styles";
import appStyles from "./simple-form.css";
import {element, html} from "../app/config";
import Form from "./Form";

@element("ex1-simple-form")
@styles(appStyles)
export default class SimpleForm extends HTMLElement {
  @internal formState = {};

  handleFormStateChange({detail: formState}) {
    this.formState = formState;
  }

  [render]() {
    return html`
      <form
        is="${Form}"
        @form-state-changed=${this.handleFormStateChange}
      ></form>
      <section class="display-form">
        <pre>${JSON.stringify(this.formState.values, null, 2)}</pre>
      </section>
    `;
  }
}
