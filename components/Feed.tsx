import { MasonryLayout } from "Components"
import { ILayoutContext, useLayoutContext } from "Context"

export default function Feed() {
    const { winWidth, asideWidth, headerHeight } = useLayoutContext() as ILayoutContext;
    return (
        <div className="relative -z-10 py-6 px-8 w-full" style={{
            left: winWidth! > 768 ? `${asideWidth}px` : 0,
            top: `${headerHeight}px`,
            width: winWidth! > 768 ? `calc(${winWidth! - asideWidth}px)` : '100%'
        }}>
            <MasonryLayout />
        </div>
    )
}
