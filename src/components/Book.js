import React, { Component } from 'react';

class Book extends Component {
    render() {
        /**
         * Set the available props.
         */
        const {authors, book, changeShelf, image, title} = this.props;

        return (
            <div className="app__main__div__section__ul__li__div">
                <h3 className="app__main__div__section__ul__li__div__h3">{title}</h3>
                <div
                    className="app__main__div__section__ul__li__div__div"
                    style={{
                        background: `url(${image})`,
                        backgroundSize: 'cover',
                        height: 193,
                        width: 128
                    }}
                >
                </div>
                <p className="app__main__div__section__p">{authors}</p>
                <h4 className="app__main__div__section__ul__li__div__h4">Change Shelf</h4>
                <select
                    className="app__main__div__section__ul__li__div__select"
                    onChange={event => changeShelf(book, event.target.value)}
                >
                    <option default value="">Move to…</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="">None</option>
                </select>
            </div>
        );
    }
}

export default Book;