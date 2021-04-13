const cards = document.querySelectorAll(".card")
const names = document.querySelectorAll(".name")

// *hover card
cards.forEach((card, idx) => {
  // 名字出現
  card.onmouseover = () => {
    names[idx].classList.remove("none")
  }
  card.onmouseout = () => {
    names[idx].classList.add("none")
  }
})