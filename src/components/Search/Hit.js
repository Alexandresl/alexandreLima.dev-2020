import React from 'react'

import PostItem from '../PostListItem'

const Hit = ({ hit }) => (
    <PostItem 
        slug={hit.fields.slug}
        title={hit.title}
        background={hit.background}
        date={hit.date}
        description={hit.description}
        category={hit.category}
        timeToRead={hit.timeToRead}
    />
)

export default Hit