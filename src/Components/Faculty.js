import React from 'react'
import {
    List,
    Container,
    Header,
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
                <List bulleted size='huge'>
                    <List.Item as='a' href='https://web.ee.ntu.edu.tw/eng/teacher_index3.php'>
                        Department of Electrical Engineering
                    </List.Item>
                </List>
                <List bulleted size='huge'>
                    <List.Item as='a' href='https://www.csie.ntu.edu.tw/members/teacher.php?lang=en'>
                        Department of Computer Science & Information Engineering
                    </List.Item>
                </List>
                <Divider horizontal>
                <Header as='h1'>
                  Academia Sinica
                </Header>
                </Divider>
                <List bulleted size='huge'>
                    <List.Item as='a' href='https://www.iis.sinica.edu.tw/en/page/People/ResearchFellows.html'>
                        Institute of Information Science
                    </List.Item>
                </List>
                <List bulleted size='huge'>
                    <List.Item as='a' href='https://www.citi.sinica.edu.tw/en/people/research-fellows'>
                        Research Center for Information Technology Innovation
                    </List.Item>
                </List>
            </Container>
        </div>
    )
}

export default Faculty