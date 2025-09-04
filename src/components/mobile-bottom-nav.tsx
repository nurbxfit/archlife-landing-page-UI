import type { INavItems } from "@/lib/constants"
import { Button } from "./ui/button";


interface MobileBottomNavProps {
    navItems: INavItems
}
export const MobileBotomNav = ({ navItems }: MobileBottomNavProps) => {
    return (
        <div className="fixed bottom-4 left-1/2 z-50 w-[90%] max-w-md -translate-x-1/2
            rounded-2xl border border-gray-200 bg-white shadow-lg md:hidden
        ">
            <div className="flex justify-around items-center p-2">
                {
                    navItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <a
                                key={item.title}
                                href={item.href}
                                className="flex flex-col items-center gap-1 text-xs text-gray-600 hover:text-black"
                            >
                                <Button variant={"ghost"} size={"icon"} className="rounded-full">
                                    <Icon className="w-5 h-5" />
                                </Button>
                                <span>{item.title}</span>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}