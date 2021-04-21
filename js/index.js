const cards = document.querySelectorAll(".card")
const cardFronts = document.querySelectorAll(".card-front")
const imgs = document.querySelectorAll(".card-img")
const names = document.querySelectorAll(".name")
const contents = document.querySelectorAll(".card-content")
const backs = document.querySelectorAll(".back")

// *card 
cards.forEach((card, idx) => {
  let isObserve = false
  let target
  let imgHeight
  let toggleHeight = 0

  // *hover 名字出現
  const hoverCard = () => {
    if (window.innerWidth > 1024) {
      imgs[idx].onmouseover = () => {
        names[idx].classList.remove("none")
      }
      imgs[idx].onmouseout = () => {
        names[idx].classList.add("none")
      }
    } else {
      imgs[idx].onmouseover = () => {
        return
      }
    }
  }
  hoverCard()

  // *監聽大小變化
  const toggleObserver = new ResizeObserver(() => {
    // hover 隨螢幕大小變化
    hoverCard()

    if (isObserve) {
      // 已打開，所以可以直接抓取 content 內的高度
      if (target === "text") {
        toggleHeight = contents[idx].scrollHeight
        card.style.height = `${toggleHeight}px`
        // console.log(`auto1:${toggleHeight}`)
        return
      }
      if (target === "img") {
        toggleHeight = cardFronts[idx].scrollHeight
        card.style.height = `${toggleHeight}px`
        // console.log(`auto1:${toggleHeight}`)
      }
    }
  })
  toggleObserver.observe(card)

  // *click 圖片
  cardFronts[idx].onclick = () => {
    // 紀錄圖片高度
    imgHeight = imgs[idx].scrollHeight

    // 封面消失
    cardFronts[idx].classList.add("none")

    // 文字出現
    contents[idx].classList.remove("none")

    // 自適高度
    isObserve = true
    target = "text"
    toggleHeight = 0
    card.style.height = `${toggleHeight}px`
  }

  // *back
  backs[idx].onclick = () => {
    // 圖片回來
    // console.log(`imgHeight：${imgHeight}`);
    cardFronts[idx].classList.remove("none")

    // 內容消失
    contents[idx].classList.add("none")

    // card-img height
    isObserve = true
    target = "img"
    card.style.height = `${imgHeight}px`
  }
})