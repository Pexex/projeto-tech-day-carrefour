
// configurações para a solicitação
const config = {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
    headers: {
        'Accept': '/', 
        'Connection': 'keep-alive', 
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0 Safari/537.36',
        'Accept-Language': 'en-US;q=0.5,en;q=0.3',
        'Cache-Control': 'max-age=0', 
        'DNT': '1', 
        'Pragma': 'no-cache',
    },
};

//caminho para a api de produtos
const productSearchPath = 'https://mercado.carrefour.com.br/api/catalog_system/pub/products/search?fq=';

//caminho para a api de lojas
const storeSearchPath = 'https://mercado.carrefour.com.br/api/checkout/pub/regions?country=BRA&postalCode=';

//função para buscar os produtos
export async function getProducts(seller) {
    if (seller) {
        const productsResponse = await fetch(`${productSearchPath}${seller}`, config)
        .then (response => response.json());
    } else {
        return([]);
    }
}

//função para buscar a loja mais próxima
export async function getSeller(postalCode) {
    if (postalCode) {
        const sellersResponse = await fetch(`${storeSearchPath}${postalCode}`)
        .then (response => response.json());

        const nearestSeller = sellersResponse['0'].sellers.get(0).id;
        return (nearestSeller);
    }
    else{
        return ([]);
    }
}