export function selectBook(book) {
    //select book is action creator,it needs to return an action,an obj with a type property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}