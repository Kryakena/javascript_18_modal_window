const fruits = [
    {id: 1, title: 'Яблоки', price: 20, img: ''},
    {id: 2, title: 'Апельсины', price: 30, img: ''},
    {id: 3, title: 'Манго', price: 40, img: ''},
]

const modal = $.modal({ // Создаем объект {}
    title: 'Vladilen Modal',
    closable: true, // Чтобы модальное окно могло закрываться
    content: `
        <h4>Modal is working</h4>
        <p>Lorem ipsum dolor sit.</p>
    `,
    width: '400px'
})