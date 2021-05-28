import React, {useState} from "react";


const Search = (props) => {
    const [search, setSearch] = useState('')
    const onInputChange = (e) => {
        setSearch(e.target.value)
        props.onSearch(e.target.value)

    }
    return <input
        type={'text'}
        style={{width: '200px'}}
        placeholder={'search....'}
        onChange={onInputChange}
        value={search}/>
}
export default Search;
