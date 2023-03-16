import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { fetchCategoriesAsync } from '../../store/categories/category.action';
import { useDispatch } from 'react-redux';

const Shop = () => {
    const dispatch = useDispatch();
    console.log('inside shop');
    useEffect(() => {
        console.log('before fetchCategoriesAsync');
        dispatch(fetchCategoriesAsync());
    }, [dispatch]) // to avoid warning, netlify deploy fails due to this
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />            
        </Routes>
    );
};

export default Shop;