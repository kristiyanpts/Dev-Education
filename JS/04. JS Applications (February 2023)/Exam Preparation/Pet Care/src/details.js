import { deletePetById, getPetById } from "./api/pets.js";
import { donateToPet, getTotalDonation, getUserDonation } from "./donations.js";
import { html, nothing } from "./lib.js";

let detailsTemplate = (
  pet,
  user,
  isOwner,
  canDonate,
  onDelete,
  onDonate,
  donations
) => html`<section id="detailsPage">
  <div class="details">
    <div class="animalPic">
      <img src=${pet.image} />
    </div>
    <div>
      <div class="animalInfo">
        <h1>Name: ${pet.name}</h1>
        <h3>Breed: ${pet.breed}</h3>
        <h4>Age: ${pet.age}</h4>
        <h4>Weight: ${pet.weight}</h4>
        <h4 class="donation">Donation: ${donations}$</h4>
      </div>
      ${user != null
        ? html`<div class="actionBtn">
            ${isOwner
              ? html` <a href="/edit/${pet._id}" class="edit">Edit</a>
                  <a @click=${onDelete} href="javascript:void(0)" class="remove"
                    >Delete</a
                  >`
              : nothing}
            ${canDonate
              ? html`<a
                  @click=${onDonate}
                  href="javascript:void(0)"
                  class="donate"
                  >Donate</a
                >`
              : nothing}
          </div>`
        : nothing}
    </div>
  </div>
</section>`;

export async function showDetails(ctx) {
  let pet = await getPetById(ctx.params.id);
  let user = ctx.userData;
  let isOwner = !!user && pet._ownerId == user._id;
  let canDonate =
    !!user &&
    pet._ownerId != user._id &&
    (await getUserDonation(pet._id, user._id)) == 0;
  let donations = await getTotalDonation(pet._id);
  ctx.render(
    detailsTemplate(
      pet,
      user,
      isOwner,
      canDonate,
      onDelete,
      onDonate,
      donations * 100
    )
  );

  async function onDelete() {
    await deletePetById(pet._id);
    ctx.page.redirect("/");
  }

  async function onDonate() {
    donateToPet(pet._id);
    ctx.page.redirect("/details/" + pet._id);
  }
}
