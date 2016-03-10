import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {selectBook} from '../actions/index';

class BooksList extends React.Component {
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }

    renderList() {
        return this.props.books.map((book)=> {
            return <li onClick={()=> this.props.selectBooks(book)}
                       className="list-group-item"
                       key={book.title}>{book.title}</li>
        });
    }
}

function mapStateToProps(state) {
//    whatever is returned will show up as props
//    inside of bookList
    return {
        books: state.books
    }
}

//Anything returned from this function will end uo as props on the bookList container
function mapDispatchToProps(dispatch) {
    //whenever selectedBooks is called,the result should pe passed to all of reducers
    return bindActionCreators( {selectBooks: selectBook}, dispatch);
}

//Promote BookList from a component to a container - it needs to know about this new dispatch method ,selectBook.
//Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);