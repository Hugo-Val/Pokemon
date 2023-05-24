import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage } from "../../redux/actions/actions";
import styles from "./Paginate.module.css";

export default function Paginate({qtyPages}) {
    const dispatch = useDispatch();
    const { currentPage } = useSelector(state => state);

    function next() {
        dispatch(nextPage())
    }

    function prev() {
        dispatch(prevPage())
    }

    return (
        <div className={styles.paginate}>
            {
                currentPage > 1 ? (
                    <div>
                        <button onClick={prev}>Prev</button>
                        <p>{currentPage - 1}</p>
                    </div>
                ) : null
            }
            <h3>{currentPage}</h3>
            {
                currentPage < qtyPages ? (
                    <div>
                        <p>{currentPage + 1}</p>
                        <button onClick={next}>Next</button>
                    </div>
                ) : null
            }
        </div>
    )
}
