import { render as _render } from 'react-dom';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

export const ui     = observer
export const state  = observable
export const render = (component) => {
  _render(component, document.getElementById('root'))
}