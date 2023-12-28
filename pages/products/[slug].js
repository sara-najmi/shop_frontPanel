import React from "react";
import ProductDetails from "../../components/ecommerce/ProductDetails";
import Layout from '../../components/layout/Layout';
import { server } from "../../config/index";
import { findProductIndex } from "../../util/util";

const ProductId = ({ product }) => {
    return (
        <>
        <Layout parent="Home" sub="Shop" subChild={product.title}>
            <div className="container">
                <ProductDetails product={product} />
            </div>
        </Layout>
        </>
    );
};



ProductId.getInitialProps = async (params) => {
    const request = await fetch(`http://localhost:8080/api/product/${params.query.slug}`);
    const data = await request.json();

    //const index = findProductIndex(data, params.query.slug);
    // console.log(params);

    return { product: data };
};

export default ProductId;
