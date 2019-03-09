import {internal, render} from '@corpuscule/element';
import {api, Link, outlet} from '@corpuscule/router';
import styles from '@corpuscule/styles';
import {element, html} from './config';
import linksStyles from './links.css';
import {routes} from './routes';

const activate = url => {
  return location.pathname === url ? 'active' : '';
};

@element('ex-links')
@outlet(routes)
@styles(linksStyles)
export default class Links extends HTMLElement {
  static urls = {
    simple: '/simple-form',
    recordValidate: '/record-validate-form',
  };

  @api @internal layout;

  [render]() {
    const {urls} = this.constructor;

    return html`
      <ul>
        <li class="${activate(urls.simple)}">
          <a is="${Link}" href="${urls.simple}">Simple Form</a>
        </li>
        <li class="${activate(urls.recordValidate)}">
          <a is="${Link}" href="${urls.recordValidate}">Record-Level Validation Form</a>
        </li>
      </ul>
    `;
  }
}
