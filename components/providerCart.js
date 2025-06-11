import {createContext, useContext, useEffect, useState} from "react";
import {auth, bank} from "../controller";
import {doc, setDoc, getDoc} from 'firebase/firestore';
import { onAuthStateChanged } from "firebase/auth";

const carrinhoContext = createContext();

export function ProvideCart({children}){
    const [carrinho, Setcarrinho] = useState([]);
    const [usuario, Setusuario] = useState(null);
    const [carregandoCarrinho, SetcarregandoCarrinho] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) =>{
            Setusuario(user);
            SetcarregandoCarrinho(true);


        if(user) {
            try {
                const docRef = doc(bank, 'carrinhos', user.uid);
                const docSnap = await getDoc(docRef);
                if(docSnap.exists()){
                    const dados = docSnap.data();
                    Setcarrinho(Array.isArray(dados.produtos) ? dados.produtos: []);
                }
                else {
                    Setcarrinho([]);
                }
            }
            catch(error){
                console.log("Erro no carrinho", error);
                Setcarrinho([]);
            }

        }
        else{
            Setcarrinho([]);// Senão fica vazio[]
        }
        SetcarregandoCarrinho(false);
    })
        return() => unsubscribe();
    }, []);

    useEffect(() => {
        async function salvarCarrinhoNoFirebase(lista) {
            if(!usuario || carregandoCarrinho){
                return;
            }

            try {
                const docRef = doc(bank, 'carrinhos', usuario.uid );
                await setDoc(docRef, {produtos:lista})
            }
            catch(error){
                console.log("Erro ao salvar no firebase", error);
            }
        }
        salvarCarrinhoNoFirebase(carrinho)
    }, [carrinho, usuario, carregandoCarrinho]);
    

    function adicionarProduto(produto){
        Setcarrinho((anterior) => [...anterior, produto]);
    }

    function adicionarProduto(produto){
        Setcarrinho((anterior) => Array.isArray(anterior)? [...anterior, produto] :[ produto]);
    }
    function removerProduto(index){
        const novaLista = [];

        Setcarrinho((estadoAnterior) => {
            for (let i = 0; i < estadoAnterior.length; i++ ){
                if (i !== index){
                    novaLista.push(estadoAnterior[i])
                }
            }
            return novaLista;
        })
    }

return(
    <carrinhoContext.Provider value={{carrinho,adicionarProduto, removerProduto}}>
        {children}
    </carrinhoContext.Provider>

    
)
}
export function useCarrinho(){
    return useContext(carrinhoContext);
}