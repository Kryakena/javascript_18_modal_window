const fruits = [
    {id: 1, title: 'Яблоки', price: 20, img: 'https://петромост.рф/upload/product_images/73044.jpg'},
    {id: 2, title: 'Апельсины', price: 30, img: 'https://петромост.рф/upload/product_images/98246.jpg'},
    {id: 3, title: 'Манго', price: 40, img: 'https://петромост.рф/upload/product_images/05406.jpg'},
]

const toHTML = fruits => `
    <div class="col">
            <div class="card">
                <img class="card-img-top" style="height: 300px;" src="${fruit.img}" alt="${fruit.title}">
                <div class="card-body">
                    <h5 class="card-title">${fruit.title}</h5>
                    <a href="#" class="btn btn-primary" data-btn="price">Посмотреть цену</a>
                    <a href="#" class="btn btn-danger">Удалить</a>
                </div>
            </div>
    </div>
`

function render() {
    const html = fruits.map(toHTML)
    document.querySelector('#fruits').innerHTML = html
}

render()

const priceModal = $.modal({ // Создаем объект {}
    title: 'Цена на Товар',
    closable: true, // Чтобы модальное окно могло закрываться
    width: '400px',
    footerButtons: [
        {text: 'Закрыть', type: 'primary', handler() {
           priceModal.close()
        }}
    ]
})

document.addEventListener('click', event => {
    event.preventDefault()
    const btnType = event.target.dataset.btn

    if (btnType === 'price') {
        priceModal.open() // открыть модальное окно при нажатии
    }
})