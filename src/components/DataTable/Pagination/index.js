import React, { useEffect, useState, useMemo } from "react";
import Pagination from "react-bootstrap/Pagination";

export const   PaginationComponent = ({
    total = 0,
    itemsPerPage = 10,
    currentPage = 1,
    onPageChange
}) => {
    const [totalPage,setTotalPage]=useState(0)
    useEffect(()=>{
        if(total>0&& itemsPerPage>0){
            setTotalPage(Math.ceil(total/itemsPerPage))
        }
    },[ total,itemsPerPage])
    const paginationItems=useMemo(()=>{
        const pages=[]
        for (let i=1;i<totalPage;i++){
          pages.push(  <Pagination.Item active={i===currentPage} key={i} onClick={()=>{onPageChange(i)}} >{i}</Pagination.Item>)
        }
        return pages

    },[totalPage,currentPage])
    return    <Pagination >
            <Pagination.Prev onClick={() => {
            onPageChange(currentPage - 1)
        }} disabled={currentPage === 1}/>
        {paginationItems.map(p=><span>{p}</span>)}
    </Pagination>
};

export default PaginationComponent;
