import BtnAjoutPanier from "./BtnAjoutPanier";
import "./Produit.scss";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

export default function Produit({ prix, id, etatPanier, nom }) {
  const [panier, setPanier] = etatPanier;

  function ajoutPanier() {
    if (panier[id]) {
      panier[id].qte++;
    } else {
      panier[id] = { nom: nom, prix: prix, qte: 1 };
    }
    setPanier({ ...panier });
  }

  return (
    <li className="Produit">
      <img src={"images-produits/" + id + ".webp"} alt="" />
      <div className="info">
        <p className="nom">{nom}</p>
        <p className="prix">{prix}</p>
      </div>
      <BtnAjoutPanier
        onClick={ajoutPanier}
        qte={panier[id]?.qte || 0}
        texte={
          panier[id]?.qte > 0 ? <AddShoppingCartIcon /> : "Ajouter au panier"
        }
        classeCss={panier[id]?.qte > 0 && 'rouge'}
      />
    </li>
  );
}
