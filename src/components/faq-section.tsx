import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"

export const FaqSection = () => {
    const faqs = [
        {
            key: 'q1',
            question: 'Can I buy a home with bad credit?',
            answer: 'Yes, there are several options available for buyers with less-than-perfect credit, including FHA loans, VA loans, and specialized lending programs.'
        },
        {
            key: 'q2',
            question: 'How do I schedule a property viewing?',
            answer: 'You can schedule a viewing by contacting our team directly or using our online booking syste available on each property listing.'
        },
        {
            key: 'q3',
            question: 'What is the process for selling a property?',
            answer: 'Our selling process includes property valuation, marketing strategy, listing preparation, showing coordination, and closing assistance.'
        },
        {
            key: 'q4',
            question: ' How do I choose the right real estate agent?',
            answer: 'Look for experience, local market knowledge, communication skills, and a proven track record of successful transactions in your area.'
        }
    ]
    return (
        <section id="faq" className="px-6 py-16 ">
            <div className="max-w-4xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-4xl font-bold text-black mb-6">
                            Top questions
                            <br />
                            answered.
                        </h3>
                        <p className="text-gray-600">
                            Your Questions, Answered Everything You Need to Know
                        </p>
                    </div>
                    <div>
                        <div className="mb-6">
                            <h4 className="font-semibold text-lg mb-4">
                                Buy, Sell & Diversify.
                            </h4>
                            <p className="text-gray-600 text-sm">
                                Fractional Property Investing is the process of dividing an assets into smaller pieces to
                                allow a number of investors to mutually own a percentage of the asset. Fractional
                                Property Investing is the process of dividing an assets into smaller pieces.
                            </p>
                        </div>
                        <Accordion type="single" collapsible className="space-y-4">
                            {
                                faqs.map((faq, index) => (
                                    <AccordionItem key={index} value={faq.key} className="border border-gray-200 rounded-lg px-4">
                                        <AccordionTrigger className="text-left">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-gray-600">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))
                            }
                        </Accordion>
                    </div>

                </div>
            </div>
        </section>
    )
}