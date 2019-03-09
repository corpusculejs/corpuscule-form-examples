import {createRouter} from "@corpuscule/router";
import SimpleForm from "../simple-form";
import {html} from "./config";
import Default from "./Default";

export const routes = [
  {
    action: () => html`<${Default}></${Default}>`,
    path: '',
  },
  {
    action: () => html`<${SimpleForm}></${SimpleForm}>`,
    path: '/simple-form',
  },
  {
    action: () => html``,
    path: '/record-validate-form',
  }
];

export const router = createRouter(routes);
