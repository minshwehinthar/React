"use client"

import { useState, useEffect, useRef } from "react"

const App = () => {
  const [showMessage, setShowMessage] = useState(false)
  const [waterDrops, setWaterDrops] = useState([])
  const [typedText, setTypedText] = useState("")
  const [isPlaying, setIsPlaying] = useState(false)
  const [initialAnimation, setInitialAnimation] = useState(true)
  const audioRef = useRef(null)

  const loveMessage = `ချစ်ရတဲ့ Mee Mee Lay ရေ၊
သင်္ကြန်မှာ ရေပက်ရင်း ပျော်ရွှင်ပါစေ။ ကိုကိုရဲ့ အချစ်ဟာ ရေလိုပဲ သန့်စင်ပြီး နက်ရှိုင်းပါတယ်။ သင်္ကြန်ကာလမှာ ပျော်ရွှင်စရာတွေနဲ့ ပြည့်နှက်ပါစေ။ နှစ်ကာလတွေက ပြောင်းလဲသွားပေမဲံ ကိုကို့ရဲ့အချစ်က မီးးအပေါ် ဘယ်တော့မှ မပြောင်းလဲသွားပါဘူးဗျာ။ တစ်နေ့ထက်တစ်နေ့ ပိုပိုချစ်လာတာပဲရှိနေတာ။ အများကြီးချစ်တယ်နော် ကောင်းမလေး။ ဖြေဆိုထားတဲ့ စာမေးပွဲကိုလည်း အမှတ်များများနဲ့ အောင်မြင်ပါစေ။ ❤️`

  // Start water show animation immediately
  useEffect(() => {
    createWaterShow()

    // Auto show message after water show
    setTimeout(() => {
      setShowMessage(true)
      typeMessage()
    }, 3000)

    // End initial animation after some time
    setTimeout(() => {
      setInitialAnimation(false)
    }, 6000)

    // Start background music
    if (audioRef.current) {
      audioRef.current.play().catch((e) => console.log("Audio autoplay prevented"))
      setIsPlaying(true)
    }
  }, [])

  // Create continuous water drops
  useEffect(() => {
    const interval = setInterval(() => {
      createWaterDrops(3)
    }, 300)

    return () => clearInterval(interval)
  }, [])

  const createWaterShow = () => {
    // Create a big splash of water
    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        setWaterDrops((prev) => [
          ...prev,
          {
            id: Date.now() + i,
            x: 30 + Math.random() * 40, // Concentrate in the middle
            y: 40 + Math.random() * 20,
            size: Math.random() * 30 + 15,
            duration: 1 + Math.random() * 3,
            delay: Math.random() * 0.5,
            initialShow: true,
          },
        ])
      }, i * 30)
    }
  }

  const createWaterDrops = (count) => {
    for (let i = 0; i < count; i++) {
      setWaterDrops((prev) => {
        // Remove old drops
        const filtered = prev.filter((d) => d.initialShow || Date.now() - d.created < 5000)

        // Add new drops
        return [
          ...filtered,
          {
            id: Date.now() + i,
            created: Date.now(),
            x: Math.random() * 100,
            y: -10,
            size: Math.random() * 15 + 8,
            duration: 2 + Math.random() * 3,
            delay: Math.random() * 0.2,
            initialShow: false,
          },
        ]
      })
    }
  }

  const typeMessage = () => {
    let i = 0
    const typing = setInterval(() => {
      if (i < loveMessage.length) {
        setTypedText(loveMessage.substring(0, i + 1))
        i++
      } else {
        clearInterval(typing)
      }
    }, 50)
  }

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  // Custom animation styles as inline styles
  const splashAnimation = {
    animation: "splash 2s ease-out forwards",
  }

  const fallAnimation = {
    animation: "fall linear forwards",
  }

  const floatAnimation = (duration, delay) => ({
    animation: `float ${duration}s ease-in-out infinite`,
    animationDelay: `${delay}s`,
  })

  // Add these styles to the head of the document
  useEffect(() => {
    const style = document.createElement("style")
    style.innerHTML = `
      @keyframes fall {
        0% { transform: translateY(-10px); opacity: 0; }
        10% { opacity: 1; }
        100% { transform: translateY(100vh); opacity: 0.7; }
      }
      
      @keyframes splash {
        0% { transform: scale(0) translateY(0); opacity: 0; }
        50% { opacity: 1; }
        100% { transform: scale(1.5) translateY(-100px); opacity: 0; }
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(5deg); }
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-yellow-300 to-yellow-500 flex flex-col items-center justify-center overflow-hidden p-4">
      {/* Myanmar decorative elements */}
      <div className="absolute top-5 left-5 text-4xl">🏮</div>
      <div className="absolute top-5 right-5 text-4xl">🏮</div>
      <div className="absolute bottom-5 left-5 text-4xl">🪔</div>
      <div className="absolute bottom-5 right-5 text-4xl">🪔</div>

      {/* Water drops animation */}
      {waterDrops.map((drop) => (
        <div
          key={drop.id}
          className="absolute text-blue-400"
          style={{
            left: `${drop.x}%`,
            top: drop.initialShow ? `${drop.y}%` : "90px",
            fontSize: `${drop.size}px`,
            // animationDuration: `${drop.duration}s`,
            // animationDelay: `${drop.delay}s`,
            opacity: initialAnimation && drop.initialShow ? 1 : undefined,
            ...(drop.initialShow ? splashAnimation : fallAnimation),
          }}
        >
          💧
        </div>
      ))}

      {/* Main card */}
      <div className="relative bg-yellow-100 bg-opacity-10 backdrop-filter backdrop-blur rounded-xl p-8 max-w-2xl mb-36 w-full shadow-xl border border-yellow-200 border-opacity-50 z-10">
        <div className="text-center">
          <h1 className="text-xl font-bold text-yellow-800 mb-2 drop-shadow-md">မင်္ဂလာပါ Mee Mee Lay</h1>
          <h2 className="text-sm text-yellow-700 mb-2">သင်္ကြန်နေ့မှာ ဆုမွန်ကောင်းတောင်းလိုက်ပါတယ်</h2>
          <h3 className="text-xs text-yellow-600 mb-6">Happy Thingyan Water Festival!</h3>

          <div className="mb-8 p-4 bg-yellow-100 bg-opacity-50 rounded-lg">
            <p className="text-yellow-800 font-semibold">သင်္ကြန်ရေပက်ပွဲတော်မှာ ပျော်ရွှင်ပါစေ</p>
            <p className="text-yellow-700 text-xs mt-2">(May you be happy during the Thingyan Water Festival)</p>
          </div>

          <div
            className={`bg-yellow-200 bg-opacity-30 backdrop-blur-md rounded-lg p-6 border-2 border-yellow-300 transition-all duration-500 ease-out ${
              showMessage ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
            }`}
          >
            <p className="text-yellow-800 text-sm mb-4 font-medium whitespace-pre-line">{typedText}</p>
            <div className="mt-6 flex justify-center space-x-6">
              <span className="text-2xl animate-bounce">💦</span>
              <span className="text-2xl animate-pulse">💛</span>
              <span className="text-2xl animate-bounce">💦</span>
            </div>
          </div>
        </div>

        {/* Traditional Myanmar Thingyan elements */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-yellow-100 bg-opacity-70 p-4 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
            <h3 className="text-sm font-bold text-yellow-700 mb-2">သင်္ကြန်ဆုမွန်</h3>
            <p className="text-yellow-800 text-sm">ဟောင်းနွမ်းသမျှ အညစ်အကြေးများ ဆေးကြောသန့်စင်ပါစေ</p>
          </div>

          <div className="bg-yellow-100 bg-opacity-70 p-4 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
            <h3 className="text-sm font-bold text-yellow-700 mb-2">မဟာသင်္ကြန်</h3>
            <p className="text-yellow-800 text-sm">နှစ်ဟောင်းမှ နှစ်သစ်သို့ ကူးပြောင်းချိန် ပျော်ရွှင်ဖွယ်ရာတွေနဲ့ မီးးလေးဆီ ယူဆောင်သွားပါစေ</p>
          </div>
        </div>

        {/* Audio player */}
        {/* <div className="absolute bottom-4 right-4 flex items-center space-x-2">
          <button
            onClick={toggleAudio}
            className="bg-yellow-400 hover:bg-yellow-500 text-yellow-800 rounded-full p-2 shadow-md transition duration-300"
          >
            {isPlaying ? <span className="block w-6 h-6">⏸️</span> : <span className="block w-6 h-6">▶️</span>}
          </button>
          <span className="text-yellow-800 text-sm">သင်္ကြန်တေး</span>
        </div> */}

        <audio ref={audioRef} loop>
          <source src="/placeholder-audio.mp3" type="audio/mpeg" />
        </audio>
      </div>

      {/* Water ripple effect at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-blue-400 opacity-30 z-0 animate-pulse"></div>

      {/* Floating decorative elements */}
      <div className="absolute top-18 z-50 left-10 text-4xl" style={floatAnimation(3, 0)}>
      💦
      </div>
      <div className="absolute top-1/3  z-50 right-10 text-4xl" style={floatAnimation(4, 1)}>
        💦
      </div>
      <div className="absolute bottom-80 z-50 left-5 text-4xl" style={floatAnimation(5, 0.5)}>
      💦
      </div>
      <div className="absolute bottom-40 z-50 right-5 text-4xl" style={floatAnimation(4.5, 1.5)}>
      💦
      </div>
    </div>
  )
}

export default App
