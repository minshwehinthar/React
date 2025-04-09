"use client"

import { useState } from "react"
import { Heart } from "lucide-react"

export default function MyanmarHeartExpression() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [heartCount, setHeartCount] = useState(0)
  const [floatingHearts, setFloatingHearts] = useState([])

  // Myanmar love expressions using ကိုကို (Ko Ko) for "I/me" and မီးးလေး (Mee Lay) for "she/her"
  const myanmarLoveTexts = [
    {
      myanmar: "ကိုကိုရဲ့ နှလုံးသားထဲမှာ မီးးလေးအတွက် နေရာတစ်ခု အမြဲရှိပါတယ်",
      english: "There is always a place for Mee Lay in Ko Ko's heart",
    },
    {
      myanmar: "မီးးလေးကို တွေ့တိုင်း ကိုကိုရဲ့နှလုံးသား ခုန်နေပါတယ်",
      english: "Ko Ko's heart beats faster whenever I see Mee Lay",
    },
    {
      myanmar: "မီးးလေးရဲ့အပြုံးက ကိုကိုရဲ့နေ့ရက်တွေကို လှပစေပါတယ်",
      english: "Mee Lay's smile makes Ko Ko's days beautiful",
    },
    {
      myanmar: "မီးးလေးကို ချစ်တာ ကမ္ဘာကြီးထက် ကျယ်ပါတယ်",
      english: "Ko Ko's love for Mee Lay is bigger than the universe",
    },
    {
      myanmar: "မီးးလေးသည် ကိုကိုဘဝရဲ့ အလင်းရောင်ဖြစ်ပါတယ်",
      english: "Mee Lay is the light of Ko Ko's life",
    },
    {
      myanmar: "မီးးလေးကို တွေ့ရတိုင်း ကိုကို ပျော်ရွှင်မိပါတယ်",
      english: "Ko Ko feels happy whenever I see Mee Lay",
    },
    {
      myanmar: "မီးးလေးကို ကိုကို အမြဲသတိရနေပါတယ်",
      english: "Ko Ko is always thinking of Mee Lay",
    },
    {
      myanmar: "မီးးလေးရဲ့ အပြုံးက ကိုကိုရဲ့ နေ့ရက်တွေကို လှပစေပါတယ်",
      english: "Mee Lay's smile makes Ko Ko's days beautiful",
    },
    {
      myanmar: "မီးးလေးရဲ့ မျက်လုံးတွေက ကိုကိုရဲ့ နှလုံးသားကို ဖမ်းစားထားပါတယ်",
      english: "Mee Lay's eyes have captusky Ko Ko's heart",
    },
    {
      myanmar: "မီးးလေးနဲ့အတူ ကိုကို ဘဝတစ်ခုလုံး လျှောက်လှမ်းချင်ပါတယ်",
      english: "Ko Ko wants to walk through life with Mee Lay",
    },
    {
      myanmar: "မီးးလေးရဲ့ အသံက ကိုကိုအတွက် အချစ်ဂီတပါ",
      english: "Mee Lay's voice is love music to Ko Ko",
    },
    {
      myanmar: "ကိုကိုရဲ့ အိပ်မက်တွေထဲမှာ မီးးလေး အမြဲရှိနေပါတယ်",
      english: "Mee Lay is always in Ko Ko's dreams",
    },
    {
      myanmar: "မီးးလေးမရှိရင် ကိုကိုရဲ့ ကမ္ဘာကြီး အမှောင်ထုဖြစ်သွားမှာပါ",
      english: "Without Mee Lay, Ko Ko's world would be darkness",
    },
    {
      myanmar: "မီးးလေးရဲ့ ချစ်ခြင်းမေတ္တာက ကိုကိုရဲ့ အားအင်ပါ",
      english: "Mee Lay's love is Ko Ko's strength",
    },
    {
      myanmar: "မီးးလေးအတွက် ကိုကို ဘာမဆို လုပ်ပေးမှာပါ",
      english: "Ko Ko would do anything for Mee Lay",
    },
    {
      myanmar: "မီးးလေးရဲ့ ပျော်ရွှင်မှုက ကိုကိုရဲ့ ပျော်ရွှင်မှုပါ",
      english: "Mee Lay's happiness is Ko Ko's happiness",
    },
    {
      myanmar: "မီးးလေးကို ကိုကို နေ့တိုင်း ပိုပိုချစ်လာပါတယ်",
      english: "Ko Ko loves Mee Lay more and more each day",
    },
    {
      myanmar: "မီးးလေးရဲ့ ရယ်မောသံက ကိုကိုရဲ့ နှလုံးသားကို နွေးထွေးစေပါတယ်",
      english: "Mee Lay's laughter warms Ko Ko's heart",
    },
    {
      myanmar: "မီးးလေးနဲ့ ကိုကို ထာဝရတိုင် အတူတူ နေထိုင်ပြီ အိုမင်းသွားချင်ပါတယ်",
      english: "Ko Ko wants to grow old together with Mee Lay",
    },
    {
      myanmar: "မီးးလေးရဲ့ လက်လေးကို ကိုင်ထားရတာ ကိုကိုရဲ့ ပျော်ရွှင်ဆုံး အချိန်ပါ",
      english: "Holding Mee Lay's hand is Ko Ko's happiest moment",
    },
    {
      myanmar: "မီးးလေးကို တွေ့တဲ့နေ့က ကိုကိုရဲ့ ဘဝမှာ အလှပဆုံးနေ့ပါ",
      english: "The day Ko Ko met Mee Lay was the most beautiful day in my life",
    },
    {
      myanmar: "မီးးလေးရဲ့ အပြုံးက ကိုကိုရဲ့ နေ့ရက်တိုင်းကို လှပစေပါတယ်",
      english: "Mee Lay's smile makes every day beautiful for Ko Ko",
    },
    {
      myanmar: "မီးးလေးကို ကိုကို ဘယ်တော့မှ စွန့်လွှတ်မှာ မဟုတ်ပါဘူး",
      english: "Ko Ko will never let Mee Lay go",
    },
    {
      myanmar: "မီးးလေးရဲ့ ချစ်ခြင်းက ကိုကိုရဲ့ အဖိုးတန်ဆုံး ရတနာပါ",
      english: "Mee Lay's love is Ko Ko's most precious treasure",
    },
    {
      myanmar: "မီးးလေးနဲ့ ကိုကို အတူတူ ရှိနေရင် ဘာမဆို ရင်ဆိုင်နိုင်ပါတယ်",
      english: "Together with Mee Lay, Ko Ko can face anything",
    },
    {
      myanmar: "မီးးလေးရဲ့ ချစ်ခြင်းက ကိုကိုရဲ့ ဘဝကို ပြည့်စုံစေပါတယ်",
      english: "Mee Lay's love completes Ko Ko's life",
    },
    {
      myanmar: "မီးးလေးကို ကိုကို နေ့တိုင်း သတိရနေပါတယ်",
      english: "Ko Ko thinks of Mee Lay every day",
    },
    {
      myanmar: "မီးးလေးရဲ့ ချစ်ခြင်းက ကိုကိုရဲ့ ဘဝကို အဓိပ္ပာယ်ရှိစေပါတယ်",
      english: "Mee Lay's love gives meaning to Ko Ko's life",
    },
    {
      myanmar: "မီးးလေးနဲ့ ကိုကို အတူတူ ရှိနေရင် ကိုကိုတို့ရဲ့ကမ္ဘာကြီးက ဆန်းပြားပြီလှပနေပါတယ်",
      english: "The world is beautiful when Ko Ko is with Mee Lay",
    },
    {
      myanmar: "မီးးလေးရဲ့ ချစ်ခြင်းက ကိုကိုရဲ့ အကောင်းဆုံး ဆုလာဘ်ပါ",
      english: "Mee Lay's love is Ko Ko's greatest blessing",
    },
    {
      myanmar: "မီးးလေးကို ကိုကို ထာဝရ ချစ်နေမှာပါ",
      english: "Ko Ko will love Mee Lay forever",
    },
    {
      myanmar: "မီးးလေးရဲ့ ချစ်ခြင်းက ကိုကိုရဲ့ အားအင်ပါ",
      english: "Mee Lay's love is Ko Ko's strength",
    },
    {
      myanmar: "မီးးလေးနဲ့ ကိုကို အတူတူ ရှိနေရင် ဘာမဆို ဖြစ်နိုင်ပါတယ်",
      english: "Anything is possible when Ko Ko is with Mee Lay",
    },
    {
      myanmar: "မီးးလေးရဲ့ ချစ်ခြင်းက ကိုကိုရဲ့ ဘဝကို ပြောင်းလဲစေခဲ့ပါတယ်",
      english: "Mee Lay's love has changed Ko Ko's life",
    },
    {
      myanmar: "မီးးလေးကို ကိုကို နှလုံးသားအပြည့်နဲ့ ချစ်ပါတယ်",
      english: "Ko Ko loves Mee Lay with all my heart",
    },
    {
      myanmar: "မီးးလေးရဲ့ ချစ်ခြင်းက ကိုကိုရဲ့ အကောင်းဆုံး ဆေးဝါးစွမ်းအင်ပါ",
      english: "Mee Lay's love is Ko Ko's best medicine",
    },
    {
      myanmar: "မီးးလေးကို စတွေ့ခဲ့တဲ့ နေ့ကစပြီ စချစ်မိသွားတဲံနေ့ကအစ ကိုကို့အတွက် ဘယ်တုန်းကမှ မဟောင်းနွမ်းသွားခဲ့ဘူး",
      english: "Ko Ko will love Mee Lay forever",
    },
    {
      myanmar: "တစ်နေ့ထက် တစ်နေ့ပိုပိုပြီး မီးးကိုချစ်လာသလို ပိုပိုပြီး အနေနီးချင်နေပြီ"
    },
    {
      myanmar: "ပြန်ပြီးတွေ့ခွင့်ရတဲ့နေ့ကြရင် အကြာကြီး ဖက်ပစ်ပြီး အဲ့နေ့ရက်မှာ မီးးလေးနဲ့အတူတူ ကိုကိုတစ်နေကုန် အချိန် တူတူကုန်ဆုံးချင်တယ် "
    },
    {
      myanmar: "၇ လပိုင်းမှာပြန်ဖြစ်မယ်မီးးလေးရေ ကိုကို့ကိုစောင့်နေပါနော်"
    },
    {
      myanmar: "ကိုကို့ကိုစိတ်ချပါ မီးးလေးကို ကိုကိုဘယ်တော့မှ လက်လွှတ်မှာမဟုတ်သလို ကိုကိုက ခွင့်လွှတ်ဖို့ ညှိနှိုင်းဖို့ပဲ ရွေးချယ်မှာပါ"
    },
    {
      myanmar: "သေချာတာတစ်ခုကတော့ ဒီဘဝမှာ ကိုကိုမီးးလေးကိုပဲ လက်ထပ်ယူပြီး မီးးလေးနဲံသက်ဆုံးတိုင်ထိ ကိုကိုတို့မိသားစုကောင်းတစ်ခု တည်ဆောက်သွားကြမယ်နော်"
    },
    {
      myanmar: "ကိုကိုတို့ချစ်ခြင်းမေတ္တာမှာ ရိုးသားပွင့်လင်းမှု ကတိသစ္စာစောင့်တည်းမှူနဲ့ နားလည်ခွင့်လွှတ်မှူနဲ့ ကိုကိုတို့ ချစ်သွားကြမယ်နော်"
    },
    {
      myanmar: "ပြဿနာကိစ္စ မလွှဲကြု့လာခဲ့ရင်လည်း ကိုကိုတို့ တစ်ယောက်ကိုတစ်ယောက် တွဲဆွဲခဲ့တဲ့ လက်ကို ဘယ်တော့မှ မလွှတ်ချကြဘူးနော် ကောင်မလေး"
    },
    {
      myanmar: "တူတူရင်ဆိုင်ဖြေရှင်ညှိနှိုင်းကျော်ဖြတ်ကြမယ်နော် မီးးလေး"
    },
    {
      myanmar: "အများကြီးချစ်တယ်လို့ ဒီဘဝမှာ မီးးနဲံပဲ ချစ်ပြီး မီးးနဲ့ပဲပေါင်းဖက်ပြီး ဒီဘဝကို ကုန်ဆုံးသွားချင်တယ်"
    },
    {
      myanmar: "အာဘွား အာဘွား အာဘွား အာဘွား အာဘွား အာဘွား အာဘွား အာဘွား အာဘွား အာဘွား အာဘွား အာဘွား အာဘွား အာဘွား အာဘွား အာဘွား အာဘွား "
    }

  ]

  // Add floating heart animation
  const addHeart = () => {
    const newHeart = {
      id: Date.now(),
      x: Math.random() * 100,
      y: Math.random() * 20,
    }

    setFloatingHearts((prev) => [...prev, newHeart])
    setHeartCount((prev) => prev + 1)

    // Change to next text when heart is clicked
    setCurrentTextIndex((prev) => (prev + 1) % myanmarLoveTexts.length)

    // Remove heart after animation completes
    setTimeout(() => {
      setFloatingHearts((prev) => prev.filter((heart) => heart.id !== newHeart.id))
    }, 5000)
  }

  const currentText = myanmarLoveTexts[currentTextIndex]

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-pink-50 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Traditional Myanmar pattern border */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" />

      {/* Floating hearts */}
      {floatingHearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-sky-500 animate-float pointer-events-none"
          style={{
            left: `${heart.x}%`,
            bottom: `${heart.y}%`,
          }}
        >
          <Heart className="fill-sky-500" size={24} />
        </div>
      ))}

      <div className="max-w-md w-full bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-sky-200 relative z-10">
        {/* Decorative header */}
        <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-sky-500 via-blue-500 to-sky-500 rounded-t-lg" />

        {/* Main content */}
        <div className="text-center mb-8">
          <h1 className="text-xl font-bold text-sky-800 mb-2 font-Padauk">ကိုကိုရဲ့ နှလုံးသားမှ စကားလက်ဆောင်</h1>
          {/* <p className="text-sky-700 italic">Words from Ko Ko's heart</p> */}
        </div>

        {/* Myanmar text display */}
        <div className="bg-sky-50 rounded-lg p-6 mb-8 min-h-[160px] flex flex-col items-center justify-center border border-sky-100 shadow-inner">
          <p className="text-sky-900 text-md text-center mb-4 leading-relaxed font-Padauk">{currentText.myanmar}</p>
          {/* <p className="text-sky-600 text-sm italic">{currentText.english}</p> */}
        </div>

        {/* Heart button */}
        <div className="flex justify-center">
          <button
            onClick={addHeart}
            className="flex flex-col items-center justify-center bg-sky-100 hover:bg-sky-200 text-sky-700 p-6 rounded-full border-2 border-sky-300 transition-all hover:shadow-lg transform hover:scale-105 w-32 h-32"
          >
            <Heart className="mb-2 fill-sky-500" size={56} />
            <span className="text-sm font-medium font-Padauk">ချစ်တယ်</span>
            {heartCount > 0 && (
              <span className="mt-2 bg-sky-500 text-white text-xs rounded-full px-2 py-0.5">{heartCount}</span>
            )}
          </button>
        </div>
      </div>

      {/* Footer with Myanmar text */}
      <div className="mt-8 text-center text-sky-800">
        <p className="text-sm font-Padauk">မီးးလေးကို ကိုကို ထာဝရအမြဲချစ်နေမယ်</p>
        {/* <p className="text-sm italic mt-1">Ko Ko will always love Mee Lay</p> */}
      </div>
    </div>
  )
}
