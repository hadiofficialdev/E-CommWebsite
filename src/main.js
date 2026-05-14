import './style.css';
import "./darktheme";

import products from "./api/products.json";
import { showProductContainer } from './homeProductCards';


console.log(products);
showProductContainer(products);

