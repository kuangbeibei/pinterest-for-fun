import { useEffect, useState } from "react";
import { images } from "Assets";
import { useLayoutContext, ILayoutContext } from "Context";
import Avatar from "./Avatar"

interface ICategories {
    emoji: string
    title: string
}

export default function Categories() {
    const { winWidth, asideWidth, setAsideTranslateX } = useLayoutContext() as ILayoutContext;

    const [categories, setCategories] = useState<Array<ICategories>>([])

    useEffect(() => {
        const _x = document.querySelector('.sidebar')?.getBoundingClientRect()?.width!;
        setAsideTranslateX(_x);
    }, [winWidth])

    useEffect(() => {
        fetch('/api/getCategories').then(async (res) => {
            const result = await res.json();
            setCategories(result);
        })
    }, [])

    return (
        <aside
            className="sidebar fixed z-30 left-0 top-0 h-full p-6 flex flex-col justify-between items-center bg-pinterest-aside transition-transform duration-200 ease-linear"
            style={{
                transform: winWidth! > 768 ? `translateX(0)` : `translateX(-${asideWidth}px)`
            }}
        >
            <div className="flex flex-col items-center justify-start space-y-8">
                <Avatar />

                <ul className="flex flex-col space-y-4 text-md lg:text-lg xl:text-xl text-pinterest">
                    {
                        categories.map(category => (
                            <li key={category.title} className="flex items-center space-x-2 cursor-pointer group">
                                <span className="transition-transform duration-200 ease-linear group-hover:scale-125">
                                    {category.emoji}{" "}
                                </span>
                                <span className="transition-all duration-200 ease-in-out group-hover:text-pinterest-light ">{category.title}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>

        </aside>
    );
}
