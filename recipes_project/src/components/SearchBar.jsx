const SearchBar = (props) => {

    console.log(props)

    return (
        <div>
            <h3>Search recipes:</h3>
            <form onSubmit={props.handleSubmit}>
                <input type='text' name={'search'} placeholder={'search'}
                       onChange={props.handleChange}/>
                <button>Search</button>       
            </form>
        </div>
    )
}

export default SearchBar