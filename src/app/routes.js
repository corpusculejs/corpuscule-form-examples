import {createRouter} from '@corpuscule/router';
import FieldLevelForm from '../field-level-validation';
import RecordLevelForm from '../record-level-validation';
import SimpleForm from '../simple-form';
import {html} from './config';
import Default from './Default';

export const routes = [
  {
    action: () => html`<${Default} class="default"></${Default}>`,
    path: '/',
    link: 'Home',
  },
  {
    action: () => html`<${SimpleForm}></${SimpleForm}>`,
    path: '/simple-form',
    link: 'Simple Form',
  },
  {
    action: () => html`<${RecordLevelForm}></${RecordLevelForm}>`,
    path: '/record-level-validation',
    link: 'Record-Level Validation Form',
  },
  {
    action: () => html`<${FieldLevelForm}></${FieldLevelForm}>`,
    path: '/field-level-validation',
    link: 'Field-Level Validation Form',
  },
];

export const router = createRouter(routes);
