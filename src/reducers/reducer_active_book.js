//state argument is not app state ,
// only state this reducer is responsible for
export default function (state = null, action) {
    console.dir(action);
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state;
}
