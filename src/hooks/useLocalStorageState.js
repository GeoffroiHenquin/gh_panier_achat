import {useState, useEffect} from 'react';

export default function useLocalStorageState(valeurInitiale, etiquetteLS) {

    const [valeur, setValeur] = useState(() => {
        return JSON.parse(window?.localStorage?.getItem(etiquetteLS)) || valeurInitiale;
      });
    
      useEffect(() => {
        window.localStorage.setItem(etiquetteLS, JSON.stringify(valeur));
      }, [valeur, etiquetteLS]);

    return [valeur, setValeur];
}