import './css/Additems.css'
const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
    return (
      <form className="addform" onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input 
          autoFocus
          id="addItem"
          type="text"
          placeholder="Add Item"
          required
          value={newItem} // Controlled input
          onChange={(e) => setNewItem(e.target.value)} // Updates state
        />
        <button type="submit">Add</button>
      </form>
    );
  };
  
  export default AddItem;
  