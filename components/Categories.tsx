import { useEffect, useState } from "react";
import { images } from "Assets";
import { useLayoutContext, ILayoutContext } from "Context";

const categories: Array<{
    emoji: string
    title: string
}> = [
        {
            emoji: "😼",
            title: "Cat",
        },
        {
            emoji: "📖",
            title: "Book",
        },
        {
            emoji: "🎞️",
            title: "Film",
        },
        {
            emoji: "🥙",
            title: "Food",
        },
        {
            emoji: "🎵",
            title: "Music",
        },
    ];

export default function Categories() {
    const { winWidth, asideWidth, setAsideTranslateX } = useLayoutContext() as ILayoutContext;

    useEffect(() => {
        const _x = document.querySelector('.sidebar')?.getBoundingClientRect()?.width!;
        setAsideTranslateX(_x);
    }, [winWidth])


    return (
        <aside
            className="sidebar fixed z-30 left-0 top-0 h-full p-6 flex flex-col justify-between items-center bg-pinterest-aside transition-transform duration-200 ease-linear"
            style={{
                transform: winWidth! > 768 ? `translateX(0)` : `translateX(-${asideWidth}px)`
            }}
        >
            <div className="flex flex-col items-center justify-start space-y-8">
                <a
                    href="/user"
                    className="w-14 h-14 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full overflow-hidden shadow-md shadow-pinterest-light-shadow hover:shadow-lg transition-shadow duration-400 ease-in-out"
                >
                    <img
                        src={images.selfie.src}
                        className="object-cover w-full h-full"
                        alt=""
                    />
                </a>

                <ul className="flex flex-col space-y-4 text-md lg:text-lg xl:text-xl text-pinterest">
                    {
                        categories.map(category => (
                            <li key={category.title} className="flex items-center space-x-2 cursor-pointer transition-all duration-100 ease-in-out hover:text-pinterest-light group">
                                <span className="block transition-transform duration-200 ease-linear group-hover:scale-120">
                                    {category.emoji}{" "}
                                </span>
                                <span>{category.title}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>

        </aside>
    );
}
