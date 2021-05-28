import React, { useState, useEffect } from "react";

const Header = (props) => {

    // const headers = [
    //     { name: "No#", field: "id", isSortable: false },
    //     { name: "Name", field: "name", isSortable: true },
    //     { name: "Email", field: "email", isSortable: true },
    //     { name: "Comment", field: "body", isSortable: false }
    // ];
    const [sortingField, setSortingField] = useState("");
    const [sortingOrder, setSortingOrder] = useState("asc");

    useEffect(() => {
        props.onSorting(sortingField, sortingOrder);
    }, [sortingField, sortingOrder]);

    const onSortChange = field => {
        setSortingField(field);
        setSortingOrder(order =>
            field === sortingField && order === "asc" ? "desc" : "asc"
        );
    };

    return (
        <thead>
            <tr>
                {props.headers.map(head => (
                    <HeaderItem
                        {...head}
                        key={head.field}
                        onSort={onSortChange}
                        sorting={
                            sortingField === head.field ? sortingOrder : null
                        }
                    />
                ))}
            </tr>
        </thead>
    );
};

const HeaderItem = ({ name, field, isSortable, onSort, sorting }) => {
    return (
        <th
            key={field}
            onClick={() => {
                return isSortable ? onSort(field) : null;
            }}
        >
            {name}
            {sorting === "asc" && (
                <span>
                    <i className="fas fa-arrow-down"></i>
                </span>
            )}
            {sorting === "desc" && (
                <span>
                    <i className="fas fa-arrow-up"></i>
                </span>
            )}
        </th>
    );
};

export default Header;
