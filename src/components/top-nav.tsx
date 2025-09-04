import type { INavItems } from "@/lib/constants"

interface NavItemsProps {
    navItems: INavItems
}
export const NavItems = ({ navItems }: NavItemsProps) => {

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