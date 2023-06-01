import { Link } from 'react-router-dom';
import styles from './Card.module.css';

export default function Card( props) {
    
    const { id, name, image, types } = props;
    return (
        <div className={styles.card}>
            <Link to={`/pokemons/${id}`}>
                <br />
                <h1 className={styles.names}>{name}</h1>
                <img className={styles.img} src={image} alt={name} />
                <div className={styles.types}>
                    {
                        types.map((type, i) => <p key={i}>{type}</p>)
                    }
                </div>
            </Link>
        </div>
    )
}