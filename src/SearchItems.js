import './css/Searchitem.css'
const Searchitem=({search,setsearch})=>{
    return(
        <form className="searchform" onSubmit={(e)=>e.preventDefault()}>
            <label htmlFor="search">Search</label>
            <input
            id="search"
            type="text"
            role="searchbox"
            placeholder="Search Items"
            value={search}
            onChange={(e)=>setsearch(e.target.value)}

            >
                

            </input>

        </form>
    )
}
export default Searchitem