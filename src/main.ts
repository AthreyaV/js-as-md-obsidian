import { Plugin } from 'obsidian';

export default class JsAsMdPlugin extends Plugin {

  async onload() {
    super.onload();

    // register the view and extensions
    this.registerExtensions(["js"], "markdown");
  }
}
