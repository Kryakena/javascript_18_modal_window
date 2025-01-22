const fruits = [
    {id: 1, title: 'Яблоки', price: 20, img: 'https://петромост.рф/upload/product_images/73044.jpg'},
    {id: 2, title: 'Апельсины', price: 30, img: 'https://петромост.рф/upload/product_images/98246.jpg'},
    {id: 3, title: 'Манго', price: 40, img: 'https://петромост.рф/upload/product_images/05406.jpg'},
]

const modal = $.modal({ // Создаем объект {}
    title: 'Vladilen Modal',
    closable: true, // Чтобы модальное окно могло закрываться
    content: `
        <h4>Modal is working</h4>
        <p>Lorem ipsum dolor sit.</p>
    `,
    width: '400px',
    footerButtons: [
        {text: 'Ok', type: 'primary', handler() {
            console.log('Primary btn clicked')
            modal.close()
            }},
        {text: 'Cancel', type: 'danger', handler() {
                console.log('Danger btn clicked')
                modal.close()
            }}
    ]
})