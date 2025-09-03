import { Button } from "./ui/button"

export const WeAreHereSection = () => {

    const sellingPoints = [
        {
            id: '01',
            image: '/modern-luxury-living-room-interior.jpg',
            title: 'Luxury Living',
            descriptons: 'A sophisticated lifestyle with unparalleled comfort and elegance in every detail of your home.'
        },
        {
            id: '02',
            image: '/minimalist-modern-house.png',
            title: 'Minimalist Haven',
            descriptons: 'Clean lines and thoughtful design create a peaceful sanctuary that embodies modern simplicity.'
        },
        {
            id: '02',
            image: '/modern-architectural-building-exterior.jpg',
            title: 'Discover Modern',
            descriptons: ' Exploring the boundaries of contemporary architecture with innovative design solutions.'
        }
    ]

    return (
        <section className="px-6 py-16 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 className="text-4xl font-bold text-black mb-6">
                        We are here
                        <br />
                        for your need
                    </h3>
                    <p className="text-gray-600 mb-8">
                        Build a sophisticated Realty with functionality, our team offers comprehensive design and development
                        services that transform your vision into reality with unmatched precision and style
                    </p>
                    <Button className="bg-black text-white hover:bg-gray-800">Get Started</Button>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    {
                        sellingPoints.map(seelingPoint => (
                            <div className="flex items-start space-x-4">
                                <div className="bg-gray-100 rounded-lg p-1 flex-shrink-0">
                                    <img
                                        className="w-24 h-24 object-cover rounded-lg"
                                        src={seelingPoint.image}
                                        alt={seelingPoint.title} />
                                </div>
                                <div>
                                    <div className="flex items-center space-x-2 mb-2">
                                        <span className="text-2xl font-bold">{seelingPoint.id}</span>
                                        <h4 className="font-semibold">{seelingPoint.title}</h4>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        {seelingPoint.descriptons}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}