import { isValidElement } from 'react';
import { useFetchGifts } from '../hooks/useFetchGifts';
import { GiftItem } from './GiftItem';



export const GiftGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifts(category);
    // console.log(isLoading);

    return (
        <>

            <h3> {category} </h3>

            {
                isLoading && <h2> Cargando... </h2>

            }


            <div className='card-grid'>
                {
                    //                                         images.map(img => (
                    //                                          <li key={img.id}> {img.title} </li>
                    //                                  { D }   images.map(({id, title, url }) => (   
                    //                                          <li key={id}> {title} </li>
                    images.map((image) => (                     // Renderizado...
                        <GiftItem
                            key={image.id}
                            {...image}                          // Dristribuir todas las Props del Argumento images a travez FCB               
                        />
                    ))

                }


            </div>



        </>
    )
}
