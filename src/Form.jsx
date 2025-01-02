import { useState } from "react";
import style from "./Form.module.css"
import React from "react";



function Form({newItem,setNewItem , addItem}){
    
 return(
<form className={style.Form} onSubmit={addItem}>
<input type="text" required value={newItem} onChange={(e)=> setNewItem(e.target.value)}>
</input>
<button type="submit">Add</button>
</form>
 );
  
}

export default Form;