import React from 'react'
import {
    Container,
    Header,
    Segment,
    Divider
} from "semantic-ui-react"
import Slider from 'react-slick'

const Course = () => {
    return (
        <div>
            <Slider className="slide">
                <Segment inverted vertical id="course_segment1">
                
                    <Container text className="active">
                        <Header  as="h1">
                            Course
                        </Header>
                    </Container>
                </Segment>
            </Slider>
            <Container>
                <Divider horizontal>
                    <Header as='h1'>
                    Oops! Under construction
                    </Header>
                </Divider>
                
            </Container>
        </div>
    )
}

export default Course