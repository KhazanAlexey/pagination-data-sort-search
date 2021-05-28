import React, { useState, useEffect } from "react";

const Header = ({headers}) => {

    return (
        <thead>
            <tr>
                {headers.map(hed=> <th key={hed.field}>{hed.name}</th>)}

            </tr>
        </thead>
    );
};



export default Header;
