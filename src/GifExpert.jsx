import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpert = () => {
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) =>{
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
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
