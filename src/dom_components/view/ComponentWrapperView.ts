import Editor from '../../editor';
import Component from '../model/Component';
import ComponentView from './ComponentView';

export default class ComponentWrapperView extends ComponentView {
  tagName() {
    return 'div';
  }
  onRender(opts: { editor: Editor; model: Component; el: HTMLElement }): void {
    this.em.trigger('wrapperRendered');
  }
}
