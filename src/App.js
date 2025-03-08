import './App.css';
import Header from './header';
import Content from './content';
import Footer from './footer';

import AddItem from './Additems'; // Importing correctly
import Searchitem from './SearchItems';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([
   
    
  ]);

  const [newItem, setNewItem] = useState(JSON.parse(localStorage.getItem('shoppinglist')));
  const [search,setsearch]=useState('');

  // Fixed function to add a new item
  const addNewItem = () => {
    if (!newItem.trim()) return; // Prevent empty items

    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item: newItem }; // Fixing the property name
    const updatedList = [...items, myNewItem];
    setItems(updatedList);
    setNewItem(""); 
    localStorage.setItem("groceryItems", JSON.stringify(updatedList))// Clearing input field
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewItem(); // Calls addNewItem() on form submit
  };

  return (
    <div className="App">
      <Header Title="Groceries" />
      
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit} // Pass function properly
      />
      <Searchitem
      search={search}
      setsearch={setsearch}/>
     <Content 
        items={items.filter(item => 
          item.item.toLowerCase().includes(search.toLowerCase())
        )} 
        setItems={setItems} 
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
