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

const Contact = () => {
    return (
        <div>
            <Slider className="slide">
                <Segment inverted vertical id="contact_segment">
                
                    <Container text className="active">
                    <Header inverted as="h1">
                        Contact
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

export default Contact