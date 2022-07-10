export interface IPost {
    _id: string
    _createdAt: string
    title: string
    author: {
        name: string   
    }
    categories: object
    mainImage: {
        asset: {
            _ref: string
        }
    }
}

export interface IUser {
    username: string
    image?: {
        asset: {
            
        }
    }
}