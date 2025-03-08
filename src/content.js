import './css/Content.css'
import Itemlist from './itemlist'




function Content({items,setItems}){
    
   
    const handleCheck = (id) => {
        const updatedItems = items.map(item => 
          item.id === id ? { ...item, checked: !item.checked } : item
        );
        setItems(updatedItems);
        localStorage.setItem("groceryItems", JSON.stringify(updatedItems)); 
      };
    const handledelete=(id)=>{
       const ListItem=items.filter((x)=>x.id!==id);
       setItems(ListItem);
       localStorage.setItem("groceryItems", JSON.stringify(ListItem)); 
    }
 
      return(
        <main>
            {items.length?(
                <Itemlist 
                items={items}
                handleCheck={handleCheck}
                handledelete={handledelete}/>
            ):(
                <p>your List is Empty</p>
            )}
            
           

           
        </main>
      )
      
}
export default Content