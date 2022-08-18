
export type BookLists = Array<IList>

// interface

// export type bookLists: BookLists = Array<IList>

export interface IBookLists {
  bookLists: IList[];
}

// export interface IError {
//   error: boolean;
// }

export interface IList {
  list_name_encoded: string;
  bestsellers_date: string;
  published_date: string;
  published_date_description: string;
  next_published_date: string;
  previous_published_date: string;
  normal_list_ends_at: number;
  updated: string;
  list_id: number;
  list_name: string;
  display_name: string;
  books: IBook[];
}

export interface IBook {
  author: string;
  book_image: string;
  description: string;
  primary_isbn13: string;
  publisher: string;
  rank: number;
  title: string;
}
