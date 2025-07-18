import React from 'react';
import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title, coverimage, author, authorpic, posteddate} = bookmark;
    return (
        <div className="mb-4 p-4 border rounded shadow bg-grey-600">
            <h2>{title}</h2>
        </div>
    );

    
};

export default Bookmark;
