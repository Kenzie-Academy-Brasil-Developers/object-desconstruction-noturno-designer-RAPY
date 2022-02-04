const itemArray = [{
        id: 1,
        product: "Pão",
        price: 5.80,
        quantity: 3,
        section: "Padaria"
    },
    {
        id: 2,
        product: "Leite",
        price: 3.00,
        quantity: 1,
        section: "Derivados de Leite"
    },
    {
        id: 3,
        product: "Carne",
        price: 10.00,
        quantity: 2,
        section: "Carne"
    },
    {
        id: 4,
        product: "Tomate",
        price: 4.00,
        quantity: 5,
        section: "Hortifruti"
    },
]

let carteiras = [{
        dinheiro: 100.00,
        credito: 50.00,
        cartao: 1000.00
    },
    {
        dinheiro: 10.00,
        credito: 120.00,
        cartao: 0.00
    },
    {
        dinheiro: 100.00,
        credito: 10.00,
        cartao: 10.00
    }
]

carteiras = carteiras.map(obj => {

    let { credito } = obj;

    credito = 100;

    return {...obj, credito };
})

// ---- ALTERAR PRICE QUANDO O ID É MAIOR QUE 2 --------

const testMap = (array) => {

    const result = array.map((value) => {
        let { id, price } = value // Neste ponto desconstruirmos o objeto para armazenar as propriedades, id e price.
        if (id > 2) { // Aqui é validado se o id é maior que 2

            // Altere o valor da propriedade price para 2.00 dos índices com id's maior que 2
            price = 2.00;

        }
        return {...value, price } // Nesta etapa utilizamos o spread(...), para remontar o objeto e passamos a propriedade que foi alterada
    })

    return result // Por fim é retornado um array de objetos, com as propriedades alteradas
}


/*
[
    { id: 1, product: "Pão", price: 5.8, quantity: 3, section: "Padaria" },
    { id: 2, product: "Leite", price: 3, quantity: 1, section: "Derivados de Leite" },
    { id: 3, product: "Carne", price: 2, quantity: 2, section: "Carne" }
];
*/

//Retornar apenas os itens que possuem id <= 2
//Retornar o valor da variável result


const testFilter = (array) => {
    const result = array.filter(({ id }) => {
        // retorne apenas os itens que possuem id <= 2
        if (itemArray.id >= 2) {
            return {...id }
        }
        // retorne a variável result onde contem os resultados das filtragens
    })
    return result
}

// Retornar apenas o item onde product === 'Leite'
// Retornar o valor da variável result

const testFind = (array) => {


    const result = array.find(({ id, product }) => {
        // retorne apenas o item onde product === 'Leite' 
        if (product === 'Leite') {
            return {...id, ...product }
        }
    })

    // retorne a variável result onde contem os resultados das buscas
    return result
}


// Incrementar a variável acc, com o resultado de price*quantity.
// Retornar o valor armazenado em acc.
// Retornar o valor de totalList.

const testReduce = (array) => {

    const totalList = array.reduce((acc, { quantity, price }) => {
        // incremente a variável acc, com o valor de price*quantity
        acc += price * quantity

        // retorne o valor armazenado em "acc" que neste caso é o valor total da compra
        return acc
    }, 0)

    // retorne o valor de totalList para verificar quanto ficou sua compra
    return totalList
}

// Desafio
// Crie um filtro onde o resultado traz apenas os itens que tem o price maior que 3.
const filterValue = () => {
        const result = array.filter(({ id, value }) => {
            if (value > 3) {
                return {...id, ...value }
            }
        });

        return result
    }
    // Altere o valor do item leite para 4.
const updateValue = (array) => {
    const newMilk = array.map((itemValue) => {
        let { product, value } = itemValue;
        if (product === 'Leite') {
            price = 4
        }
        return {...itemValue, value }
    });

    return newMilk
}

// Faça o total de todos os itens da section 'Padaria'
const totalsection = (array) => {
    const padaria = array.filter(({ id, section }) => {
        if (section === 'Padaria') {
            return {...id }
        }
    });

    const total = padaria.reduce((acc, { price, quantity }) => {
        acc += price * quantity
        return acc
    }, 0);

    return total
}