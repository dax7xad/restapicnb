import axios, { AxiosError, AxiosResponse } from 'axios';
import { Product } from '../../models/product.inteface';
import {  parseObjectToArray } from '../../utils/utils';
const URL = process.env.firebaseURL

export class ProductsServices {

    public async getProducts(idtoken: string = '') : Promise<Product[]> {
        try {
            const resProducts = (await axios.get(`${URL}/products.json`)).data;
            const products = parseObjectToArray(resProducts);
            return products
        } catch (error) {
            return [];
        }
    }

}