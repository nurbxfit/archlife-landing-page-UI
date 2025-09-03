
export const NavItems = () => {
    const navItems = [
        {
            title: 'About us',
            href: '#about'
        },
        {
            title: 'Land for Sale',
            href: '#sales'
        },
        {
            title: 'Residence',
            href: '#residence'
        },
        {
            title: 'Contact Us',
            href: '#contact'
        }
    ]
    return (
        <>
            <nav className="hidden md:flex items-center space-x-6">
                {navItems.map(navItem => (
                    <a href={navItem.href} className="text-gray-600 hover:text-black">
                        {navItem.title}
                    </a>
                ))}
            </nav>
        </>
    )
}