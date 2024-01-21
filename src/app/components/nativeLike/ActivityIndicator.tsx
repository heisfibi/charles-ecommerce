import React from 'react'

function ActivityIndicator(props: {
    size?: string
    color: string 
}) {
    return (
        <div className="loading-spinner">
            <div className="spinner"></div>
        </div>
    )
}

export default ActivityIndicator