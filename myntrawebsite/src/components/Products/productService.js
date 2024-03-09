import axios from 'axios';

export let dataServiceObj = 
{
    getAllproducts,
    addproduct,
    deleteproduct,
    getproductbyid,
    updateById,
    getproductsbycategory
};

let url = "http://localhost:3500/products/";

function getAllproducts(catId = null)
{
    if (catId !== null) {
        url = `http://localhost:3500/products?catid=${catId}`;
    }
    return axios.get(url);
}

function addproduct(prodObj)
{
    return axios.post(url, prodObj);
}

function deleteproduct(pno)
{
    return axios.delete(url + pno);
}

function getproductbyid(pno)
{
    return axios.get(url + pno);
}

function updateById(prodObj,id){
    return axios.put(url+id,prodObj);
}

function getproductsbycategory(id){
    return axios.get(url+id);
}