import { StarRating } from "./star-rating"

export const TestimonialSection = () => {
    return (
        <section className="px-6 py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-3xl font-bold text-black mb-12">
                    See other people who have
                    <br />
                    lived in our residence
                </h3>
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1 text-left">
                            <div className="mb-4">
                                <h4 className="font-semibold text-lg">Greg Bergstrom</h4>
                                <p className="text-gray-600">Marketing Executive</p>
                            </div>
                            <p className="text-gray-700 mb-6">
                                Working with ArchLife as a fantastic experience from start to finish.
                                They listened to exactly what I wanted, and within a few short weeks, I found my dream home.
                                The team was knowledgeable, responsive, and made the entire process so easy.
                                I truly felt supported.
                            </p>
                            <StarRating count={5} />
                        </div>
                        <div className="flex shrink-0">
                            <img
                                src="/professional-man-headshot-smiling.png"
                                alt="Greg Bergstrom"
                                className="w-48 h-48 object-cover rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}