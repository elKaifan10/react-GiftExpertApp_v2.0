export const getGifts = async (category) => {                      // FF asyncrona

    const url = `https://api.giphy.com/v1/gifs/search?api_key=BkIyoGnrvPGlLg3GPiJrRqtivPZ91boz&q=${category}&limit=6`;
    const resp = await fetch(url);                  // Respuesta de la consulta asyncrona.
    const { data } = await resp.json();             // { D } data desde el body de la consulta. sale con formato .json().

    const gifts = data.map(img => ({                // [data]. FF regresa un objeto con las props que se necesitan. .    

        id: img.id,                                 // objeto ( Factorizado ).                                           
        title: img.title,                           // img es del argumaneto callBack de la FF.   
        url: img.images.downsized_medium.url,

    }));
    // console.log(gifts);
    return gifts;

}