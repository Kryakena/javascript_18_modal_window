# 🌌 Модальное окно 🌌

Источник: 
1. видео "Модальное окно на ЧИСТОМ JS + CSS. Урок 1"
https://vk.com/im/convo/19460369?entrypoint=list_all&z=video-101965347_456280389%2Fde64bf9eeff034ec99
2. видео "Модальное окно JS. События, Прототипы, Замыкания. Урок 2"
   https://vk.com/im/convo/19460369?entrypoint=list_all&z=video-101965347_456280390%2F341cb3abb9927b06b8 

![2025-01-16_11-45-21](https://github.com/user-attachments/assets/c7136a83-fe0e-4242-9e4d-95b44470f8f6)


https://github.com/user-attachments/assets/d1fb7288-5c25-4011-a697-5d9567436798


1. создаем создаем файлы index.html, modal.css (в папке css), base.js (для подключения плагинов в папке js) 
и index.js (ведется разработка, в папке js, подключается в самом конце после base.js) в папке проекта.

2. в файле index.html готовим шаблон

```html
<!-- Сообщаем браузеру, как стоит обрабатывать эту страницу -->
<!DOCTYPE html>
<!-- Оболочка документа, указываем язык содержимого -->
<html lang="ru">
<!-- Заголовок страницы, контейнер для других важных данных (не отображается) -->
<head>
    <!-- Заголовок страницы в браузере -->
    <title></title>

    <!-- Подключаем CSS -->
    <link rel="stylesheet" href="css/modal.css">
    <!-- Кодировка страницы -->
    <meta charset="utf-8">
    <!-- Адаптив -->
    <meta name="viewport" content="width=device-width">
</head>
<!-- Отображаемое тело страницы -->
<body>
<!-- Оболочка для демонстрации -->
<div class="wrapper">
    <!-- Контент -->

</div>
<!-- Подключаем файл JS скриптов -->
<script src="js/base.js"></script>
<script src="js/index.js"></script>
</body>
</html>
```

3. в файле modal.css без шаблона

```css

```

4. файл base.js без шаблона

```js

```

5. файл index.js без шаблона

```js

```

6. в файле index.html вставляем название проекта

```html
<title>Модальное окно</title>
```

7. в файле index.html в разделе head подключаем bootstrap 4 
(открытый и бесплатный HTML-, CSS- и JS-фреймворк для создания сайтов и веб-приложений),
чтобы не тратить время на заполнение стилей

```html
<!-- Подключаем CSS фреймворка bootstrap 4-->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
```

8. в файле index.html подключаем класс container

```html
<div class="container">
   <h1>JavaScript Практика</h1>
</div>
```

9. в файле index.html добавляем в данный container текст (набираем с новой строки "Lorem100" и нажимаем кнопку на клавиатуре "Tab")

```html
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cum dolores ex excepturi obcaecati sequi, velit. Accusamus aspernatur consequuntur dignissimos, facere id illo, ipsam magnam minima nobis obcaecati recusandae repellat veniam vero? Alias asperiores assumenda beatae blanditiis corporis deleniti dolor dolore, eligendi error facere inventore magni minus molestias nobis non quia quos similique sint. Enim minus odio placeat qui, sint suscipit? Amet nam necessitatibus quos. Aperiam delectus expedita fugit in ipsa, ipsum laudantium magnam minus, modi pariatur quas, quasi quos sapiente tenetur unde? Aut consequuntur, doloribus eaque earum ex in iusto laudantium mollitia nesciunt officiis quisquam tempore vero voluptate voluptatibus?</p>
```

10. в проекте создаем папку plugins и создаем в нем файл modal.js. Подключаем его в файле index.html
Важно! После подключенного скрипта base.js, чтобы в modal.js был доступен глобальный объект $

```html
<script src="plugins/modal.js"></script>
```

11. в modal.js создаем функцию для вызова модального окна

```js
// Эта системная функция должна вызываться отдельно, приватно.
// Она по умолчанию подключится к window, но с webpack будет работать.
function _createModal(options) {
    const modal = document.createElement('div');
    modal.classList.add('vmodal');
    modal.insertAdjacentHTML('afterbegin', ``)
}
```

12. в modal.js в функцию createModal вставляем шаблон модального окна (как в HTML)

```js
<div class="vmodal">
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
</div>
```

13. в modal.js в функции createModal из шаблона модального окна 
удаляем класс vmodal, т.к. мы уже создали его в данной функции "modal.classList.add('vmodal')".
И теперь функция будет выглядеть так:

```js
// Эта системная функция должна вызываться отдельно, приватно.
// Она по умолчанию подключится к window, но с webpack будет работать.
function _createModal(options) {
    const modal = document.createElement('div');
    modal.classList.add('vmodal')
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
}
```

14. в modal.js открытие и закрытие модального окна в консоли

в функции createModal
```js
return modal
```
в функции $.modal
```js
const $modal = createModal(options);
```

15. проверка: открываем в браузере проект, нажимаем F12, 
в консоли (Console) набираем "$.modal()", далее Enter на клавиатуре.
Получаем в консоли ответ: {open: ƒ, close: ƒ, destroy: ƒ}

![2025-01-12_14-01-40](https://github.com/user-attachments/assets/e2e238dd-629e-4146-9581-2b1dc82c7c8b)


16. в modal.js в функции createModal открытие и закрытие модального окна в браузере

```js
document.body.appendChild(modal)
```

15. в modal.css заполняем стандарт стилей для модального окна

```css
.modal-overlay {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
}

.modal-window {
    width: 600px;
    border-radius: 5px;
    background: #fff;
    margin: 100px auto;
}

.modal-header {
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
}

.modal-title {
    font-size: 1.5rem;
}

.modal-close {
    cursor: pointer;
}

.modal-body {

}
```

17. в modal.js в return добавляем классы open при открытии (open) и закрытии (close) модального окна

для open
```js
$modal.classList.remove('open') // Добавляем класс open
```
для close
```js
$modal.classList.remove('open') // Добавляем класс open
```

18. в index.js меняем название класса с MyModal на modal и убираем $ перед названием переменной modal
и проверяем работу через консоль в браузере проекта

```js
const modal = $.modal()
```

![2025-01-14_17-44-59](https://github.com/user-attachments/assets/033a8275-9987-410e-8034-b54a0e2a40e2)

19. в modal.css заполняем стили для модального окна

```css
.vmodal {}

.vmodal.open .modal-overlay,
.vmodal.open .modal-window{
    opacity: 1;
    z-index: 1000; /* Позволит модальному окну появляться поверх всех элементов */
}
```

20. в modal.css заполняем анимацию открытия для модального окна

- создаем класс .vmodal.open .modal-window
- в .modal-window меняем значение margin на 0
- в .modal-window добавляем transform и transition
- в .modal-overlay делаем background прозрачным - ставим нули
- в .modal-overlay добавляем transition
- добавляем класс .vmodal.open .modal-overlay
```css
/* Делаем разные типы анимации: overlay - менять прозрачность, window - будет выпрыгивать сверху */
.vmodal.open .modal-window {
    transform: translateY(100px); /* Модальное окно перемещается на 100 пикселей вниз. А чтобы сделать процесс плавным, то в .modal-window добавляем свойство transition */
}
.vmodal.open .modal-overlay {
    background: rgba(0, 0, 0, 0.5);
}

.modal-overlay {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0); /* Контур модального окна - мменяем значения все с 0.5 на 0 - чтобы изначально overlay был невидим */
    transition: background 200ms ease-in; /* При желании можно вставить сюда img или указать цвет. Указываем скорость появления окна 200 милисекунд */
}

.modal-window {
    width: 600px;
    border-radius: 5px;
    background: #fff;
    margin: 0 auto; /* Ставим 0, т.к. оступы у нас будут через transform */
    transform: translateY(-200px); /* По умолчанию здесь находится модальное окно */
    transition: transform 200ms ease-in;
}
```
*Есть способ сделать все это через animation, а не transition

21. в modal.js заполняем анимацию закрытия для модального окна. 
При закрытии окна будет появляться класс, а когда процесс будет завершен, класс удалится

- в close() в $.modal = function(options) в файле modal.js добавляем строку - 
появление и удаление класса при закрытии окна
- чтобы работала анимация закрытия модельного окна и удаление класса добавляем const
  в $.modal = function(options) в файле modal.js
```js
$.modal = function(options) { // Работа с замыканием
    const ANIMATION_SPEED = 200
    const $modal = createModal(options)

    return {  // Пример замыкания
        open() {
            $modal.classList.add('open') // Добавляем класс open
        }, // Визуализацию лучше делать через css, это наиболее быстрый путь
        close() { // Вызываем метод close, который вызывает метод hide, который при завершении анимации закрытии модального окна, сам удалится
            $modal.classList.remove('open') // Добавляем класс open
            $modal.classList.add('hide')
            setTimeout(() => {
                $modal.classList.remove('hide')
            }, ANIMATION_SPEED)
        }, // Визуализацию лучше делать через css, это наиболее быстрый путь
        destroy() {} // Не позволяет приложению работать медленно, очень важный метод
    }
}
```

22. в modal.css заполняем анимацию открытия для модального окна

- добавляем новые классы ".vmodal.hide .modal-overlay, .vmodal.hide .modal-window", ".vmodal.hide .modal-window", 
".vmodal.hide .modal-overlay"
```css
.vmodal.hide .modal-overlay,
.vmodal.hide .modal-window{
    opacity: 1;
    z-index: 1000;
}
/* Анимация закрытия модального окна */
.vmodal.hide .modal-window {
    transform: translateY(-200px); /* Модальное окно перемещается на 200 пикселей вверх. */
}
.vmodal.hide .modal-overlay {
    background: rgba(0, 0, 0, 0);
}
```

23. в modal.js в $.modal = function(options)

- добавляем let, т.к. без него будет конфликт open с close
```js
let closing = false // Через let, т.к. мы будет менять
```
- там же в close() добавляем строку closing
```js
closing = true
```
- там же в close() в setTimeout
```js
closing = false
```
- там же в open() добавляем в начало строки $modal.classList.add
```js
!closing && 
```

24. настраиваем кнопки

- в index.js создаем новую const
```js
const modal = $.modal({ // Создаем объект {}
  title: 'Vladilen Modal',
  closable: true, // Чтобы модальное окно могло закрываться
  content: `
        <h4>Modal is working</h4>
        <p>Lorem ipsum dolor sit.</p>
    `,
  width: '400px'
})
```
- находим в modal.js класс в function _createModal и вместо контента с <p> вставляем
```js
${options.content || ''}  // Если я контент не передал, то выводится пустая строчка
```
- вместо фразы в title "Модальное окно" выводим
```js
<span class="modal-title">${options.title || 'Окно'}</span> // Если я контент не передал, то выводится слово "Окно"
```
- добавляем ширину окна style
```js
<div class="modal-window" style="width: ${options.width || DEFAULT_WIDTH}">
```
- а если ширина не задана, то по умолчанию добавляем const в function _createModal
```js
const DEFAULT_WIDTH = '600px'
```
- удаляем шаблон с "x" (кнопка закрытия окна)
```js
<span class="modal-close">&times;</span>
```
- и заменяем его на
```js
${options.closable ? `<span class="modal-close">&times;</span>` : ''} // Если нет контента, то выводится пустая строка
```
![2025-01-17_19-52-20](https://github.com/user-attachments/assets/817dbb5e-a336-44e2-a615-eced5a251252)

25. в modal.js нужен элемент, который нам закроет модалку - атрибут data-close 

- в modal-header в function _createModal(options)
```js
${options.closable ? `<span class="modal-close" data-close="true">&times;</span>` : ''} 
```
- в modal-overlay в function _createModal(options)
```js
<div class="modal-overlay" data-close="true">
```

26. в modal.js нужна прослушка события после нажатия на модальное окно в $.modal = function(options)
Теперь система реагирует на клик

```js
$modal.addEventListener('click', (event) => { // Прослушка события по клику
    console.log('Clicked', event.target.dataset.close) // Можно также пользоваться dataset.close или getAttribute()
})
```

![26](https://github.com/user-attachments/assets/fb062f31-e49e-4bc8-96cf-8b1c68f74851)

27. в modal.js в $.modal = function(options) почти все полностью переносим и переписываем, чтобы модальное окно реагировало на клик
закрыть при нажатии на крестик в верхнем правом углу модального окна и при нажатии на оверлей

```js
    const modal = {
    open() {
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

$modal.addEventListener('click', (event) => { // Прослушка события по клику
    console.log('Clicked', event.target.dataset.close) // Можно также пользоваться dataset.close или getAttribute()
    if (event.target.dataset.close) { // При нажатии кнопки close срабатывает событие close из return ниже
        // А т.к. объект close находится ниже по коду, значит вызывается позже: то мы создаем выше этой строки const modal
        // Переносим строки с методами open и close в строку выше с const modal, временно удаляем метод destroy
        modal.close()
    }
})

return modal  // Пример замыкания
}
```

27. в modal.js настраиваем destroy в $.modal = function(options). Чтобы была чистка события после закрытия модального окна
Можно в этом убедится: при открытии модального окна в разделе Elements в DevTools появляется div с содержанием модального окна.
А при закрытии модального окна - div удаляется.

```js
    return Object.assign(modal, {
    destroy() { // Чистка события после открытия и закрытия - удаление Node из ноддерева
        $modal.parentNode.removeChild($modal) // После этого добавляем небольшую защиту в начале функции let destroyed = false
        destroyed = true
    }
})  // Пример замыкания
```
```js
let destroyed = false // Чистка события после открытия и закрытия
```
- там же в open
```js
if (destroyed) { // Если destroyed в значении true, тогда мы не запускаем метод open
    return console.log('Modal is destroyed')
}
```

28. в modal.js - слушатель - переписываем полностью прослушку события по клику

```js
    const listener = event => {
    if (event.target.dataset.close) { // При нажатии кнопки close срабатывает событие close из return ниже
        // А т.к. объект close находится ниже по коду, значит вызывается позже: то мы создаем выше этой строки const modal
        // Переносим строки с методами open и close в строку выше с const modal, временно удаляем метод destroy
        modal.close()
    }
}

$modal.addEventListener('click', listener) // Прослушка события по клику
```
- а в return добавляем строку
```js
$modal.removeEventListener('click', listener) // Не будет утечек памяти, если мы уничтожаем наше модальное окно
```

29. формируем футер 

- в modal.js экспортируем setContent
```js
setContent(html) { // setContent - публичный, поэтому мы его экспортируем. В modal-body добавляем data-content
$modal.querySelector('[data-content]').innerHTML = html
}
```
- в modal.js добавляем data-content
```js
<div class="modal-body" data-content> 
```
- в index.js в const modal добавляем кнопки
```js
footerButtons: [
    {text: 'Ok', type: 'primary', handler() {
            console.log('Primary btn clicked')
        }},
    {text: 'Cancel', type: 'danger', handler() {
            console.log('Danger btn clicked')
        }}
]
```
- в modal.js в function _createModal(options) удаляем кнопки
```js
</div>
<div class="modal-footer">
    <button>Ok</button>
    <button>Cancel</button>
```
- в modal.js создаем отдельную приватную функцию для футера, чтобы было событие по клику
```js
function _createModalFooter(buttons = []) {
    if (buttons.length === 0) {
        return document.createElement('div')
    }

    const wrap = document.createElement('div')
    wrap.classList.add('modal-footer')

    return wrap
}
```
- в modal.js в function _createModal(options) в нужном месте добавляем футер
```js
const footer = _createModalFooter(options.footerButtons)
footer.appendAfter(modal.querySelector('[data-content]'))
```
- в modal.js создаем функцию
```js
Element.prototype.appendAfter = function (element) {
    element.parentNode.insertBefore(this, element.nextSibling) // Обращаемся к элементу, который передаем - modal-content. Обращаемся к parentNode, который должен вызвать метод insertBefore. Элемент this (футер) и element.nextSibling
}
```

30. динамически генерируем кнопки (Ok и Cansel) для футера модального окна

- в modal.js создаем новую пустую функцию
```js
function noop() {} //Эта функция noop пустая и ничего не делает
```
- в modal.js в функции function _createModalFooter добавляем генерацию кнопок
```js
buttons.forEach(btn => { // На каждой операции мы принимаем buttons из function _createModalFooter (Ok или Cansel)
        const  $btn = document.createElement('button')
        $btn.textContent = btn.text
        $btn.classList.add('btn')
        $btn.classList.add(`btn-${btn.type || 'secondary'}`) // Класс type по умолчанию
        $btn.onclick = btn.handler || noop // Добавляем индивидуальный обработчик событий onclick
```

![30](https://github.com/user-attachments/assets/efed6e09-9323-4054-9f42-2ebc6756eb74)


31. чтобы закрыть эти кнопки Ok и Cansel в index.js в функции const modal к кнопкам Ok и Cansel добавляем строку

```js
modal.close()
```

32. делаем верстку модального окна. 

- index.html и удаляем ненужный параграф <p>
```html
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cum dolores ex excepturi obcaecati sequi, velit. Accusamus aspernatur consequuntur dignissimos, facere id illo, ipsam magnam minima nobis obcaecati recusandae repellat veniam vero? Alias asperiores assumenda beatae blanditiis corporis deleniti dolor dolore, eligendi error facere inventore magni minus molestias nobis non quia quos similique sint. Enim minus odio placeat qui, sint suscipit? Amet nam necessitatibus quos. Aperiam delectus expedita fugit in ipsa, ipsum laudantium magnam minus, modi pariatur quas, quasi quos sapiente tenetur unde? Aut consequuntur, doloribus eaque earum ex in iusto laudantium mollitia nesciunt officiis quisquam tempore vero voluptate voluptatibus?</p>
```
- index.html - вместо удаленного параграфа <p> создаем div row и col
```html
<div class="row">
    <div class="col">
        
    </div>
</div>
```
- index.html - и в созданные div вставляем скопированный готовый код для верстки с сайта https://getbootstrap.com/docs/5.3/components/card/
```html
<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>
```

![2025-01-21_16-35-44](https://github.com/user-attachments/assets/aa15326a-687c-483c-a618-2a570afe471d)

- index.html - удаляем из данного кода стиль в div card
```html
style="width: 18rem;"
```
- index.html - удаляем из данного кода alt в строке img
```html
alt="..."
```
- в index.html в строке img - переносим src в конец строки и вставляем в него ссылку на изображение в карточке товара "яблоки" в любом интернет-магазине
```html
<img class="card-img-top" src="https://петромост.рф/upload/product_images/73044.jpg">
```
- в index.html в строке h5 - вместо "Card title" вставляем название товара - Яблоки
```html
<h5 class="card-title">Яблоки</h5>
```
- в index.html удаляем полностью строку <p class="card-text"> - она не понадобится
- в index.html добавляем стиль для изображения яблок в строку с img - высоту
```html
<img class="card-img-top" style="height: 300px;" src="https://петромост.рф/upload/product_images/73044.jpg">
```
- в index.html создаем такие же еще 2 карточки товаров "Апельсины" и "Манго". И теперь вместе с яблоками все выглядит вот так:
```html
<div class="row">
        <div class="col">
            <div class="card">
                <img class="card-img-top" style="height: 300px;" src="https://петромост.рф/upload/product_images/73044.jpg">
                <div class="card-body">
                    <h5 class="card-title">Яблоки</h5>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <img class="card-img-top" style="height: 300px;" src="https://петромост.рф/upload/product_images/98246.jpg">
                <div class="card-body">
                    <h5 class="card-title">Апельсины</h5>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <img class="card-img-top" style="height: 300px;" src="https://петромост.рф/upload/product_images/05406.jpg">
                <div class="card-body">
                    <h5 class="card-title">Манго</h5>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
</div>
```
- в index.js создаем эти же карточки с указанием цены price
```js
const fruits = [
    {id: 1, title: 'Яблоки', price: 20, img: 'https://петромост.рф/upload/product_images/73044.jpg'},
    {id: 2, title: 'Апельсины', price: 30, img: 'https://петромост.рф/upload/product_images/98246.jpg'},
    {id: 3, title: 'Манго', price: 40, img: 'https://петромост.рф/upload/product_images/05406.jpg'},
]
```
![32](https://github.com/user-attachments/assets/70c20c44-01b7-4888-b1a3-b403b23a1eac)

33. делаем кнопки "Go somewhere" в каждой карточке довара

- в index.html вместо строки с кнопкой "Go somewhere" <a href="#" class="btn btn-primary">Go somewhere</a>
создаем 2 кнопки "Посмотреть цену" (btn btn-primary) и "Удалить" (btn btn-danger)
и вставляем в каждую карточку товара
```html
<a href="#" class="btn btn-primary">Посмотреть цену</a>
<a href="#" class="btn btn-danger">Удалить</a>
```
![2025-01-22_16-18-15](https://github.com/user-attachments/assets/28695fc7-2238-47b2-8f64-4062880ae93e)
