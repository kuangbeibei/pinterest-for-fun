
import { useState, useEffect } from "react";
import { SearchIcon } from "@heroicons/react/solid"
import { images } from "Assets";
import { useLayoutContext, ILayoutContext } from "Context";

export default function Header() {
    const { asideWidth, winWidth, scrollTop, setHeaderHeight } = useLayoutContext() as ILayoutContext;
    const [w, setW] = useState<number>(0);

    useEffect(() => {
        if (winWidth) {
            setW(winWidth - asideWidth)
        }
    }, [winWidth, asideWidth])

    useEffect(() => {
        const _height = document.querySelector('.header')?.getBoundingClientRect()?.height!;
        setHeaderHeight(_height)
    }, [])


    return (
        <header className={`header fixed z-20 top-0 left-0 w-full px-6 py-5 md:px-6 md:py-4 lg:py-8 lg:px-10 transition-all duration-200 ease-in-out ${scrollTop > 0 ? ' backdrop-blur-lg' : ''}`} style={{
            left: winWidth! > 768 ? `${asideWidth}px` : 0
        }}>
            kkk
        </header>
    )
}


{/* <div className="flex justify-between items-center text-sm md:text-base lg:text-xl">
                <a href="/" className="md:hidden w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden shadow-lg shadow-pinterest-light-shadow hover:shadow-pinterest-shadow transition-shadow duration-400 ease-in-out">
                    <img src={images.selfie.src} className="object-cover w-10 h-10 md:w-14 md:h-14" alt="" />
                </a>
                <div className="flex spac-x-2 cursor-pointer lg:w-1/3">
                    <SearchIcon className="w-6 h-6 md:w-8 lg:h-8 mr-4 text-pinterest opacity-70" />
                    <input type="text" placeholder="search here..." className="outline-none bg-transparent placeholder:italic w-full placeholder:text-pinterest-normal text-pinterest text-base lg:text-2xl" />
                </div>
            </div> */}