import {attribute} from '@corpuscule/element';
import {api, field, option} from '@corpuscule/form';
import {element} from '../app/config';

@field({auto: true})
@element('ex1-field', {lightDOM: true})
export default class Field extends HTMLElement {
  @api formApi;
  @api input;
  @api meta;

  @option @attribute('name', String) name;
}
