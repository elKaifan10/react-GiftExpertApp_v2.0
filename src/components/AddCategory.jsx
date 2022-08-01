import { useState } from 'react';


// Este componente hijo es un <input text>. solo necesita 2 estados.
// El que esta buscando gifts y el que limpia el <input Text>.

export const AddCategory = ({ onNewCategory }) => {                     // componente AddCategory. Recibe las ({ props }) del comp. Padre GiftExpertApp.          

    const [inputValue, setInputValue] = useState('');                   // Hook useState inicializado con ' '. 


    const onInputValue = ({ target }) => {                              // FF factorizado el argumento ({event.target}).                  
        setInputValue(target.value)                                     // targe.value es el value del <input text=" " />.       
        // setInputValue estado busqueda
    }


    const onSubmit = (event) => {                                       // FF del evento Submint del <form>.           
        event.preventDefault();                                         // Prevenir el refresh del navegador.              
        if (inputValue.trim().length <= 1) return;                      // Prevenir las busquedas en blanco y busquedas de mas de 2 caracteres.


        // setCategories(categories => [inputValue, ...categories])        // Prop ({ setCategories }). Se inserta el nuevo inpuValue seguido de las categories anteriores.   
        onNewCategory(inputValue.trim());
        setInputValue('');                                                 // setInputValue estado limpiar. Refresca el <input text>.      
    }



    return (
        // nO NECESITA FRACTALES <> </> por que va dentro del <form>.   

        <form onSubmit={onSubmit}>                                {/*// se llama la F onSubmit */}


            <input
                type="text"                                         // Tipo de input.                       
                placeholder="Buscar gifts..."                       // Sombra en el TextField.           
                value={inputValue}                                  // valor del estado del Hook useState.                
                onChange={onInputValue}                             // OnChange Necesario para poder escribir el cambio de estado del useState Hook. Aatravez de FF onInputValue.            
            />
        </form>


    )
}
