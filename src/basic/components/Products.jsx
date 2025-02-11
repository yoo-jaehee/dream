import React, {useState, useEffect}  from 'react';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [checked, setChecked] = useState(false);
    const handlechange = () => setChecked(prev => !prev);

    
    useEffect(()=>{
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
        .then(res => res.json())
        .then(data => {
            setProducts(data);
    });
    return () => {};
   }, [checked]);

        return (
        <>
        <input id='checkbox' type="checkbox" value={checked} onChange={handlechange}></input>
        <label htmlFor='checkbox'>show only hot sale</label>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <article>
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>                        
                        </article>
                    </li>
                ))}
            </ul>
        </>
    );
}

