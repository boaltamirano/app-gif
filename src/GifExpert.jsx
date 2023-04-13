import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpert = () => {
    const [categories, setCategories] = useState(['One']);

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
            {categories.map(category => (
                <GifGrid 
                    key={category}
                    category={category}
                />
            ))}
        </>
    )
}

