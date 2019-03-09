import {render} from '@corpuscule/element';
import {api, provider as routerProvider} from '@corpuscule/router';
import styles from '@corpuscule/styles';
import appStyles from './app.css';
import {element, html} from './config';
import Forms from './Forms';
import Links from './Links';
import {router} from './routes';

@routerProvider
@styles(appStyles)
@element('ex-app')
export default class ExampleApp extends HTMLElement {
  @api router = router;

  [render]() {
    return html`
      <${Links} class="links"></${Links}>
      <${Forms} class="forms"></${Forms}>
    `;
  }
}
