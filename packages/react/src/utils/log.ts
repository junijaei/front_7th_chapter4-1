/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    __spyCalls: any[];
    __spyCallsClear: () => void;
  }
}

window.__spyCalls = [];
window.__spyCallsClear = () => {
  window.__spyCalls = [];
};

export const log: typeof console.log = (...args) => {
  window.__spyCalls.push(args);
  return console.log(...args);
};
