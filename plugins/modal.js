// Эта системная функция должна вызываться отдельно, приватно.
// Она по умолчанию подключится к window, но с webpack будет работать.
function _createModal(options) {
    const DEFAULT_WIDTH = '600px'
    const modal = document.createElement('div');
    modal.classList.add('vmodal')
    modal.insertAdjacentHTML('afterbegin', `
        <div class="modal-overlay" data-close="true">
            <div class="modal-window" style="width: ${options.width || DEFAULT_WIDTH}">
                <div class="modal-header">
                    <span class="modal-title">${options.title || 'Окно'}</span> 
                    ${options.closable ? `<span class="modal-close" data-close="true">&times;</span>` : ''} 
                </div>
                <div class="modal-body"> 
                    ${options.content || ''}  
                </div>
                <div class="modal-footer">
                    <button>Ok</button>
                    <button>Cancel</button>
                </div>
            </div>
        </div>
    `)
    document.body.appendChild(modal)
    return modal
}

$.modal = function(options) { // Работа с замыканием
    const ANIMATION_SPEED = 200
    const $modal = _createModal(options)
    let closing = false // Через let, т.к. мы будет менять
    let destroyed = false // Чистка события после открытия и закрытия

    const modal = {
        open() {
            if (destroyed) { // Если destroyed в значении true, тогда мы не запускаем метод open
                return console.log('Modal is destroyed')
            }
            !closing && $modal.classList.add('open') // Добавляем класс open
        }, // Визуализацию лучше делать через css, это наиболее быстрый путь
        close() { // Вызываем метод close, который вызывает метод hide, который при завершении анимации закрытии модального окна, сам удалится
            closing = true
            $modal.classList.remove('open') // Добавляем класс open
            $modal.classList.add('hide')
            setTimeout(() => {
                $modal.classList.remove('hide')
                closing = false
            }, ANIMATION_SPEED)
        }, // Визуализацию лучше делать через css, это наиболее быстрый путь
    }

    const listener = event => {
        if (event.target.dataset.close) { // При нажатии кнопки close срабатывает событие close из return ниже
            // А т.к. объект close находится ниже по коду, значит вызывается позже: то мы создаем выше этой строки const modal
            // Переносим строки с методами open и close в строку выше с const modal, временно удаляем метод destroy
            modal.close()
        }
    }

    $modal.addEventListener('click', listener) // Прослушка события по клику

    return Object.assign(modal, {
        destroy() { // Чистка события после открытия и закрытия - удаление Node из ноддерева
            $modal.parentNode.removeChild($modal) // После этого добавляем небольшую защиту в начале функции let destroyed = false
            $modal.removeEventListener('click', listener) // Не будет утечек памяти, если мы уничтожаем наше модальное окно
            destroyed = true
        }
    })  // Пример замыкания
}