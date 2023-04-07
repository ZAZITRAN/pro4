import React from 'react'
import {Link} from 'react-router-dom'
import Carousels from '../tasks/Carousel'

export default function CourseHome() {
    return (
        <div style={{marginTop: '50px',}}>   
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '27px'}}>
                <h4>Những khóa học mới nhất</h4>
                <Link to={'/course-list'}>
                    Xem Tất Cả
                </Link>
            </div>
            <Carousels />
        </div>
    )
}
