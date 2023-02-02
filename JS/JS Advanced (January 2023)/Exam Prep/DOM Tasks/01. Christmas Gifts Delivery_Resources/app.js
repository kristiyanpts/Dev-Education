function solution() {
  let gift = document.getElementsByTagName("input")[0];
  let buttonAdd = document.getElementsByTagName("button")[0];
  let [giftsList, giftsSent, giftsDiscarded] = Array.from(
    document.getElementsByTagName("ul")
  );

  buttonAdd.addEventListener("click", AddGift);

  function AddGift() {
    let newGift = gift.value;

    if (newGift == "") {
      return;
    }

    let li = document.createElement("li");
    li.setAttribute("class", "gift");
    li.innerHTML = `${newGift}`;
    let buttonSend = document.createElement("button");
    buttonSend.setAttribute("class", "sendButton");
    buttonSend.textContent = "Send";
    let buttonDiscard = document.createElement("button");
    buttonDiscard.setAttribute("class", "discardButton");
    buttonDiscard.textContent = "Discard";
    buttonSend.addEventListener("click", SendGift);
    buttonDiscard.addEventListener("click", DiscardGift);
    li.appendChild(buttonSend);
    li.appendChild(buttonDiscard);
    giftsList.appendChild(li);
    gift.value = "";
    SortList();

    function SendGift() {
      li.remove();
      buttonSend.remove();
      buttonDiscard.remove();
      giftsSent.appendChild(li);
    }

    function DiscardGift() {
      li.remove();
      buttonSend.remove();
      buttonDiscard.remove();
      giftsDiscarded.appendChild(li);
    }

    function SortList() {
      var list, i, switching, b, shouldSwitch;
      list = giftsList;
      switching = true;
      while (switching) {
        switching = false;
        b = list.getElementsByTagName("LI");
        for (i = 0; i < b.length - 1; i++) {
          shouldSwitch = false;
          if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
        if (shouldSwitch) {
          b[i].parentNode.insertBefore(b[i + 1], b[i]);
          switching = true;
        }
      }
    }
  }
}
