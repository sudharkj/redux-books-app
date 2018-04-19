import React from 'react';

import BookList from '../containers/book_list';
import BookDetail from '../containers/book_detail';

export default function() {
    return (
        <div>
            <BookList />
            <BookDetail />
        </div>
    )
}
