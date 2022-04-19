import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";

export class Okra {
  constructor() {
    this.root = this.createRoot();
  }
  open(options = {}) {
    this.root.render(<App options={options} />);
  }

  createRoot() {
    let createContainer = () => {
      let id = "okra-root";
      let element = document.getElementById(id);
      if (element) {
        element.innerHTML = ``;
        return element;
      }
      element = document.createElement("div");
      element.setAttribute("id", id);
      document.body.appendChild(element);
      return element;
    };

    let container = createContainer();

    return createRoot(container);
  }
}

export default {
  create: Okra,
};
