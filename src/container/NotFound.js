import React from 'react'

export default props => {
    if(props.staticContext && !props.staticContext.notFound) {
        props.staticContext.notFound = true
    }

    return (
        <div>404</div>
    )
}
