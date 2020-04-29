import { html } from "lit-html"
import { repeat } from "lit-html/directives/repeat"
import * as moment from "moment"

export default function stepsComponent(steps) {
  return html`
    ${steps
      ? html`
          <div class="font-bold text-xl text-gray-800">
            Steps
          </div>
          <ul>
            ${repeat(
              steps,
              (step) => step.id,
              (step, index) => html` <li>
                ${index}: ${moment(step.date).format("LTS")}
              </li>`
            )}
          </ul>
        `
      : html`On attend ...`}
  `
}
