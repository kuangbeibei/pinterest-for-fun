import { IUser } from "type";
import { images } from "Assets";

export default function Avatar() {
    const _user = localStorage.getItem('user');

    const user: IUser  = _user ? JSON.parse(_user) : localStorage.clear();
    
    if (user?.image) {
        return  <a
            href="/user"
            className="w-14 h-14 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full overflow-hidden shadow-md shadow-pinterest-light-shadow hover:shadow-lg transition-shadow duration-400 ease-in-out"
        >
            <picture>
                <source src={images.avatar.src}>
                </source>
                <img
                    src={images.avatar.src}
                    className="object-cover w-full h-full"
                    alt=""
                />
            </picture>

        </a>
    } else {
        return (
            <a
                href="/user"
                className="w-14 h-14 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full overflow-hidden shadow-md shadow-pinterest-light-shadow hover:shadow-lg transition-shadow duration-400 ease-in-out"
            >
                <picture>
                    <source src={images.avatar.src}>
                    </source>
                    <img
                        src={images.avatar.src}
                        className="object-cover w-full h-full"
                        alt=""
                    />
                </picture>

            </a>
        )
    }
  
}
