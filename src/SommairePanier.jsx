import './SommairePanier.scss';

export default function SommairePanier({panier , affichable}) {

    const info = retournerInfoPanier(panier);

    return (
        <div className={`SommairePanier ${!affichable && 'cacher'}`}>
            <span>Articles différents : {info.nbArticles}</span>
            <span>Total # items : {info.totalItems}</span>
            <span>Sous-total : {info.st}</span>
            <span>TPS : {info.tps}</span>
            <span>TVQ : {info.tvq}</span>
            <span>Total : {info.total}</span>
        </div>
    )
}

function retournerInfoPanier(pan) {
    const tabArticles = Object.values(pan);
    let info = {
        nbArticles: 0,
        totalItems: 0,
        st: 0,
        tps: 0,
        tvq: 0,
        total: 0,
    };
    info.nbArticles = tabArticles.length;
    info.totalItems = tabArticles.reduce((leTotal, article) => leTotal + article.qte ,0)
    const st = tabArticles.reduce((leTotal,article)=> leTotal + (article.prix * article.qte) ,0);
    info.st = st.toFixed(2);
    const tps = st * 0.05;
    info.tps = tps.toFixed(2);
    const tvq = st * 0.09975;
    info.tvq = tvq.toFixed(2);
    info.total = (st + tps + tvq).toFixed(2);

    return info;
}
