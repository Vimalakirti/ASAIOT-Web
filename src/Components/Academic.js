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

const Academic = () => {
    return (
        <div>
            <Slider className="slide">
                <Segment inverted vertical id="academic_segment">
                
                    <Container text className="active">
                    <Header inverted as="h1">
                        Academic
                    </Header>
                    <p>
                        The participating scholars comes from ??? institutions including Academia Sinica, NTU and ???
                    </p>
                    </Container>
                </Segment>
            </Slider>
        </div>
    )
}

export default Academic