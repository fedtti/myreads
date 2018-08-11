import React, { Component } from 'react';
import Book from './Book';

class Shelf extends Component {
    render() {
        /**
         * Set the available props.
         */
        const {books, changeShelf, label, type} = this.props;

        /**
         * Set a default cover for the books (if missing).
         */
        const cover = 'https://books.google.com/googlebooks/images/no_cover_thumb.gif';

        return (
            <section className="app__main__div__section" id={type}>
                <h2 className="app__main__div__section__h2">{label}</h2>
                <ul className="app__main__div__section__ul">
                {books.map((book, index) =>
                    <li className="app__main__div__section__ul__li" key={index}>
                        <Book
                            authors={book.authors ? book.authors.join(', ') : null}
                            book={book}
                            changeShelf={changeShelf}
                            key={book.id}
                            image={book.imageLinks ? book.imageLinks.thumbnail : cover}
                            title={book.title}
                        />
                    </li>
                )}
                </ul>
            </section>
        );
    }
}

export default Shelf;