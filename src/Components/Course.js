import React from 'react'
import {
    Container,
    Header,
    Segment
} from "semantic-ui-react"
import Slider from 'react-slick'

const Course = () => {
    return (
        <div>
            <Slider className="slide">
                <Segment inverted vertical id="course_segment1">
                
                    <Container text className="active">
                    </Container>
                </Segment>
            </Slider>
        </div>
    )
}

export default Course