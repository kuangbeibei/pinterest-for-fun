
import { useState, useEffect } from "react";
import { SearchIcon } from "@heroicons/react/solid"
import { images } from "Assets";
import { useLayoutContext, ILayoutContext } from "Context";
import Avatar from "./Avatar";

export default function Header() {
    const { asideWidth, winWidth, scrollTop, setHeaderHeight } = useLayoutContext() as ILayoutContext;

    useEffect(() => {
        const _height = document.querySelector('.header')?.getBoundingClientRect()?.height!;
        setHeaderHeight(_height)
    }, [])


    return (
        <header className={`header fixed z-20 top-0 left-0 w-full px-6 py-5 md:px-6 md:py-4 lg:py-8 lg:px-10 transition-all duration-200 ease-in-out ${scrollTop > 0 ? ' backdrop-blur-lg' : ''}`} style={{
            left: winWidth! > 768 ? `${asideWidth}px` : 0
        }}>
            <div className={`flex itmes-center ${winWidth! <= 768 ? 'justify-between' : 'justify-start'} spac-x-4`}>
                {
                    winWidth! <= 768 && <Avatar />
                }
                <div className={`flex items-center ${winWidth! <= 768 ? 'w-4/5' : 'w-full'} space-x-2`}>
                    <SearchIcon className="w-6 h-6 md:w-8 lg:h-8 text-pinterest opacity-70" />
                    <input type="text" placeholder="search here..." className="outline-none bg-transparent placeholder:italic w-1/2 placeholder:text-pinterest-normal text-pinterest text-base lg:text-2xl" />
                </div>
            </div>
        </header>
    )
}