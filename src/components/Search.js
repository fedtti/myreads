import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './../BooksAPI';

class Search extends Component {
    /**
     * Create the empty arrays to store the books found.
     */
    state = {
        books: [],
        booksFound: []
    }

    componentDidMount() {
        /**
         * Get all the books from the API.
         */
        BooksAPI.getAll()
            .then(books => {
                const booksId = books.map(book => ({
                    id: book.id,
                    shelf: book.shelf
                }));
                this.setState({ booksFound: booksId });
            });
    }

    /**
     * Search for the books on user input.
     */
    searchBook = event => {
        const value = event.target.value

        if (value) {
            BooksAPI.search(value)
                .then(books => {
                    if(!books || books.hasOwnProperty('error')) {
                        this.setState({ books: [] });
                    } else {
                        this.setState({ books: books });
                    }
                });
        } else {
            this.setState({ books: [] });
        }
    }

    /**
     * Update a book shelf on the user input.
     */
    changeShelf = (book, shelf) => {
        const updatedBooks = [];
        BooksAPI.update(book, shelf)
            .then(books => {
                Object.keys(books)
                    .forEach(shelf => {
                        return books[shelf].map(id => ({
                            id: id,
                            shelf: shelf
                        }))
                        .forEach(book => {
                            updatedBooks.push(book);
                        });
                    });
                return updatedBooks;
            })
            .then(updatedBooks => {
                this.setState({ booksFound: updatedBooks });
            });
    }

    render() {
        /**
         * Turn the states into the props.
         */
        const { books, booksFound } = this.state;

        /**
         * Show the books found.
         */
        let results;
        if (books.length > 0) {
            results = books.map((book, index) => {
                booksFound.forEach(result => {
                    if (result.id === book.id) {
                        book.shelf = result.shelf;
                    }
                });


                const cover = 'https://books.google.com/googlebooks/images/no_cover_thumb.gif';

                return (
                    <li className="app__main__div__section__ul__li" key={index}>
                        <Book
                            authors={book.authors ? book.authors.join(', ') : null}
                            book={book}
                            changeShelf={this.changeShelf}
                            key={book.id}
                            image={book.imageLinks ? book.imageLinks.thumbnail : cover}
                            title={book.title}
                        />
                    </li>
                );
            });
        } else {
            results = null;
        }

        return (
            <div className="app__main__div">
                <section className="app__main__div__section">
                    <h2 className="app__main__div__section__h2">Search</h2>
                    <input
                        className="app__main__div__section__input"
                        onChange={this.searchBook}
                        placeholder="Search"
                        type="search"
                    />
                    <ul className="app__main__div__section__ul">
                        {results}
                    </ul>
                </section>
                <Link
                    to="/"
                    className="app__main__div__a"
                >
                    Home
                </Link>
            </div>
        );
    }
}

export default Search;