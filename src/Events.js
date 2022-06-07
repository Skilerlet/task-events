/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    let button = document.createElement('button');
    let textButton = document.createTextNode('Удали меня');
    button.appendChild(textButton);
    button.addEventListener('click', () => document.body.removeChild(button));
    document.body.appendChild(button);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    let ul = document.createElement('ul');
    document.body.appendChild(ul);
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        let textLi = document.createTextNode(arr[i]);
        li.appendChild(textLi);
        li.addEventListener('mouseover', (event) =>
            event.target.setAttribute('title', event.target.textContent),
        );
        ul.appendChild(li);
    }
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    let a = document.createElement('a');
    document.body.appendChild(a);
    let textLink = document.createTextNode('tensor');
    a.appendChild(textLink);
    a.setAttribute('href', 'https://tensor.ru/');
    a.addEventListener('click', (event) => {
        if (!event.target.textContent.includes('https://tensor.ru/')) {
            event.preventDefault();
            event.target.textContent += ' https://tensor.ru/';
            return;
        }
    });
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    let ul = document.createElement('ul');
    document.body.appendChild(ul);

    let newItem = () => {
        let li = document.createElement('li');
        let textLi = document.createTextNode('Пункт');
        li.appendChild(textLi);
        ul.appendChild(li);
    };

    newItem();

    ul.addEventListener('click', (event) => {
        event.target.textContent += '!';
    });

    let button = document.createElement('button');
    document.body.appendChild(button);
    let textbutton = document.createTextNode('Добавить пункт');
    button.appendChild(textbutton);

    button.addEventListener('click', () => {
        newItem();
    });
}
