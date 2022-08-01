import { useState } from 'react';                                                   // Importar el useState Hook
import { AddCategory, GiftGrid } from './components';


export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['Nezuko']);     // Se debe inicializar el hook. en este caso es un  [].  
    // console.log(categories);                                                     // Se pueden tener muchos hooks y se identifica por su orden.                 

    const onAddCategory = (newCategory) => {
        // console.log(newCategory);
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);

        // setCategories(['Valorant', ...categories]);
        // setCategories(cat => [...cat, 'Valorant']);                                 // Usando el CallBack...
    };

    return (
        <>
            {/* Titulo */}
            <h1>Gift Expert App</h1>


            {/* Inputs */}
            <AddCategory
                // setCategories={setCategories} 
                onNewCategory={onAddCategory}
            />                                                                      {/* // Componente AddCategory Hijo manda las props */}


            {/* Listado de Gift  */}

            <ol>
                {

                    categories.map(category => (                                   // se hace un map del estado del Hook       
                        <GiftGrid
                            key={category}
                            category={category} />))
                }
            </ol>



        </>

    )
}
