import {createRouter} from '@corpuscule/router';
import RecordLevelForm from '../record-level-validation';
import SimpleForm from '../simple-form';
import {html} from './config';
import Default from './Default';

export const routes = [
  {
    action: () => html`<${Default}></${Default}>`,
    path: '',
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
];

export const router = createRouter(routes);
