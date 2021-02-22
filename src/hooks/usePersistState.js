import {useState, useEffect} from 'react'

export default function usePersistState(valeurParDefaut,etiquetteLS){
    const [valeur,setValeur] = useState(
        ()=>{
            return JSON.parse(window.localStorage.getItem(etiquetteLS)) || valeurParDefaut;
        }
    );

    useEffect(()=>window.localStorage.setItem(etiquetteLS,JSON.stringify(valeur)),[valeur]);

    return [valeur,setValeur];
}