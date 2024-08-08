import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from '../../config/axios';
import { IProduct } from '../../interface/product';
import ProductItem from '../product-item/product-item';

type Props = {}

const Search = () => {
    const [search] = useSearchParams();
    const [products, setProducts] = useState<IProduct[]>([]);
    const [keywords, setKeywords] = useState<string>('');

    useEffect(() => {
        (async () => {
            const { data } = await api.get(`products?name_like=${search.get('keywords')}`);
            setProducts(data);
            setKeywords(search.get('keywords') || '');
        })();
    }, [search]);

    return (
        <div className="p-8 bg-gray-100">
            <h1 className="text-2xl mb-6 text-gray-800">
                Kết quả theo từ khóa: <b>{keywords}</b>
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product: IProduct) => (
                    <ProductItem key={product.id} product={product} keywords={keywords} />
                ))}
            </div>
        </div>
    );
};

export default Search;
