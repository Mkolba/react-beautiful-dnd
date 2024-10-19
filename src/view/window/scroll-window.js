// @flow
import { type Position } from 'css-box-model';
import bridge from "@vkontakte/vk-bridge";

// Not guarenteed to scroll by the entire amount
export default (change: Position): void => {
  bridge.send('VKWebAppScroll', {top: change.y}).then(data => {
    console.log(data)
  })
  window.scrollBy(change.x, change.y);
};
