import { BOOKS_REQUEST, BOOKS_SUCCESS, BOOKS_ERROR } from '../../action/types';

const initialState = {
  apiCalling: false,
  apiCallSuccess: false,
  apiCallError: false,
  bookInfo: [],
};

const getAllBooks = (
  state = initialState,
  action = { type: '', payload: null },
) => {
  const { type, payload } = action;

  switch (type) {
    case BOOKS_REQUEST:
      return {
        ...state,
        apiCalling: true,
        apiCallSuccess: false,
        apiCallError: false,
      };
    case BOOKS_SUCCESS:
      return {
        ...state,
        apiCalling: false,
        apiCallSuccess: true,
        bookInfo: payload.bookInfo.items,
        apiCallError: false,
      };

    case BOOKS_ERROR:
      return {
        ...state,
        apiCalling: false,
        apiCallSuccess: false,
        apiCallError: true,
      };

    default:
      return state;
  }
};

export default getAllBooks;
