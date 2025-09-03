import { Star } from "lucide-react"
import { StarRating } from "./star-rating"

export const HeroSection = () => {
    return (
        <>
            <section className="px-6 py-16 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-5xl font-bold text-black leading-tight mb-6">
                            Discover <span className="text-black">Modern</span> <br />
                            Home Tailored to
                            <br />
                            <span className="text-gray-400">
                                Your lifestyle
                            </span>
                        </h2>
                        {/* stars rating */}
                        <StarRating count={5} label="Our Customers" />

                        {/* subtitle */}
                        <p className="text-gray-600 mb-4">
                            Discover Your Experience With
                            <br />
                            Innovative Real Estate Solutions and
                            <br />
                            Exceptional Service Made Perfect
                        </p>

                        {/* ratings  */}
                        <StarRating count={5} label="4.8" />
                    </div>
                </div>
            </section>
        </>
    )
}