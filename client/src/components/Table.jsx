import React from "react";
import s from "./Table.module.css"

export const Table = ({ item, number }) => {
    return (
        <div className={ s.row }>
            <div className={ s.cell_item }>{item}:</div><div className={ s.cell_value }>{number}</div>
        </div>
    )
};
