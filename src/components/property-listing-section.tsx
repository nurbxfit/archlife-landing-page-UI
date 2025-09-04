import { Card, CardContent } from "./ui/card"


export const PropertyListingSection = () => {
    const properties = [
        {
            title: 'Eco Serenity Haven Residence',
            image: '/modern-eco-friendly-house-with-wooden-exterior.jpg',
            perks: [
                '🛏️ 4 Bed',
                '🚿 3 Bath',
                '📐 2,340 Sqft'
            ],
            price: '$350,000'
        },
        {
            title: 'Luxe Haven Residences',
            image: '/luxurious-modern-house-with-glass-walls.jpg',
            perks: [
                '🛏️ 5 Bed',
                '🚿 4 Bath',
                '📐 3,200 Sqft'
            ],
            price: '$420,000'
        },
        {
            title: 'Urban Oasis Apartment',
            image: '/urban-modern-apartment-building-exterior.jpg',
            perks: [
                '🛏️ 3 Bed',
                '🚿 2 Bath',
                '📐 3,200 Sqft'
            ],
            price: '$510,000'
        }
    ]
    return (
        <section id="residence" className="px-6 py-16 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center lg:mb-10">
                <h3 className="text-4xl font-bold text-black mb-4">
                    So what kind of home
                    <br />
                    do you want to realize?
                    <br />
                </h3>
                <p className="text-gray-600/70 mb-12 text-sm">
                    Every Corner of Serenity Beckons You to Unwind, Relax, and Embrace
                    the Beauty of Nature, Creating a Timeless Escape Where Tranquility Meets Luxury
                </p>
            </div>
            {/* property cards  */}
            <div className="grid md:grid-cols-3 gap-8">
                {
                    properties.map((property, index) => (
                        <Card key={index} className="overflow-hidden">
                            <div className="relative">
                                <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
                            </div>
                            <CardContent className="p-6">
                                <h4 className="font-semibold text-lg mb-2">
                                    {property.title}
                                </h4>
                                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                                    {property.perks.map(perk => (
                                        <span>{perk}</span>
                                    ))}
                                </div>
                                <div className="text-2xl font-bold text-black">{property.price}</div>
                            </CardContent>
                        </Card>
                    ))
                }
            </div>
        </section>
    )
}