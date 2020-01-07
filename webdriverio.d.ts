declare module WebdriverIO {
  interface Element {
    remove: () => void;
  }
  interface Browser {
    removeAsideElement: () => void;
  }
}