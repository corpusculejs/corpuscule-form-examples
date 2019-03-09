import {internal, render} from '@corpuscule/element';
import {api, outlet} from '@corpuscule/router';
import styles from '@corpuscule/styles';
import {element, html} from './config';
import linksStyles from './links.css';
import {routes} from './routes';

@element('ex-links')
@outlet(routes)
@styles(linksStyles)
export default class Links extends HTMLElement {
  static urls = {
    simple: '/simple-form',
    recordValidate: '/record-validate-form',
  };

  @api @internal layout;

  getActiveClass(url) {
    return location.pathname === url ? 'active' : '';
  }

  [render]() {
    const {urls} = this.constructor;

    return html`
      <ul>
        <li class="${this.getActiveClass(urls.simple)}">
          <a is="corpuscule-link" href="${urls.simple}">Simple Form</a>
        </li>
        <li class="${this.getActiveClass(urls.recordValidate)}">
          <a is="corpuscule-link" href="${urls.recordValidate}">Record-Level Validation Form</a>
        </li>
      </ul>
    `;
  }
}
