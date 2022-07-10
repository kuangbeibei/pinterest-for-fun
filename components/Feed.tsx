import { useEffect, useState } from "react";
import { MasonryLayout } from "Components"
import { ILayoutContext, useLayoutContext } from "Context"
import { IPost } from 'type';

export default function Feed() {
    const [pins, setPins] = useState<IPost[]>([])
    useEffect(() => {
        fetch('/api/getPins').then(async res => {
            const data = await res.json();
            setPins(data);
        })
    }, [])
    const { winWidth, asideWidth, headerHeight } = useLayoutContext() as ILayoutContext;
    return (
        <div className="relative py-6 px-8 w-full" style={{
            left: winWidth! > 768 ? `${asideWidth}px` : 0,
            top: `${headerHeight}px`,
            width: winWidth! > 768 ? `calc(${winWidth! - asideWidth}px)` : '100%'
        }}>
            <MasonryLayout pins={pins} />
        </div>
    )
}
