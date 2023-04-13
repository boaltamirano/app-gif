import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category ) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async () => {
        const getImages = await getGifs(category);
        setImages(getImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        isLoading
    }
}

