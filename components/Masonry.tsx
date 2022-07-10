
import Masonry from "react-masonry-css";
import Pin from "./Pin";
import { IPost } from 'type';

interface Props {
    pins: IPost[]
}

const breakPoints = {
    default: 4,
    '3000': 6,
    '2000': 5,
    '1200': 3,
    '1000': 2,
    '500': 1
}

export default function MasonryLayout({
    pins
}: Props) {
    return (
        <Masonry className="flex space-x-4" breakpointCols={breakPoints}>
            {
                pins.map((pin: IPost) => <Pin key={pin._id} pin={pin} />)
            }
        </Masonry>
    )
}
