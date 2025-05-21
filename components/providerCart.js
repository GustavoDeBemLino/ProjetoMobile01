import {createContext, useContext, useState} from "react";

const carrinhoContext = createContext();

export function ProvideCart({children}){
    const [carrinho, Setcarrinho] = useState([]);

    function adicionarProduto(produto){
        Setcarrinho((anterior) => [...anterior, produto]);
    }


return(
    <carrinhoContext.Provider value={{carrinho,adicionarProduto}}>
        {children}
    </carrinhoContext.Provider>

    
)
}
export function useCarrinho(){
    return useContext(carrinhoContext);
}