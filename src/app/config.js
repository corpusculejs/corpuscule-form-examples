import {createElementDecorator} from '@corpuscule/element';
import renderer from '@corpuscule/lit-html-renderer';
import withCustomElement from '@corpuscule/lit-html-renderer/lib/withCustomElement';
import {html as litHtml} from 'lit-html';

export const element = createElementDecorator({renderer});
export const html = withCustomElement(litHtml);
