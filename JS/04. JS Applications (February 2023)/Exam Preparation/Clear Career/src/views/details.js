import {
  deleteJobById,
  getJobById,
  getJobApplications,
  getUserJobApplications,
  applyForJob,
} from "../api/jobs.js";
import { html } from "../lib.js";
import { getUserData } from "../utils.js";

let detailsTemplate = (job, onDelete, onApply) => html`<section id="details">
  <div id="details-wrapper">
    <img id="details-img" src=${job.imageUrl} alt="example1" />
    <p id="details-title">${job.title}</p>
    <p id="details-category">
      Category: <span id="categories">${job.category}</span>
    </p>
    <p id="details-salary">
      Salary: <span id="salary-number">${job.salary}</span>
    </p>
    <div id="info-wrapper">
      <div id="details-description">
        <h4>Description</h4>
        <span>${job.description}</span>
      </div>
      <div id="details-requirements">
        <h4>Requirements</h4>
        <span>${job.requirements}</span>
      </div>
    </div>
    <p>
      Applications: <strong id="applications">${job.totalApplications}</strong>
    </p>

    ${job.canPerformAction || job.canApply
      ? html` <div id="action-buttons">
          ${job.canPerformAction
            ? html`<a href="/edit/${job._id}" id="edit-btn">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" id="delete-btn"
                  >Delete</a
                >`
            : null}
          ${job.canApply
            ? html`<a @click=${onApply} href="javascript:void(0)" id="apply-btn"
                >Apply</a
              >`
            : null}
        </div>`
      : null}
  </div>
</section>`;

export async function showDetails(ctx) {
  let jobId = ctx.params.id;
  let user = getUserData();
  let jobApplications = await getJobApplications(jobId);
  let userJobApplication = await getUserJobApplications(jobId, user._id);
  let job = await getJobById(jobId);

  job.canPerformAction = user && user._id == job._ownerId;
  job.canApply = user && !job.canPerformAction && userJobApplication == 0;
  job.totalApplications = jobApplications;
  ctx.render(detailsTemplate(job, onDelete, onApply));

  async function onDelete() {
    let deletePost = confirm("Are you sure you want to delete?");
    if (deletePost) {
      await deleteJobById(jobId);
      ctx.page.redirect("/dashboard");
    }
  }

  async function onApply() {
    await applyForJob(jobId);
    ctx.page.redirect("/details/" + jobId);
  }
}
