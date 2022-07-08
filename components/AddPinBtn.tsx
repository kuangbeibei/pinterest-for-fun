
import { PlusIcon } from "@heroicons/react/solid"

export default function AddPinBtn() {
    return (
        <div className="fixed z-30 bottom-4 right-4 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 lg:bottom-10 lg:right-8 rounded-full bg-pinterest-text-hover shadow-md cursor-pointer transition-transform duration-150 ease-linear hover:scale-110">
            <PlusIcon className="w-6 h-6 md:w-8 md:h-8 text-pinterest-light" />
        </div>
    )
}
