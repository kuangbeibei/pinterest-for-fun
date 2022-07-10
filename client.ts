import SanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types"

const client = SanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2022-07-08',
    token: process.env.SANITY_API_TOKEN, 
    useCdn: true,
})

export default client;

const builder = ImageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);