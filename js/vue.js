const { ref, reactive } = Vue
const App = {
  setup() {
    // *shapes
    const shapes = reactive([
      {
        shape: "M66.3,-38.8C76.3,-21,68,6.7,53.9,28.6C39.9,50.4,19.9,66.3,-2.7,67.9C-25.3,69.5,-50.7,56.7,-61.6,36.7C-72.5,16.7,-68.9,-10.5,-56.3,-29.9C-43.6,-49.3,-21.8,-60.8,3.2,-62.6C28.2,-64.5,56.4,-56.6,66.3,-38.8Z",
        depth: 0.1,
      },
      {
        shape: "M66.4,-24.8C70.8,-8,48.6,14.1,25.4,29.7C2.3,45.3,-21.9,54.3,-36,45.1C-50.1,35.9,-54.3,8.4,-46.6,-12.8C-38.9,-34,-19.5,-49,5.8,-50.9C31,-52.7,62,-41.5,66.4,-24.8Z",
        depth: 0.5,
      },
      {
        shape: "M68.2,-29.6C73.5,-5.7,52.8,19.3,28.9,35.6C5.1,52,-22,59.8,-39.9,48.3C-57.7,36.9,-66.4,6.3,-58.2,-21.6C-50,-49.4,-25,-74.5,3.2,-75.6C31.4,-76.6,62.8,-53.6,68.2,-29.6Z",
        depth: 0.4,
      },
      {
        shape: "M46.3,-12.8C53.7,7.7,49,34.3,33.5,45.3C18,56.4,-8.2,51.9,-30.4,36.9C-52.7,21.9,-71,-3.5,-65.2,-21.8C-59.5,-40,-29.8,-51,-5.1,-49.3C19.5,-47.7,38.9,-33.3,46.3,-12.8Z",
        depth: 1,
      },
      {
        shape: "M45.9,-29.4C60,-19.1,72,0.1,68.1,14.9C64.2,29.8,44.4,40.3,24.6,49.2C4.8,58,-15,65.1,-30.4,59.2C-45.9,53.3,-57,34.4,-58.7,16.5C-60.3,-1.5,-52.5,-18.5,-41.1,-28.2C-29.7,-37.9,-14.9,-40.3,0.5,-40.7C16,-41.2,31.9,-39.7,45.9,-29.4Z",
        depth: 0.6,
      },
      {
        shape: "M34.9,25.3C21.6,43.2,-29.1,44.6,-41.1,27.4C-53.2,10.2,-26.6,-25.7,-1.2,-26.4C24.1,-27.1,48.2,7.3,34.9,25.3Z",
        depth: 0.7,
      },
      {
        shape: "M19.4,0.2C25.2,11.3,29.8,29.3,18.2,41.6C6.6,54,-21.1,60.6,-30.2,51.6C-39.3,42.6,-29.8,18,-21.7,3.6C-13.6,-10.9,-6.8,-15.1,0,-15.1C6.9,-15.1,13.7,-10.9,19.4,0.2Z",
        depth: 0.3,
      },
    ])
    // *cards data
    const data = reactive([
      {
        name: "宇德",
        img: "./img/personal/A.jp",
        text: "耶～～～\n親愛的俊昇兒(這樣叫會不會很奇怪😂)\n真的很開心你被按立成為區長，重點是你也很看重板橋旌旗未來的發展與規劃，可以感受到你認真為著神國度著想，你的心、你的財寶在天上！\n我也好阿們！\n\n能認識這樣的屬靈家人、夥伴，對我來說也是神極大的恩典，我們可以一起快跑跟隨神，還有一起拓殖教會、傳福音、牧養、或是各樣的服事與屬靈經歷，這些都好寶貴，好感謝神🥰\n也很謝謝你一路以來的牧養與陪伴，\n愛你啦～(抱一個)🙌",
        hasVoice: true,
        isPlay: false,
        voice: "./voice/A.m4a",
      },
      {
        name: "宗諭",
        img: "./img/personal/B.jp",
        text: "嘿嘿嘿嘿俊昇 區長耶怎麼那麼優秀 感謝你一路的陪伴 在我懷疑對神最沒信心時陪伴著我 不斷的眺望與激勵我 每次被講不甘不願但你說的事實哈哈哈 讓我不得不信 感謝你拉拔我回來 遇到你真的是太好了願主祝福你得人如得魚（看稿念好乾啊啊啊啊啊）《——這句也麻煩加進去哈哈",
        hasVoice: true,
        isPlay: false,
        voice: "./voice/B.m4a",
      },
      {
        name: "冠妤",
        img: "./img/personal/C.jp",
        text: "俊昇: \n恭喜你被按立成為區長了🤙\n我覺得你是一位值得信賴的領袖\n讓我可以真實的分享我的想法\n謝謝你和修寧常常關心我\n也和你們有很多很棒的交流\n我很喜歡跟你們聊天\n謝謝你們請我吃飯\n祝福板橋青年早日壯大💪\n「願他從聖所救助你，從錫安堅固你，\n記念你的一切供獻，悅納你的燔祭，\n將你心所願的賜給你，成就你的一切籌算。\n我們要因你的救恩誇勝，要奉我們神的名豎立旌旗。\n願耶和華成就你一切所求的！」\n-詩篇20:2-5",
        hasVoice: false,
        isPlay: false,
        voice: "",
      },
      {
        name: "慧真",
        img: "./img/personal/D.jp",
        text: "俊昇:\n很開心能夠看到你今天按立區長，一路走來，看見你的成長與改變、從單身進入到婚姻，很多的突破與經歷都能夠感受到神在你生命中所做的美善。\n\n你是何等的順服與謙卑，相信你的榜樣能夠為你帶來極大的祝福，你樂意成全你所帶領的人，也願意花時間和他們在一起，就好像耶穌在陪伴門徒一般。能夠成為你的小羊們實在太蒙福了。我能夠成為你的領袖也是太幸福啦!\n\n接下來要進入另外一個階段，也是新的挑戰開始，但我看見你是一個很有規劃與想法的領袖，相信你會帶領著眾多的社青、青少年們奔向神所為他們擺設的標竿。\n\n祝福你有從神而來的謀略與策略，有智慧與創意帶領團隊，不論你的屬靈屬世都蒙神的保守與祝福，你與修寧所擺上的，神必親自紀念。\n\n你會有挑望與傳承的能力，將你從神所領受的加倍傳承下去，會有優秀卓越的領袖從你而出，你是一個有極大影響力的男人，不僅僅影響你這個世代的男人也影響下個世代的青年!\n\n俊昇，我很榮幸可以成為你的領袖，也很感謝神有你在這個團隊當中。\n\n祝福俊昇區是個剛強榮耀、充滿喜樂創意、有神大能同在、合一愛神愛人、彼此尊榮、樂意傳揚福音、慷慨給予、豐盛富足的團隊!!!",
        hasVoice: true,
        isPlay: false,
        voice: "./voice/D.m4a",
      },
      {
        name: "柯柯",
        img: "./img/personal/E.jp",
        text: "哈囉俊昇～～\n恭喜你按立區長了！！！\n以後就真的是Jason區了😂\n我想告訴你 你真的是超棒的領袖！！！\n這一年多來看到你一直用為父的心(?)來照顧每一隻小羊，雖然\n有時候下也會偷生氣偷翻白眼，但還是很盡心盡力的愛著每一個\n小組員，我真的覺得在你身上看到一個真誠領袖的樣式🥺\n祝你繼續被神大大的使用和擴張，更多發揮你的恩賜，也帶祝福\n給更多的人～～～",
        hasVoice: false,
        isPlay: false,
        voice: "",
      },
      {
        name: "芷誼",
        img: "./img/personal/F.jp",
        text: "哈囉~~俊昇~\n恭喜成為區長大大了!!!\n謝謝你的親民和親切感\n讓我可以很自在地在小組裡自由地做自己\n也謝謝你帶著我回到那最初神所賜給我應許的地方\n目前想到的時候 還是會含著淚跟神說謝謝\n因為我不確定之後想到還會不會哭哈哈哈哈哈哈哈\n祝福你在生活、關係、職場、服事上，更多更多的經歷神的大能\n吸引更多的兒童、青年、社青、成人來快跑跟隨神 gogogo",
        hasVoice: true,
        isPlay: false,
        voice: "./voice/F.m4a",
      },
      {
        name: "照婷",
        img: "./img/personal/U.jp",
        text: "俊昇~\n恭喜你按立區長~\n你真的是很好的領袖，即便沒有參與過你的小組，\n也都還是能從大家的見證跟分享中感受到你對大家的愛與關懷！\n願神的奇妙恩典一直一直大大充滿你！",
        hasVoice: false,
        isPlay: false,
        voice: "",
      },
      {
        name: "承恩",
        img: "./img/personal/G.jp",
        text: "俊昇!!! 恭喜你升區長了，超為你開心的!你真的是很好的領袖與屬靈夥伴，謝謝你之前陪伴我屬靈生命的成長。與你一起同工，會覺得火熱很有盼望，還有會想繼續一起更多追尋神的國! 願神大大祝福你的生命、健康、教會事工與職涯，你出你入必有耶和華的恩惠慈愛隨著你，宣告屬天的智慧日日也與俊昇同在。迫不及待要看到神使用俊昇帶領板橋經歷更多屬靈的突破!!  (Fire~!! I mean 聖靈的火~!)",
        hasVoice: true,
        isPlay: false,
        voice: "./voice/G.m4a",
      },
      {
        name: "修寧",
        img: "./img/personal/I.jp",
        text: "按立區長了！！！！\n以前都會想很多關於未來的樣子，沒想到這麼快你就按立區長了，一直以來你都很願意不斷地破碎自己，在每一個選擇上即便感受很差、很挫折、很沮喪但你最後的最後都還是選擇了耶穌，好難卻好值得，謝謝你讓我能夠參與在你成長和改變的過程，好喜歡我們一起經歷神、一起快樂唱歌、一起想要吵架但不小心笑出來的樣子，謝謝你讓神的愛充滿在我們之間，謝謝你成為一個美好的榜樣，你是一個好牧羊人，忠心服事神的好管家，區長可能不會太好當但神的恩典總是夠的，這個坑已經入太深ㄌ未來沒有回頭路那只好一起繼續再更破碎一點了，期待我們的未來被神的同在充滿鴨🦆愛你鴨鴨鴨🦆",
        hasVoice: true,
        isPlay: false,
        voice: "./voice/I.mp3",
      },
      {
        name: "勝耀",
        img: "./img/personal/T.jp",
        text: "Hi~ 俊昇 恭喜你成為區長\n相信更高的位份，神更多的恩惠也要加添給你\n多產，倍增，掌權也多又更多\n期待著未來的路上更多的經歷神的同在也更多經歷神美好的作為\n也透過你的帶領有更多的小羊進前來認識主耶穌\n也透過你的帶領每個人都得以長大成熟早就更多領袖\n更多的依靠神，相信神給你的是更大的\n\n詩篇44:3	因為他們不是靠自己的刀劍得地土，也不是靠自己的\n膀臂得勝，乃是靠你的右手、你的膀臂，和你臉上的亮光，因為\n你喜悅他們。",
        hasVoice: false,
        isPlay: false,
        voice: "",
      },
      {
        name: "Jimmy",
        img: "./img/personal/J.jp",
        text: "我真心的感謝神為我預備了你這個屬靈的好夥伴，看到你如此的優秀，卻盡可能的謙卑，我真心覺得感動，如果就像修哥所說的，神正在找一個身體可以讓他來使用，我想你絕對是前面排隊的那幾個人，一想到這裡，我又是滿心的感動，從認識你到現在，看到神在你身上做了那麼多極大極美好的工作，而你也毫不吝嗇地把神給你的祝福分享給你身邊的人，我真的無法想像神未來在你身上還會有多美好的事情會發生在你的身上，我滿心期盼的想要看見神的榮耀如何在你的身上被彰顯無遺，你是這個世代的祝福，毫無疑問！",
        hasVoice: false,
        isPlay: false,
        voice: "",
      },
      {
        name: "士杰",
        img: "./img/personal/S.jp",
        text: "俊昇恭喜你榮升區長：在旌旗教會的這段日子，很高興認識你，也謝謝你給我這麼多的回饋，也願意用心牧養我，也求主保守未來在你持守神給你的命定的道路上，滿有主的恩典與同在！",
        hasVoice: false,
        isPlay: false,
        voice: "",
      },
      {
        name: "宇翔",
        img: "./img/personal/N.jp",
        text: "俊昇，未來板橋牧師換你接棒👍",
        hasVoice: false,
        isPlay: false,
        voice: "",
      },
      {
        name: "于瑄",
        img: "./img/personal/L.jp",
        text: "親愛的學長（奪早期的稱呼）超級感謝神讓我更多的認識你們，還記得人生第一次參加旌旗受洗典禮就是你的，也是我第一次領受聖餐。在那時就有很深的感動，於是在後來我也受洗了！感謝神，去板橋的日子每一次都像回家，從最早的兩年前。原來神已經鋪路惹！謝謝耶穌使你跟修寧成為我們美好的榜樣跟見證！在你們的生命中看見神的榮耀與恩典～祝福你成為區長更豐盛更喜樂🥳",
        hasVoice: false,
        isPlay: false,
        voice: "",
      },
      {
        name: "百恩",
        img: "./img/personal/Q.jp",
        text: "俊昇大哥，謝謝你的照顧，我剛來到小組時你用了一餐烤肉得到了我的尊敬！哈哈哈哈哈😂好像有點太誇張，不過對於當時候絕望的我來說，能夠對陌生的你講出我最深的故事對我來說是一個很大的釋放，謝謝你的陪伴～還逼我把寶貴的照片刪掉！(!)當下是很難的決定，但現在想那絕對是一個好的開始，你常常教導我要用行動去回應我的信心，不要只是想！！這個我會好好記得的～但我要偷偷跟你講我真的不是一個容易順服的人，但你的品格跟行為真的贏得了我尊敬！我願意好好順服你這個區長👍！可惡～～～我要女朋友",
        hasVoice: false,
        isPlay: false,
        voice: "",
      },
      {
        name: "雅暄",
        img: "./img/personal/M.jp",
        text: "神最愛的寶貝 俊昇兒子\n恭喜你~~~~~!\n按立區長\n相信神在你身上安排好一切，\n就是帶給更多人喜悅及愛神的先峰\n讓你播下愛的種子，\n在每一個不認識神的心中\n神喜悅之事  就是讓祂的子女們能彼此相愛扶持，\n祂\n恭喜你!!!!!🎉🎉🎉🎉🎉",
        hasVoice: false,
        isPlay: false,
        voice: "",
      },
      {
        name: "阿龍",
        img: "./img/personal/O.jp",
        text: "親愛的屬靈母親俊昇，感謝您在我重新回到主懷抱時，擔任我的老師、教導我如何調整自己更像神的眼光，也用自己的故事幫助我看見無論在經濟上或感情上一直都有神的智慧與同在。特別特別想感謝您愛著我的家人，小璇、暄、魚和高高，額外花了許多時間與精力在幫助他們了解神的慈愛及恩典，在這個非常重要的日子，恭喜你被按立成為區長，更多的祝福將透過你帶到更多人的生命中，祝福你持續在神的愛中被建造、更新、修剪，將一切榮耀都歸給神🙂",
        hasVoice: false,
        isPlay: false,
        voice: "",
      },
      {
        name: "德慧",
        img: "./img/personal/P.jp",
        text: "俊昇媽咪恭喜妳更成長茁壯了！",
        hasVoice: false,
        isPlay: false,
        voice: "",
      },
      {
        name: "鈞超",
        img: "./img/personal/V.jp",
        text: "俊昇辛苦了🤭",
        hasVoice: false,
        isPlay: false,
        voice: "",
      },
      {
        name: "阿復",
        img: "./img/personal/K.jp",
        text: `親愛的俊昇 謝謝你一直都給我很多很多祝福與關心 在你的身上感受到許多從神而來的樣子 謝謝你成為我們榜樣。我在這祝福你 你要得到更多更多恩寵 恭喜你成為我們區長`,
        hasVoice: false,
        isPlay: false,
        voice: "",
      },
      {
        name: "峻瑋",
        img: "./img/personal/R.jp",
        text: "俊昇~恭喜按立區長!\n相信這是個需要付上代價的選擇，真的很佩服你的勇氣，也看見你願意將自己的生命交給神，真D超感動Der~\n\n雖然一月到四月和你同小組的次數不多，但每次見面都能感受到你的用心與愛。\n\n我很珍惜每次跟你談話的機會，在每次的談話中總感受到你有顆願意傾聽的心~\n\n雖然未來不能一起在大台北地區服事，但我們仍然會一起服事神(因為我們都在祂的國度哈哈哈哈)\n\n恭喜按立~",
        hasVoice: false,
        isPlay: false,
        voice: "",
      },
    ])

    // *voice
    let speak = new Audio
    let lastSpeakIdx
    const voice = (idx) => {
      if (!data[idx].hasVoice) return

      // *獲取來源
      speak.src = data[idx].voice

      // *播放 / 結束 icon
      // console.log(data[idx].isPlay)
      // 該個 idx 更換 icon
      data[idx].isPlay = !data[idx].isPlay
      // 上個 idx 更換 icon
      if (idx !== lastSpeakIdx && lastSpeakIdx !== undefined) {
        data[lastSpeakIdx].isPlay = !data[lastSpeakIdx].isPlay
      }

      // *紀錄上個音檔 idx
      // console.log(lastSpeakIdx)
      lastSpeakIdx = idx

      // *播放
      if (data[idx].isPlay) {
        speak.play()
        return
      }
      // *暫停
      speak.pause()
    }

    // *點同一個圖文轉換的 bug fix -> 避免點自己聲音被關閉
    const voiceStart = (idx) => {
      if (data[idx].isPlay) return
      voice(idx)
    }

    return {
      data,
      shapes,
      voice,
      voiceStart
    }
  }
}
Vue.createApp(App).mount("#app")