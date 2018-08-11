import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';
import * as BooksAPI from './../BooksAPI';

class Shelves extends Component {
    /**
     * Create an empty array to store all the books.
     */
    state = {
        books: []
    }

    componentDidMount() {
        /**
         * Get all the books from the API.
         */
        BooksAPI.getAll()
            .then(books => {
                this.setState({books: books});
            });
    }

    /**
     * Update a book shelf on the user input.
     */
    changeShelf = (book, shelf) => {
        const availableBooks = this.state.books;
        const bookId = book.id;
        const bookIndex = availableBooks.findIndex(book => book.id === bookId);
        const updatedBook = Object.assign({}, availableBooks[bookIndex], { shelf: shelf });

        this.setState({
            books: [
                ...availableBooks.slice(0, bookIndex),
                updatedBook,
                ...availableBooks.slice(bookIndex + 1)
            ]
        });

        BooksAPI.update(book, shelf);
    }

    render() {
        /**
         * Turn the state into a prop.
         */
        const {books} = this.state;

        /**
         * Assign each book to the correct shelf.
        */
        let currentlyReadingBooks = books.filter(({ shelf }) => shelf === 'currentlyReading');
        let wantToReadBooks = books.filter(({ shelf }) => shelf === 'wantToRead');
        let readBooks = books.filter(({ shelf }) => shelf === 'read');

        /**
         * Set the shelves properties.
         */
        const shelves = [
            {
                books: currentlyReadingBooks,
                label: 'Currently Reading',
                type: 'currentlyReading'
            },
            {
                books: wantToReadBooks,
                label: 'Want To Read',
                type: 'wantToRead'
            },
            {
                books: readBooks,
                label: 'Read',
                type: 'read'
            }
        ];

        return (
            <div className="app__main__div">
            {shelves.map((shelf, index) =>
                <Shelf
                    books={shelf.books}
                    changeShelf={this.changeShelf}
                    key={index}
                    label={shelf.label}
                    type={shelf.type}
                />
            )}
                <Link
                    to="/search/"
                    className="app__main__div__a"
                >
                    Search
                </Link>
            </div>
        );
    }
}

export default Shelves;