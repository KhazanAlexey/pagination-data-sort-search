import React, { useEffect, useState, useMemo } from "react";
import { TableHeader, Pagination, Search } from "../../components/DataTable/index";
import Header from "../../Header/index";

// import useFullPageLoader from "../../hooks/useFullPageLoader";

const DataTable = () => {
    const [comments, setComments] = useState([]);
    // const [loader, showLoader, hideLoader] = useFullPageLoader();
    // const [totalItems, setTotalItems] = useState(0);
    const [totalItems, setTotalItems]=useState(0)
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");

    const [sorting, setSorting] = useState({ field: "", order: "" });

    const ITEMS_PER_PAGE = 20;

    const headers = [
        { name: "No#", field: "id", isSortable: false },
        { name: "Name", field: "name", isSortable: true },
        { name: "Email", field: "email", isSortable: true },
        { name: "Comment", field: "body", isSortable: false }
    ];

    useEffect(() => {
        const getData = () => {
            // showLoader();

            fetch("https://jsonplaceholder.typicode.com/comments")
                .then(response => response.json())
                .then(json => {
                    // hideLoader();
                    setComments(json);
                    console.log(json);
                });
        };

        getData();
    }, []);

    const commentsData = useMemo(() => {
        let computedComments = comments;

        if (search) {
            computedComments = computedComments.filter(
                comment =>
                    comment.name.toLowerCase().includes(search.toLowerCase()) ||
                    comment.email.toLowerCase().includes(search.toLowerCase())
            );
        }

        setTotalItems(computedComments.length);

        //Sorting comments
        if (sorting.field) {
            const reversed = sorting.order === "asc" ? 1 : -1;
            computedComments = computedComments.sort((a, b) => {
                return (
                    reversed * a[sorting.field].localeCompare(b[sorting.field])
                );
            });
        }

        //Current Page slice
        return computedComments.slice(
            (currentPage - 1) * ITEMS_PER_PAGE,
            (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
        );
    }, [comments, currentPage, search, sorting]);

    const onSorting = (field, order) => {
        setSorting(sort => {
            return {
                ...sort,
                field,
                order
            };
        });
    };

    return (
        <>
            <Header title="Building a data table in react" />

            <div className="row w-100">
                <div className="col mb-3 col-12 text-center">
                    <div >
                            <Pagination
                                total={totalItems}
                                itemsPerPage={ITEMS_PER_PAGE}
                                currentPage={currentPage}
                                onPageChange={page => setCurrentPage(page)}
                            />
                        <div className="col-md-6 d-flex flex-row-reverse">
                            <Search
                                onSearch={value => {
                                    setSearch(value);
                                    setCurrentPage(1);
                                }}
                            />
                        </div>
                    </div>
                    <table className="table table-striped">
                       <TableHeader headers={headers} onSorting={onSorting}/>
                        <tbody>
                            {commentsData.map(comment => (
                                <tr>
                                    <th scope="row">{comment.id}</th>
                                    <td>{comment.name}</td>
                                    <td>{comment.email}</td>
                                    <td>{comment.body}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/*{loader}*/}
        </>
    );
};

export default DataTable;
