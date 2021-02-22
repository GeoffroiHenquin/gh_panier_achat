import './ListeProduits.scss';
import Produit from "./Produit";
import tabProduits from './data/produits.json';

export default function ListeProduits({etatPanier}) {

  return (
    <div className="ListeProduits">
      <h2>Produits disponibles</h2>
      <ul>
        
        {tabProduits.map(prd => 
         <Produit etatPanier={etatPanier} key={prd.id} nom={prd.nom} prix={prd.prix} id={prd.id} />
        )}
      </ul>
    </div>
  );
}