// Эта системная функция должна вызываться отдельно, приватно.
// Она по умолчанию подключится к window, но с webpack будет работать.
function createModal(options) {
    const modal = document.createElement('div');
    modal.classList.add('vmodal');
    modal.insertAdjacentHTML('afterbegin', `
        <div class="modal-overlay">
            <div class="modal-window">
                <div class="modal-header">
                    <span class="modal-title">Modal title</span>
                    <span class="modal-close">&times;</span>
                </div>
                <div class="modal-body">
                    <p>Lorem ipsum dolor sit.</p>
                    <p>Lorem ipsum dolor sit.</p>
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
    const $modal = createModal(options)

    return {  // Пример замыкания
        open() {
            $modal.classList.add('open') // Добавляем класс open
        }, // Визуализацию лучше делать через css, это наиболее быстрый путь
        close() {
            $modal.classList.remove('open') // Добавляем класс open
        }, // Визуализацию лучше делать через css, это наиболее быстрый путь
        destroy() {} // Не позволяет приложению работать медленно, очень важный метод
    }
}