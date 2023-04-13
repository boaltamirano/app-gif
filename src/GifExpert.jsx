import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpert = () => {
    const [categories, setCategories] = useState(['One', "Dragon"]);

    const onAddCategory = (newCategory) =>{
        if(categories.includes(newCategory)) return;
        setCategories([...categories, newCategory]);
    }

    return (
        <>
            <h1>Gif Expert </h1> 
            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value) }
            />
            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
            </ol>
        </>
    )
}

