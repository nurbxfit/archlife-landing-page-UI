import { Button } from "./ui/button"

export const WorkWithSection = () => {
    const trackRecords = [
        {
            title: '13000+',
            subtitle: 'Total Residence We Get From Various Projects Or Others That We Complete'
        },
        {
            title: '21000+',
            subtitle: 'The Beauty Of Homes, Creating A Timeless Design Where Hospitality'
        },
        {
            title: '112+',
            subtitle: 'Total Residence We Get From Various Projects Or Others That We Complete'
        }
    ]
    return (
        <section className="px-6 py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* work with brief */}
                    <div>
                        <h3 className="text-4xl font-bold text-black mb-6">
                            Work With ArchLife
                            <br />
                            Architect Mastery
                        </h3>
                        <p className="text-gray-600 mb-8">
                            ArchLife is committed to delivering the finest design solutions for the World of Homes, Creating a
                            Timeless Design Where Every Detail Matters.
                        </p>
                        <Button className="bg-black text-white hover:bg-gray-800">Get Started</Button>
                    </div>
                    {/* track records */}
                    <div className="grid grid-cols-3 gap-8 text-center">
                        {
                            trackRecords.map((record) => <div>
                                <div className="text-4xl font-bold text-black mb-2">{record.title}</div>
                                <p className="text-sm text-gray-600">
                                    {record.subtitle}
                                </p>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}