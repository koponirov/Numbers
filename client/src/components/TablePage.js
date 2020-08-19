import React, {useState} from 'react';
import {useHttp} from "../hooks/http.hook";
import {Table} from "./Table";
import s from "./Table.module.css"


export const TablePage = () => {
    console.log('render')
    const [averageValues, setAverageValues] = useState([]);
    const {loading, request} = useHttp();

    const fetchDataHandler = async () => {

        try {
            const data = await request('/api/table');

            setAverageValues(data)


        } catch (e) {
            console.log(e.message)
        }
    }

    const table = averageValues.map(n => {
        debugger
        return <Table key={n.item} item={n.item} number={n.average_num}/>
    });

    return (
        <div className={s.container}>
            <header className={s.header}> calculation of average values</header>
            <button className={s.btn} onClick={fetchDataHandler} disabled={loading}>
                {averageValues.length > 0 ? 'Recalculate average values' : 'Calculate average values'}
            </button>
            <div className={s.table}>
                <div>RESULTS</div>
                <div>{table}</div>
            </div>
        </div>
    )
};
