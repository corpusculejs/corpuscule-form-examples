import {render} from "@corpuscule/element";
import {element} from "./config";

@element('ex-default', {lightDOM: true})
export default class Default extends HTMLElement {
  [render]() {
    return 'Select the form example you would like to see';
  }
}
