$.confirm = function(options) {
    return new Promise((resolve, reject) => {
        const modal = $.modal({
            title: options.title,
            width: '400px',
            closable: false, // мы можем закрыть окно, только при нажатии кнопки "Удалить" или "Отменить"
            content: options.content,
            onClose() { // когда он открывается, мы будем модалку уничтожать
                modal.destroy()
            },
            footerButtons: [
                {text: 'Отмена', type: 'secondary', handler() {
                        modal.close()
                        reject() // отмена
                    }},
                {text: 'Удалить', type: 'danger', handler() {
                        modal.close()
                        resolve() // при удалении подтвердить
                    }}
            ]
        })

        setTimeout(() => modal.open(), 100) // закрытие всех открытых модальных окон каждые 100 миллисекунд
    })
}