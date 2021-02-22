import "./Appli.scss";
import Entete from "./Entete.jsx";
import ListeProduits from "./ListeProduits";
import PiedDePage from "./PiedDePage";
import useLocalStorageState from "./hooks/useLocalStorageState";
import { Switch, Route } from "react-router-dom";
import Accueil from "./Accueil";
import Apropos from "./Apropos";
import Contact from "./Contact";

export default function Appli() {
  const etatPanier = useLocalStorageState({}, "panier");

  return (
    <div className="Appli">
      <Entete etatPanier={etatPanier} />

      <section className="contenuPrincipal">
        <Switch>
          <Route exact path="/">
            <Accueil />
          </Route>
          <Route exact path="/nos-produits">
            <ListeProduits etatPanier={etatPanier} />
          </Route>
          <Route exact path="/a-propos-de-nous">
            <Apropos />
          </Route>
          <Route exact  path="/contactez-nous">
            <Contact />
          </Route>
        </Switch>
      </section>

      <PiedDePage />
    </div>
  );
}
