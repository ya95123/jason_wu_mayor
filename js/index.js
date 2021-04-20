const cards = document.querySelectorAll(".card")
const cardFronts = document.querySelectorAll(".card-front")
const imgs = document.querySelectorAll(".card-img")
const names = document.querySelectorAll(".name")
const contents = document.querySelectorAll(".card-content")
const backs = document.querySelectorAll(".back")

// *card 
cards.forEach((card, idx) => {
  let isObserve = false
  let imgHeight
  let toggleHeight = card.scrollHeight

  // *hover 名字出現
  // if (window.innerWidth > 1024) {
  imgs[idx].onmouseover = () => {
    names[idx].classList.remove("none")
  }
  imgs[idx].onmouseout = () => {
    names[idx].classList.add("none")
  }
  // }

  // *監聽卡片變化
  const toggleObserver = new ResizeObserver(() => {
    if (isObserve) {
      // 已打開，所以可以直接抓取 content 內的高度
      toggleHeight = card.scrollHeight

      // 判斷擴張還是縮小
      // toggleHeight > imgHeight? card.style.height = `${toggleHeight}px`

      console.log(`auto：${toggleHeight}`);
      card.style.height = `${toggleHeight}px`
    }
  })
  toggleObserver.observe(card)

  // *click 圖片
  cardFronts[idx].onclick = () => {
    // 紀錄圖片高度
    imgHeight = card.scrollHeight

    // 封面消失
    cardFronts[idx].classList.add("none")

    // 文字出現
    contents[idx].classList.remove("none")

    // 自適高度
    isObserve = true
    toggleHeight = 0
    card.style.height = `0px`

    // console.log(`click：${toggleHeight}`);
    // card.style.height = `${toggleHeight}px`
  }

  // *back
  backs[idx].onclick = () => {
    // 圖片回來
    console.log(`imgHeight：${imgHeight}`);
    // cardFronts[idx].classList.remove("hide-front")
    cardFronts[idx].classList.remove("none")

    // 內容消失
    contents[idx].classList.add("none")

    // card
    // isOpen = false
    // toggleHeight = 0
    card.style.height = `0px`

    // card.style.height = `${imgHeight}px`
  }
})