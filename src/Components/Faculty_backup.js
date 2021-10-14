import React from 'react'
import {
    Button,
    Container,
    Card,
    Header,
    Image,
    Segment,
    Divider,
} from "semantic-ui-react"
import Slider from 'react-slick'

const Faculty = () => {
    return (
        <div>
            <Slider className="slide">
                <Segment inverted vertical id="faculty_segment">
                
                    <Container text className="active">
                    <Header inverted as="h1">
                        Faculty in TIGP AIoT Program
                    </Header>
                    <p>
                        The cooperating university and institutes include NTU and Academia Sinica
                    </p>
                    </Container>
                </Segment>
            </Slider>
            <Container>
                <Divider horizontal>
                    <Header as='h1'>
                    National Taiwan University
                    </Header>
                </Divider>
                <Divider horizontal>
                    <Header as='h1'>
                    Institute of Information Science, Academia Sinica
                    </Header>
                </Divider>
                <Card.Group itemsPerRow={3}>
                    <Card
                        image='https://homepage.iis.sinica.edu.tw/pages/photo/dnyang.png'
                        header='Dr. De-Nian Yang'
                        meta='dnyang@iis.sinica.edu.tw'
                        description='Research : Social networks and mobile data management, mobile multimedia networks and applications.'
                        extra={<a href="https://homepage.iis.sinica.edu.tw/pages/dnyang/index_en.html">View profile</a>}
                    />
                    <Card
                        image='https://homepage.iis.sinica.edu.tw/pages/photo/dnyang.png'
                        header='Dr. De-Nian Yang'
                        meta='dnyang@iis.sinica.edu.tw'
                        description='Research : Social networks and mobile data management, mobile multimedia networks and applications.'
                        extra={<a href="https://homepage.iis.sinica.edu.tw/pages/dnyang/index_en.html">View profile</a>}
                    />
                    <Card
                        image='https://homepage.iis.sinica.edu.tw/pages/photo/dnyang.png'
                        header='Dr. De-Nian Yang'
                        meta='dnyang@iis.sinica.edu.tw'
                        description='Research : Social networks and mobile data management, mobile multimedia networks and applications.'
                        extra={<a href="https://homepage.iis.sinica.edu.tw/pages/dnyang/index_en.html">View profile</a>}
                    />
                    <Card
                        image='https://homepage.iis.sinica.edu.tw/pages/photo/dnyang.png'
                        header='Dr. De-Nian Yang'
                        meta='dnyang@iis.sinica.edu.tw'
                        description='Research : Social networks and mobile data management, mobile multimedia networks and applications.'
                        extra={<a href="https://homepage.iis.sinica.edu.tw/pages/dnyang/index_en.html">View profile</a>}
                    />
                    <Card
                        image='https://homepage.iis.sinica.edu.tw/pages/photo/dnyang.png'
                        header='Dr. De-Nian Yang'
                        meta='dnyang@iis.sinica.edu.tw'
                        description='Research : Social networks and mobile data management, mobile multimedia networks and applications.'
                        extra={<a href="https://homepage.iis.sinica.edu.tw/pages/dnyang/index_en.html">View profile</a>}
                    />
                    <Card
                        image='https://homepage.iis.sinica.edu.tw/pages/photo/dnyang.png'
                        header='Dr. De-Nian Yang'
                        meta='dnyang@iis.sinica.edu.tw'
                        description='Research : Social networks and mobile data management, mobile multimedia networks and applications.'
                        extra={<a href="https://homepage.iis.sinica.edu.tw/pages/dnyang/index_en.html">View profile</a>}
                    />
                    
                    
                </Card.Group>
            </Container>
        </div>
    )
}

export default Faculty