const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', img: 'fake-assets/1.jpg', isFav: true },
                { title: 'the way of kings', author: 'brandon sanderson', img: 'fake-assests/2.jpg', isFav: false },
                { title: 'the final empire', author: 'brandon sanderson', img: 'fake-assests/3.jpg', isFav: true },
            ],
            url: "google.com"
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e) {
            console.log(e, e.type)
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')