interface Produto {
    id: string
    titulo: string
    preco: number
    image: string
}

// Simula os dados que viriam de uma API
export const produtos: Produto[] = [
    { id: '1', titulo: 'Produto 1', preco: 10.99, image: 'https://static.netshoes.com.br/produtos/camisa-internacional-colorado-ii-masculina/16/0LL-02AY-016/0LL-02AY-016_zoom1.jpg?ts=1789471023' },
    { id: '2', titulo: 'Produto 2', preco: 19.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT82_8eMzHaC1ZT_9A3Ly3lmAkUjZjnD8Vwd3eQQbitH0_80AUGuP554nP5&s=10' },
    { id: '3', titulo: 'Produto 3', preco: 5.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMKRuLy2Aq5377AgJ710PVhRX0KWgZtuYoXHRVu2rhiHxgoiBPYB83fJs&s=10' },
]