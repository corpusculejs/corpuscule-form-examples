import {internal, render} from "@corpuscule/element";
import {api, outlet} from "@corpuscule/router";
import {element} from "./config";
import {routes} from "./routes";

@outlet(routes)
@element('ex-forms')
export default class Forms extends HTMLElement {
  @api @internal layout;

  [render]() {
    return this.layout;
  }
}
