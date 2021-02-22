import './PiedDePage.scss';

export default function PiedDePage(props) {
  const annee = new Date().getFullYear();
  return (
    <footer className="PiedDePage">
      &copy;{annee} - TIM - Tous droits réservés.
    </footer>
  );
}