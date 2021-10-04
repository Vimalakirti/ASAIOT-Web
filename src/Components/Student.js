import React from 'react'
import Slider from 'react-slick'
import {
    Button,
    Container,
    Grid,
    Header,
    Image,
    Segment,
    Divider,
} from "semantic-ui-react"

const Student = () => {
    return (
        <div>
            <Slider className="slide">
                <Segment inverted vertical id="student_segment">
                    
                    <Container text className="active">
                    <Header inverted as="h1">
                        Student
                    </Header>
                    </Container>
                </Segment>
            </Slider>
        </div>
    )
}

export default Student