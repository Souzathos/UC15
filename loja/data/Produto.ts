interface Produto {
    id: string
    titulo: string
    preco: number
}

// Simula os dados que viriam de uma API
export const produtos: Produto[] = [
    { id: '1', titulo: 'Produto 1', preco: 10.99 },
    { id: '2', titulo: 'Produto 2', preco: 19.99 },
    { id: '3', titulo: 'Produto 3', preco: 5.99 },
]