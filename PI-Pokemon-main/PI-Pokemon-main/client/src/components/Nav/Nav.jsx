import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import { useDispatch } from "react-redux";
import { reset } from '../../redux/actions/actions';

export default function Nav({ onSearch }) {
    const dispatch = useDispatch();
    
    
    function handleClick() {
        dispatch(reset());
    }
    
    return (
        <nav className={styles.nav}>
        <Link to="/home">
            <button className={styles.button} onClick={handleClick}>Home</button>
        </Link>
        <br />
        <Link to="/createpokemon">
            <button className={styles.button}>Create a Pokemon</button>
        </Link>
        <br />
        <Link to="/about">
            <button className={styles.button}>About</button>
        </Link>
        <br />
        <SearchBar onSearch={onSearch} />
        </nav>
    );
}
