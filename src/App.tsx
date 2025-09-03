import { Languages } from "lucide-react"
import { NavItems } from "./components/top-nav"
import { Button } from "./components/ui/button"
import { HeroSection } from "./components/hero-section"

function App() {

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* header  */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-black">Living</h1>
            {/* top nav  */}
            <NavItems />
          </div>
          <div className="flex items-center space-x-4">
            <Button variant={"ghost"} size={"icon"}>
              <Languages className="h-5 w-5" />
            </Button>
            <Button variant={"outline"} className="text-sm bg-transparent">
              Contact Us
            </Button>
          </div>
        </header>

        {/* hero section  */}
        <HeroSection />

      </div>
    </>
  )
}

export default App
