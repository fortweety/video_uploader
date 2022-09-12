import { Controller } from "@hotwired/stimulus"
import React from "react";
import { createRoot } from "react-dom/client";
import App from "../components/app";
import actionCable from 'actioncable'

const CableApp = {}
CableApp.cable = actionCable.createConsumer('ws://localhost:3000/cable')
// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    const app = document.querySelector('#app');
    createRoot(app).render(<App cable={CableApp.cable} />)
  }
}
