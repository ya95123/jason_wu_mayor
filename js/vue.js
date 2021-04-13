const { ref, reactive, nextTick } = Vue
const App = {
  setup() {
    // shapes
    const shapes = reactive([
      {
        shape: "M66.3,-38.8C76.3,-21,68,6.7,53.9,28.6C39.9,50.4,19.9,66.3,-2.7,67.9C-25.3,69.5,-50.7,56.7,-61.6,36.7C-72.5,16.7,-68.9,-10.5,-56.3,-29.9C-43.6,-49.3,-21.8,-60.8,3.2,-62.6C28.2,-64.5,56.4,-56.6,66.3,-38.8Z"
      },
      {
        shape: "M66.4,-24.8C70.8,-8,48.6,14.1,25.4,29.7C2.3,45.3,-21.9,54.3,-36,45.1C-50.1,35.9,-54.3,8.4,-46.6,-12.8C-38.9,-34,-19.5,-49,5.8,-50.9C31,-52.7,62,-41.5,66.4,-24.8Z"
      },
      {
        shape: "M68.2,-29.6C73.5,-5.7,52.8,19.3,28.9,35.6C5.1,52,-22,59.8,-39.9,48.3C-57.7,36.9,-66.4,6.3,-58.2,-21.6C-50,-49.4,-25,-74.5,3.2,-75.6C31.4,-76.6,62.8,-53.6,68.2,-29.6Z"
      },
      {
        shape: "M46.3,-12.8C53.7,7.7,49,34.3,33.5,45.3C18,56.4,-8.2,51.9,-30.4,36.9C-52.7,21.9,-71,-3.5,-65.2,-21.8C-59.5,-40,-29.8,-51,-5.1,-49.3C19.5,-47.7,38.9,-33.3,46.3,-12.8Z"
      },
      {
        shape: "M45.9,-29.4C60,-19.1,72,0.1,68.1,14.9C64.2,29.8,44.4,40.3,24.6,49.2C4.8,58,-15,65.1,-30.4,59.2C-45.9,53.3,-57,34.4,-58.7,16.5C-60.3,-1.5,-52.5,-18.5,-41.1,-28.2C-29.7,-37.9,-14.9,-40.3,0.5,-40.7C16,-41.2,31.9,-39.7,45.9,-29.4Z"
      },
      {
        shape: "M34.9,25.3C21.6,43.2,-29.1,44.6,-41.1,27.4C-53.2,10.2,-26.6,-25.7,-1.2,-26.4C24.1,-27.1,48.2,7.3,34.9,25.3Z"
      },
      {
        shape: "M19.4,0.2C25.2,11.3,29.8,29.3,18.2,41.6C6.6,54,-21.1,60.6,-30.2,51.6C-39.3,42.6,-29.8,18,-21.7,3.6C-13.6,-10.9,-6.8,-15.1,0,-15.1C6.9,-15.1,13.7,-10.9,19.4,0.2Z"
      },
    ])
    // cards data
    const data = reactive([
      {
        name: "A",
        img: "https://picsum.photos/800/1440/?random=1",
        text: "檔案對手一陣恢復模樣彷彿文學一名鐵路，因而那個發出他還第一難以成就表情登陸遺憾，一項距離害怕原則汽車舉辦期待智能，自己的主要看過發表事務一時有效我市偉大根據如有，大賽到了下載地址指南土地同學十年順利適應將軍，還可以始終推坑王，由於而已建設教育於是笑着運行材料，留言板網易整個動力，靈活再說明星就會規模大家行動允許不要也可劇情遠程評分科技有限公司，激烈進口給你儘管藝術高校萬華定位三人居然查看財產降價結合，大連如有輔助注重閲讀意外自身持續，原來情人上帝姑娘論壇相同醫生所需生物明年大眾等級時候各自，說是幫你經營許可證，自然能源現實疾病演出必須進去，並在只要，我。",
        hasVoice: true,
        voice: ""
      },
      {
        name: "B",
        img: "https://picsum.photos/1920/1080/?random=1",
        text: "",
        hasVoice: false,
        voice: ""
      },
      {
        name: "C",
        img: "https://picsum.photos/1440/768/?random=1",
        text: "",
        hasVoice: false,
        voice: ""
      },
      {
        name: "D",
        img: "https://picsum.photos/1920/1080/?random=2",
        text: "",
        hasVoice: false,
        voice: ""
      },
      {
        name: "E",
        img: "https://picsum.photos/1080/768/?random=2",
        text: "",
        hasVoice: false,
        voice: ""
      },
      {
        name: "F",
        img: "https://picsum.photos/768/1440/?random=1",
        text: "",
        hasVoice: false,
        voice: ""
      },
      {
        name: "G",
        img: "https://picsum.photos/1080/1920?random=1",
        text: "",
        hasVoice: false,
        voice: ""
      }
    ])

    // 渲染完
    nextTick(() => {
      const cards = document.querySelectorAll(".card")
      const imgs = document.querySelectorAll(".card-img")
      const names = document.querySelectorAll(".name")

      // *card 
      cards.forEach((card, idx) => {
        let nameShow = true

        // *click 圖片消失
        card.onclick = () => {
          imgs[idx].classList.add("hide")
          nameShow = false
        }

        // *hover 名字出現
        card.onmouseover = () => {
          if (!nameShow) return
          names[idx].classList.remove("none")
        }
        card.onmouseout = () => {
          names[idx].classList.add("none")
        }
      })
    })

    return {
      data,
      shapes,
    }
  }
}
Vue.createApp(App).mount("#app")