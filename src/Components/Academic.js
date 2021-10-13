import React from 'react'
import Slider from 'react-slick'
import {
    Button,
    Container,
    Grid,
    Header,
    List,
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
                    Prerequisite Requirement
                    </Header>
                </Divider>
                <List bulleted size='huge'>
                    <List.Item>
                        <List.Content>
                        Students will take two exams, Programming and Probabilities & Statistics at the beginning of fall semester.
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                        Passing the similar course (at the schools or online) is not allowed in lieu of this requirement.
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                        The prerequisite exam is offered at the beginning of every fall semester. Each student can take it twice at most. The student who is not able to fulfill this requirement at the beginning of the third semester will be dismissed from the program.
                        </List.Content>
                    </List.Item>
                </List>
                <Divider horizontal>
                    <Header as='h1'>
                    Outstanding Academic Performance
                    </Header>
                </Divider>
                <List bulleted size='huge'>
                    <List.Item>
                        <List.Content>
                        Students are required to high pass 2 AIoT core courses. Superior graduate level performance. 
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                        The students are allowed to re-take the course and obtain "high pass." In order to meet qualifying exam grade requirement, the students can repeat this course but credit hours shall not be counted as graduation requirements.
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                        Publication or paper submission is not allowed in lieu of this requirement.
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                        Students who are not able to pass 2 AIoT core courses WITH superior graduate level performance by the end of the fifth semester will be dismissed from the program.
                        </List.Content>
                    </List.Item>
                </List>
                <Divider horizontal>
                    <Header as='h1'>
                    Professional Subjects Assessment
                    </Header>
                </Divider>
                <p>Students who enroll at NTU will need to accomplish 18(???) credits of Ph.D. level course and the grades must be at least B+ within 5 semesters after enrollment.</p>
                <Divider horizontal>
                    <Header as='h1'>
                    Research Ability Assessment
                    </Header>
                </Divider>
                <List bulleted size='huge'>
                    <List.Item>
                        <List.Content>
                        The application for Ph.D. Thesis proposal is only accepted after the student have accomplished "Outstanding Academic Performance" requirement (and Qualifying Exam of the partner university.)
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                        The deadline for Thesis Proposal Approval is by end of the third year.
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                        The assessment committee will be composed of three faculty members: advisor, coadvisor and one AIoT Academic Committee member.
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                        The research ability assessment may be held twice. Student who do not pass the second assessment must withdraw from the PhD program in the following semester.
                        </List.Content>
                    </List.Item>
                </List>
            </Container>
        </div>
    )
}

export default Academic