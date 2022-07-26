import React, { useState } from 'react'
import { IProduct } from '../models'

interface ProductProps {
    product: IProduct;
}

export function Product({ product }: ProductProps) {
    const [details, setDetails] = useState(false)

    const btnBgClassName = details ? 'bg-red-400' : 'bg-blue-400'
    const btnClasses = ['py-2 px-4 border', btnBgClassName]


    return (
        <div className='border py-2 px-4 rounded flex flex-col items-center mb-2'>
            <img 
            src={product.image} 
            alt={product.title} 
            className='w-1/6'
            />
            {product.title}
            <p>{product.price}</p>
            <button 
            className={btnClasses.join(' ')}
            onClick={() => setDetails(!details)}
            >
                {details ? 'Hide description' : 'Show description'}
            </button>
            {details && <div>
                <p>{product.description}</p>
                <p>Rate: <span style={{ fontWeight: 'bold', color: '#FFD700' }}>{product.rating?.rate}</span></p>
            </div>}
        </div>
    )
}