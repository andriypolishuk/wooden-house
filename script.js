let markNote = ['Dell', 'HP', 'Accer', 'Asus', 'Lenovo', 'Apple',]

let NoteApp = {
    data() {
        return {
            hover: false,
            hoverNumber: -1,
            nameArr: ['Автомобілі', 'Домівки', "Інтер'єр", 'Головоломки', 'Для ляльок', 'Для дорослих',],
            notebookArr: [
                {
                    name: 'Автомобілі',
                    model: 'Inspirion',
                    procesor: 'i3',
                    memory: '500Gb',
                    price: '10000',
                    img: '111.jpeg',
                    link: 'wood-1.html'
                },
                {
                    name: 'Автомобілі',
                    model: 'Inspirion2',
                    procesor: 'i3',
                    memory: '500Gb',
                    price: '10000',
                    img: '666.jpeg',
                    link: 'wood-1.html'

                },
                {
                    name: 'Автомобілі',
                    model: 'Inspirion3',
                    procesor: 'i3',
                    memory: '500Gb',
                    price: '10000',
                    img: '333.jpeg',
                    link: 'wood-1.html'
                },
                {
                    name: "Інтер'єр",
                    model: 'Inspirion',
                    procesor: 'i3',
                    memory: '500Gb',
                    price: '10000',
                    img: '444.jpeg',
                    link: 'wood-1.html'
                },
                {
                    name: 'Головоломки',
                    model: 'Inspirion',
                    procesor: 'i3',
                    memory: '500Gb',
                    price: '10000',
                    img: '555.jpeg',
                    link: 'wood-1.html'
                },
                {
                    name: 'Для ляльок',
                    model: 'Inspirion',
                    procesor: 'i3',
                    memory: '500Gb',
                    price: '10000',
                    img: '666.jpeg'
                },
                {
                    name: 'Для ляльок',
                    model: 'Inspirion2',
                    procesor: 'i3',
                    memory: '500Gb',
                    price: '10000',
                    img: '111.jpeg',
                    link: 'wood-1.html'
                },
                {
                    name: 'Для ляльок',
                    model: 'Inspirion3',
                    procesor: 'i3',
                    memory: '500Gb',
                    price: '10000',
                    img: '666.jpeg',
                    link: 'wood-1.html'
                },
                {
                    name: 'Для ляльок',
                    model: 'Inspirion4',
                    procesor: 'i3',
                    memory: '500Gb',
                    price: '10000',
                    img: '333.jpeg',
                    link: 'wood-1.html'
                },
                {
                    name: 'Для ляльок',
                    model: 'Inspirion5',
                    procesor: 'i3',
                    memory: '500Gb',
                    price: '10000',
                    img: '444.jpeg',
                    link: 'wood-1.html'
                },
                {
                    name: 'Для ляльок',
                    model: 'Inspirion6',
                    procesor: 'i3',
                    memory: '500Gb',
                    price: '10000',
                    img: '555.jpeg',
                    link: 'wood-1.html'
                },
                {
                    name: 'Для ляльок',
                    model: 'Inspirion4',
                    procesor: 'i3',
                    memory: '500Gb',
                    price: '10000',
                    img: '666.jpeg',
                    link: 'wood-1.html'
                },
                {
                    name: 'Для ляльок',
                    model: 'Inspirion5',
                    procesor: 'i3',
                    memory: '500Gb',
                    price: '10000',
                    img: '111.jpeg',
                    link: 'wood-1.html'
                },
                {
                    name: 'Для ляльок',
                    model: 'Inspirion6',
                    procesor: 'i3',
                    memory: '500Gb',
                    price: '10000',
                    img: '666.jpeg',
                    link: 'wood-1.html'
                },
                {
                    name: 'Для дорослих',
                    model: 'Inspirion',
                    procesor: 'i3',
                    memory: '500Gb',
                    price: '10000',
                    img: '333.jpeg',
                    link: 'wood-1.html'
                },
                {
                    name: 'Для дорослих',
                    model: 'Inspirion2',
                    procesor: 'i3',
                    memory: '500Gb',
                    price: '10000',
                    img: '444.jpeg',
                    link: 'wood-1.html'
                }

            ],
            chooseName: markNote[0],
            chooseIndex: 0,
            chooseNotebooks: [],
            search: "",
        }
    },
    methods: {
        showNotebook(index) {
            this.chooseNotebooks.length = 0;
            this.chooseName = this.nameArr[index];
            for (elem of this.notebookArr) {
                if (elem.name == this.chooseName) {
                    this.chooseNotebooks.push(elem);
                }
            }
        },
        searchFunction() {

        },
        myFilter() {
            let searchString = this.search;
            if (!searchString) {
                return this.chooseNotebooks;
            }
            searchString = searchString.trim().toLowerCase();

            this.chooseNotebooks.length = 0;
            return this.notebookArr.filter(item => {
                if ((item.name.toLowerCase().indexOf(searchString) !== -1) || (item.model.toLowerCase().indexOf(searchString) !== -1)) {
                    // return item;
                    this.chooseNotebooks.push(item);
                    return this.chooseNotebooks;
                }
            })
        }
    },
    mounted() {
        this.showNotebook(0)
    },

}

Vue.createApp(NoteApp).mount('#container-vue')
let btnAside = document.querySelector('.btn-aside');
let leftPanel = document.querySelector('.left-panel');
let contentDiv = document.querySelector('.content');

btnAside.onclick = function () {
    leftPanel.classList.toggle('hide-panel');
    btnAside.classList.toggle('btn-out');
    btnAside.classList.toggle('btn-hrest');
    // contentDiv.classList.toggle('move-content');
}