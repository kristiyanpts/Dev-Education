import { getAllJobs } from "../api/jobs.js";
import { html } from "../lib.js";

let dashboardTemplate = (jobs) => html` <section id="dashboard">
  <h2>Job Offers</h2>

  ${jobs.length > 0 ? jobs.map(jobTemplate) : html`<h2>No offers yet.</h2>`}
</section>`;

let jobTemplate = (job) => html`<div class="offer">
  <img src=${job.imageUrl} alt="./images/example3.png" />
  <p><strong>Title: </strong><span class="title">${job.title}</span></p>
  <p><strong>Salary:</strong><span class="salary">${job.salary}</span></p>
  <a class="details-btn" href="/details/${job._id}">Details</a>
</div>`;

export async function showDashboard(ctx) {
  let jobs = await getAllJobs();
  console.log(jobs);
  ctx.render(dashboardTemplate(jobs));
}
