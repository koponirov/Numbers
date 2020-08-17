import React from 'react';
import { useState } from 'react';
import { useHttp } from "../hooks/http.hook";

export const TablePage = () => {

    const [nums,setNums] = useState([]);
    const { loading, request } = useHttp();

    const fetchDataHandler = async () => {

        try{
            const data = await request('/api/table');
            let value =
            setNums([(data[0]).average]);
            debugger
            column1.push(nums.map(n => n.average))

        } catch (e) {console.log(e.message)}
    }

    const column1 = [];

    return (
        <div>
            <p> Table page works </p>
            <p>{column1}</p>

            <button onClick={fetchDataHandler} disabled={loading}>
                Get request
            </button>
        </div>
    )
};
