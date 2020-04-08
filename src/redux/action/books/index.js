import { BOOKS_REQUEST } from '../types';

export const getAllBooks = data => {
  return {
    type: BOOKS_REQUEST,
    payload: data,
  };
};
