import React from 'react'
import Slider from 'react-slick'
import {
    Container,
    Header,
    Segment,
    Divider,
    Card,
    Image,
    Grid
} from "semantic-ui-react"
import student1 from '../images/Student/1.png'
import student2 from '../images/Student/2.png'
import student3 from '../images/Student/3.png'

const randomStudentImage = () => {
    const students = [student1, student2, student3]
    const random = Math.floor(Math.random() * students.length);
    return (
        <Image src={students[random]} wrapped ui={false} />
    )
}

const Student = () => {
    return (
        <div>
            <Slider className="slide">
                <Segment inverted vertical id="student_segment"/>
            </Slider>
            <Container>
                <Divider horizontal>
                    <Header as='h1'>
                    Thesis Advisor
                    </Header>
                </Divider>
                <p>Students in this program should decide their advisor and co-advisor within the first academic year after enrollment. The student should complete <a href='https://drive.google.com/file/d/1yKbITctDpGE7iDE3Xao95HHBA17pagKC/view?usp=sharing'>Advisor/Co-advisor Consent Form</a> and return it to the AIoT office. It shall be approved by the academic committee members. The advisor/co-advisor for the thesis dissertation must be AIoT faculty. Note that a student must choose two advisors, one from Academia Sinica and one from NTU.</p>
                <Divider horizontal>
                    <Header as='h1'>
                    Stipend Guideline
                    </Header>
                </Divider>
                <p>TBA</p>
                <Divider horizontal>
                    <Header as='h1'>
                    Alumni (Year 2022)
                    </Header>
                </Divider>

                <Grid stackable columns={4}>
                    <Grid.Row>
                        <Grid.Column>
                            <Card>
                                {randomStudentImage()}
                                <Card.Content>
                                <Card.Header>Miguel Angel Benalcazar Hernandez</Card.Header>
                                <Card.Description>班柏瑞</Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    Ecuador
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column>
                            <Card>
                                {randomStudentImage()}
                                <Card.Content>
                                <Card.Header>Gladhi Guarddin</Card.Header>
                                <Card.Description>葛丁</Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    Indonesia
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column>
                            <Card>
                                {randomStudentImage()}
                                <Card.Content>
                                <Card.Header>Sofia Ormazabal Arriagda</Card.Header>
                                <Card.Description>鄒智文</Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    Chile
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column>
                            <Card>
                                {randomStudentImage()}
                                <Card.Content>
                                <Card.Header>Mohd Mustaqeem</Card.Header>
                                <Card.Description>莫塔</Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    India
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Card>
                                {randomStudentImage()}
                                <Card.Content>
                                <Card.Header>Saeed Barkabi Zanjani</Card.Header>
                                <Card.Description>巴撒伊</Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    Iran
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column>
                            <Card>
                                {randomStudentImage()}
                                <Card.Content>
                                <Card.Header>Wei-Lun Chen</Card.Header>
                                <Card.Description>陳緯綸</Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    Taiwan
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column>
                            <Card>
                                {randomStudentImage()}
                                <Card.Content>
                                <Card.Header>Javier Atero</Card.Header>
                                <Card.Description>艾維</Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    Spain
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    )
}

export default Student