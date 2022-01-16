import SingleHero from './SingleResult'
import "../Style/style.css";

const Results = ({ copy, items, loading,error,}) => {

    return (<div className='comics'>
     {items.data.results.map((dati) => (
       <SingleHero key={dati.id} dati={dati} copy={copy} />
     ))}
    </div>
    );

}

export default Results; 