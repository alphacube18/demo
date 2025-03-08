import {FaTrashAlt} from 'react-icons/fa'
const Itemlist=( {items,handleCheck,handledelete})=>{
    return(
        <ul>
        {items.map((item)=>(
            <li className='item' key={item.id}>
                <input 
                type='checkbox'
                onChange={()=>handleCheck(item.id)}
                checked={item.checked}

                    ></input>
                <label onDoubleClick={()=>handleCheck(item.id)}>{item.item}</label>
                <FaTrashAlt role="button"
                onClick={
                    ()=>handledelete(item.id)
                }
                tabIndex="0"
                aria-label={`Delete${items.item}`}/>
            </li>
        ))}
    </ul>
    )
    

}
export default Itemlist