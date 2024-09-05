import { useState } from "react"

export default function Filters(){
    const [minPrice, setMinPrice] = useState(0);
    const handlePriceChange = (event) => {
        setMinPrice(event.target.value); //esta funcion asume que la usara un input de tipo range
    }
    return(
        <section className="filters">
            <div>
                <label htmlFor="price">Price:</label>
                <input 
                id="price" 
                type="range" 
                min={0} 
                max={1000}
                value={minPrice}
                onChange={handlePriceChange}>
                </input>
                <span>${minPrice}</span>
            </div>
            <div>
                <label htmlFor="Category">Category:</label>
                <select id="Category">
                    <option value= "all">All</option>
                    <option value= "all1">All</option>
                    <option value= "all2">All</option>
                    <option value= "all3">All</option>
                    <option value= "all4">All</option>
                </select>
            </div>
            
        </section>
    )
}