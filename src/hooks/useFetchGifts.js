import { useState, useEffect } from 'react';
import { getGifts } from '../components/helpers/getGifts';


export const useFetchGifts = (category) => {

    const [images, setImages] = useState([]);           // Hook para insertar imagenes de url.
    const [isLoading, setIsLoadind] = useState(true);

    const getImages = async () => {                     // FF 
        const newImages = await getGifts(category);     // HACE UN AWAIT DEL getGifts en Helpers le amnda Props category
        setImages(newImages);
        setIsLoadind(false);                          // Cambia el estado del Hook images. 
    }


    useEffect(() => {                                   // Hook Efectos Secundarios. Tiene 2 Argumentos: 
        getImages();                                    // 1er Argumento Callback.

        //                                                 2do Argumento [ Dependencias ]


    }, []);                                              // [ ] Dependencias Vacias. Hook se dispara solo la primera
    //                                                      vez que se construye el componente GiftGirds.      

    return {
        // images: images,
        // isLoading: true,
        images,                                         // { F }
        isLoading,

    }

}
