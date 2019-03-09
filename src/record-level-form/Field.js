import {attribute, internal, render} from '@corpuscule/element';
import {api, field, option} from '@corpuscule/form';
import styles from '@corpuscule/styles';
import {html, nothing} from 'lit-html';
import {element} from '../app/config';
import fieldStyles from './field.css';

@field({auto: true})
@styles(fieldStyles)
@element('ex2-field')
export default class Field extends HTMLElement {
  @api formApi;
  @api input;
  @api @internal meta;

  @option @attribute('name', String) name;

  [render]() {
    const {error, touched} = this.meta;

    return html`
      <slot></slot>
      ${touched && error
        ? html`
            <div class="error">${error}</div>
          `
        : nothing}
    `;
  }
}
