import {internal, render} from '@corpuscule/element';
import {api, Link, outlet} from '@corpuscule/router';
import styles from '@corpuscule/styles';
import {repeat} from 'lit-html/directives/repeat';
import {element, html} from './config';
import linksStyles from './links.css';
import {routes} from './routes';

@element('ex-links')
@outlet(routes)
@styles(linksStyles)
export default class Links extends HTMLElement {
  @api @internal layout;

  [render]() {
    return html`
      <ul>
        ${repeat(routes, route => route.path, ({link, path}) => html`
          <li class="${location.pathname === path ? 'active' : ''}">
            <a is="${Link}" href="${path}">${link}</a>
          </li>
        `)}
      </ul>
    `;
  }
}
