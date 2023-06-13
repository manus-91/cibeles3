const products = [
    {
        id: "1",
        name: "Canelones",
        price: 1200,
        category: "Comida",
        img:"https://vod-hogarmania.atresmedia.com/hogarmania/images/images01/2019/07/02/5d1b045afa7dec0001ed7027/1239x697.jpg",
        stock:1000,
        description:"Canelones de verdura y carne con salsa"
    },
    {id:"2", name:"Carne al horno",price:1500,category:"Comida",img:"https://www.recetas-argentinas.com/base/stock/Recipe/81-image/81-image_web.jpg",stock:1000,description:"Carne al horno con papas"},
    {id:"3", name:"Pastel de carne",price:1000,category:"Comida",img:"https://recetasdecocina.elmundo.es/wp-content/uploads/2016/11/receta-pastel-de-carne.jpg",stock:1000,description:"Pastel de carne"},
    {id:"4", name:"Guiso de lentejas",price:800,category:"Comida",img:"https://cdn0.recetasgratis.net/es/posts/4/8/2/guiso_de_lentejas_74284_orig.jpg",stock:1000,description:"Guiso de lentejas"}

]

export const getProducts=()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        },500)
    })
}


export const getProductById=(productId)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod=>prod.id === productId))
        },500)
    })
}


