import React, { useState, useEffect } from "react";

const Header = ({headers,onSorting}) => {
const [sortingFields,setSortingFields]=useState('')
const [sortingOrder,setSortingOrder]=useState('asc')
    const onSortingChange=(field)=>{
const order=field===sortingFields&&sortingFields==='asc'?'desc':'asc'
    setSortingFields(field)
        setSortingOrder(order)
        onSorting(field,order)
    }
    return (
        <thead>
            <tr>
                {headers.map(({name,field,isSortable})=> <th key={name} onClick={()=>isSortable?onSortingChange(field):null}>
                    {name}
                    {sortingFields&&sortingFields===field&&(<div>up!</div>
                    )}
                </th>)}

            </tr>
        </thead>
    );
};



export default Header;
