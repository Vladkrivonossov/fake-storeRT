import { Product } from '../components/Product';
import React, {useContext} from 'react';
import { useProducts } from '../hooks/products';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import Modal from '../components/Modal';
import CreateProduct from '../components/CreateProduct';
import {IProduct} from '../models'
import { ModalContext } from '../context/ModalContext';

export default function ProductPage() {
    const { products, loading, error, addProduct } = useProducts()
    const {modal, open, close} = useContext(ModalContext)

    const createHandler = (product: IProduct) => {
    close()
    addProduct(product)
    }

    return (
        <div className='container mx-auto max-w-2xl pt-5'>
         {error && <ErrorMessage error={error} />}
         {loading && <Loader />}
        { products.map(product => <Product product={product} key={product.id} />) }

         {modal && <Modal title='Create new product' onClose={close}>
            <CreateProduct onCreate={createHandler} />
        </Modal>}
        <button 
            onClick={open}
             className='fixed p-6 px-9 bottom-5 right-5 rounded-full bg-green-800 text-white text-2xl'
        >+</button>
        </div>
    );
}
