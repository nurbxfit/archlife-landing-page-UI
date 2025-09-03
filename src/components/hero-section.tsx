import { MapPin } from "lucide-react"
import { StarRating } from "./star-rating"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"

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

                    {/* hero iamge card with badges and captions */}
                    <div className="flex flex-col space-y-4 md:relative">
                        <div className="relative">
                            <img
                                src="/modern-architectural-building-with-curved-design.jpg"
                                alt="Modern architectural building"
                                className="w-full h-80 object-cover rounded-2xl"
                            />
                            <Badge className="absolute top-4 left-4 bg-white text-black">
                                <MapPin className="h-3 w-3 mr-1" />
                                Etalon City
                            </Badge>
                        </div>
                        {/* captions card */}
                        <Card className="md:absolute md:-bottom-16 md:-right-16 bg-white shadow-lg md:w-72">
                            <CardContent className="p-4">
                                <h4>Etalon City Real Estate</h4>
                                <p>Experience uparralled luxury design in our most exclusive residential towers, where every detail reflects sophistication and comfort</p>
                                <a href="#" className="text-sm text-blue-600 hover:underline">
                                    See Detail
                                </a>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    )
}