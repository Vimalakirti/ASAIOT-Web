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
                    </Container>
                </Segment>
            </Slider>
            <Container>
                <Divider horizontal>
                    <Header as='h1'>
                    Transfer Credits
                    </Header>
                </Divider>
                <Divider horizontal>
                    <Header as='h1'>
                    Prerequisite Requirement
                    </Header>
                </Divider>
                <Divider horizontal>
                    <Header as='h1'>
                    Outstanding Academic Performance
                    </Header>
                </Divider>
                <Divider horizontal>
                    <Header as='h1'>
                    Degree Requirement
                    </Header>
                </Divider>
                <Divider horizontal>
                    <Header as='h1'>
                    Qualifying Examination
                    </Header>
                </Divider>
                <Divider horizontal>
                    <Header as='h1'>
                    Degree Examination
                    </Header>
                </Divider>
                <Divider horizontal>
                    <Header as='h1'>
                    Progress Report
                    </Header>
                </Divider>
                <Divider horizontal>
                    <Header as='h1'>
                    Degree Conferral
                    </Header>
                </Divider>
            </Container>
        </div>
    )
}

export default Academic