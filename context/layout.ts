import { createContext, useContext, Dispatch, SetStateAction } from "react";

export interface ILayoutContext {
    winWidth: number | undefined
    scrollTop: number
    asideWidth: number
    setAsideTranslateX: Dispatch<SetStateAction<number>>
    headerHeight: number
    setHeaderHeight: Dispatch<SetStateAction<number>>
}

const LayoutContext = createContext<ILayoutContext | null>(null);

export const useLayoutContext = () => useContext(LayoutContext);

export default LayoutContext