import { ArrowRight, Languages } from "lucide-react"
import { NavItems } from "./components/top-nav"
import { Button } from "./components/ui/button"
import { HeroSection } from "./components/hero-section"
import { WorkWithSection } from "./components/work-with-section"
import { WeAreHereSection } from "./components/we-are-here-section"
import { TestimonialSection } from "./components/testimonial-section"
import { PropertyListingSection } from "./components/property-listing-section"
import { FaqSection } from "./components/faq-section"

function App() {

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* header  */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-black">Arch<span className="text-gray-600">Life</span></h1>
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

        {/* Work With Us Section */}
        <WorkWithSection />

        {/* We are here section  */}
        <WeAreHereSection />

        {/* testimonial section  */}
        <TestimonialSection />

        {/* {Property Listing} */}
        <PropertyListingSection />

        {/* faq section  */}
        <FaqSection />

        {/* footer  */}

        <footer className="bg-black text-white px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8 mb-12">
              <div>
                <h4 className="font-semibold mb-4">
                  Subscribe to the
                  <br />
                  Prime Newsletter
                </h4>
                <p className="text-gray-400 text-sm mb-6">
                  Get the latest updates on new properties, market trends, and exclusive offers delivered straight to your
                  inbox.
                </p>
                <Button className="bg-white text-black hover:bg-gray-100 rounded-2xl">Get Started <ArrowRight /></Button>
              </div>
              <div>
                <h5 className="font-semibold mb-4">Services</h5>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white">
                      Property Management
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Real Estate
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-4">Social Media</h5>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-4">Company</h5>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Press
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Land for Sale
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Residence
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-4">Resources</h5>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Newsletter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Events
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Tutorials
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-6xl font-bold mb-4">ArchLife</h1>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
