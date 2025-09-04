import { Building, Home, Info, MessageSquare } from "lucide-react"

export const navItems = [
    {
        title: 'About us',
        href: '#about',
        icon: Info
    },
    {
        title: 'Testimonials',
        href: '#testimonial',
        icon: MessageSquare
    },
    {
        title: 'Residence',
        href: '#residence',
        icon: Building
    },
    {
        title: 'FAQ',
        href: '#faq',
        icon: Home
    },

]

export type INavItems = typeof navItems