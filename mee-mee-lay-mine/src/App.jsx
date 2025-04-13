"use client"

import { Heart } from "lucide-react"
import { useEffect } from "react"

export default function RomanticPage() {
  // Add Padauk font for Myanmar text
  useEffect(() => {
    const link = document.createElement("link")
    link.href = "https://fonts.googleapis.com/css2?family=Padauk:wght@400;700&display=swap"
    link.rel = "stylesheet"
    document.head.appendChild(link)

    return () => {
      document.head.removeChild(link)
    }
  }, [])

  // Image imports
  const images = [
    "/placeholder.svg?height=400&width=500",
    "/placeholder.svg?height=300&width=400&text=Image 1",
    "/placeholder.svg?height=300&width=400&text=Image 2",
    "/placeholder.svg?height=300&width=400&text=Image 3",
    "/placeholder.svg?height=300&width=400&text=Image 4",
    "/placeholder.svg?height=300&width=400&text=Image 5",
    "/placeholder.svg?height=300&width=400&text=Image 6",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-sm bg-sky-600/90 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5 fill-white" />
            <span className="font-['Padauk'] text-xl font-semibold">မီးးလေးအတွက်</span>
          </div>

          <nav>
            <ul className="flex gap-6">
              <li>
                <a href="#home" className="hover:text-sky-100 transition">
                  <span className="font-['Padauk']">ပင်မ</span>
                </a>
              </li>
              <li>
                <a href="#quotes" className="hover:text-sky-100 transition">
                  <span className="font-['Padauk']">အဆိုအမိန့်များ</span>
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-sky-100 transition">
                  <span className="font-['Padauk']">ပုံများ</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="py-20 md:py-32 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold text-sky-600 mb-6">
                  <span className="font-['Padauk']">အချစ်၏ အလှအပ</span>
                </h1>
                <p className="text-lg text-gray-700 mb-8 font-['Padauk'] leading-relaxed">
                  အချစ်သည် ကမ္ဘာပေါ်တွင် အလှပဆုံးသော ခံစားချက်ဖြစ်သည်။ ၎င်းသည် ကိုကိုတို့၏ နှလုံးသားများကို နွေးထွေးစေပြီး ဘဝကို အဓိပ္ပါယ်ရှိစေပါသည်။
                </p>
                <button className="bg-sky-600 hover:bg-sky-700 text-white font-['Padauk'] py-3 px-6 rounded-md shadow-lg transition-colors">
                  စစ်မှန်သော ချစ်ခြင်းမေတ္တာဖြင့် မီးးလေးကိုချစ်သည်
                </button>
              </div>
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img
                    src={images[0] || "/placeholder.svg"}
                    alt="Romantic scene"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quotes Section */}
        <section id="quotes" className="py-20 bg-sky-50 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-sky-600 text-center mb-12 font-['Padauk']">အချစ်ဆိုင်ရာ အဆိုအမိန့်များ</h2>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white p-8 rounded-lg shadow-md border border-sky-100">
                <p className="text-lg text-gray-700 mb-4 font-['Padauk'] leading-relaxed">
                  "အချစ်စစ်သည် အခက်အခဲများကို ကျော်လွှားနိုင်ပြီး အချိန်၏ စမ်းသပ်မှုကို ခံနိုင်ရည်ရှိသည်။"
                </p>
                <p className="text-sky-600 font-semibold font-['Padauk']">- မြန်မာဆိုရိုးစကား</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md border border-sky-100">
                <p className="text-lg text-gray-700 mb-4 font-['Padauk'] leading-relaxed">
                  "အချစ်သည် ကျွန်ုပ်တို့ကို ပိုမိုကောင်းမွန်သော လူသားများဖြစ်လာစေရန် တွန်းအားပေးသည်။"
                </p>
                <p className="text-sky-600 font-semibold font-['Padauk']">- ခေတ်သစ်အဆို</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md border border-sky-100">
                <p className="text-lg text-gray-700 mb-4 font-['Padauk'] leading-relaxed">
                  "အချစ်သည် ကျွန်ုပ်တို့၏ အားနည်းချက်များကို လက်ခံပြီး ကျွန်ုပ်တို့၏ အားသာချက်များကို မြှင့်တင်ပေးသည်။"
                </p>
                <p className="text-sky-600 font-semibold font-['Padauk']">- ခေတ်ပြိုင်စာရေးဆရာ</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md border border-sky-100">
                <p className="text-lg text-gray-700 mb-4 font-['Padauk'] leading-relaxed">
                  "အချစ်စစ်သည် အခြားသူ၏ ပျော်ရွှင်မှုကို ကိုယ့်ပျော်ရွှင်မှုထက် ဦးစားပေးသည်။"
                </p>
                <p className="text-sky-600 font-semibold font-['Padauk']">- ရှေးဟောင်းအဆို</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-sky-600 text-center mb-12 font-['Padauk']">အချစ်ဓာတ်ပုံပြခန်း</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="overflow-hidden rounded-lg shadow-lg group">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={images[item] || "/placeholder.svg"}
                      alt={`Romantic image ${item}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-sky-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-['Padauk'] text-lg font-semibold">ကြည့်ရှုရန်</span>
                    </div>
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="text-sky-600 font-['Padauk'] font-medium">အချစ်ပုံများ {item}</h3>
                    <p className="text-gray-600 font-['Padauk'] text-sm mt-1">အချစ်၏ အလှအပကို ဖော်ပြသည့်ပုံ</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-sky-600 text-white py-10 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 fill-white" />
              <span className="font-['Padauk'] text-xl font-semibold">မီးးလေးအား ချစ်သော ကိုကို</span>
            </div>

            <div className="text-center md:text-right">
              <p className="font-['Padauk'] mb-2">အချစ်နှင့် ပတ်သက်ရင် မီးးလေးဆိုတဲ့နာမ်စားလေးနဲ့ အစပြုပါသည်</p>
              <p className="text-sky-100 text-sm font-['Padauk']">
                &copy; 2022-{new Date().getFullYear()}-Forever ကိုကိုတို့ချစ်သွားကြမယ်
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
