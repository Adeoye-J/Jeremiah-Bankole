import React from 'react'

const Item = ({title, demo_link, repository_link, cover_image}) => {
    
    
    return (
        <div className='item'>
            <div className="image-container">
                <img src={cover_image} alt="Cover Image for Project" />
            </div>
            <div className="action-container">
                <h2>{title}</h2>
                <div className="action">;
                    <a href={demo_link}>View Site</a>
                    <a href={repository_link}>View Code</a>
                </div>
            </div>
        </div>
    )
}

export default Item