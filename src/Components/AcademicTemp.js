import React from 'react'
import Slider from 'react-slick'
import {
    Table,
    Container,
    Header,
    List,
    Segment,
    Divider,
} from "semantic-ui-react"

const AcademicTemp = () => {
    return (
        <div>
            <Slider className="slide">
                <Segment inverted vertical id="academic_segment"/>
            </Slider>
            <Container>
                <Divider horizontal>
                    <Header as='h1'>
                    Program Requirement
                    </Header>
                </Divider>
                <p>The degree of Doctor of Philosophy is offered under the general regulations of the National Taiwan University. The Ph.D. degree program requires at least two years of graduate study, and must be completed within seven years upon matriculation. For students with earned M.S. or equivalent degrees, requirements of the Ph.D. degree may be summarized as follows. The student must complete</p>
                <List bulleted size='huge'>
                    <List.Item>
                        <List.Content>
                        at least 18 semester-credits of graduate-level courses (excluding seminars, independent studies, theses, and foreign languages), including at least 9 credits in the student’s respective Group;
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                        a qualification exam must be completed within 5 semester after admission into the Ph.D. program;
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                        a written dissertation based on original research, and
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                        an oral examination that is a defense of dissertation research and is taken near the completion of the program.
                        </List.Content>
                    </List.Item>
                </List>
                <p>The courses include graduate-level courses, seminar and project research. Program professors guide students to the latest research topics in the field of Artificial Intelligence of Things to conduct high-quality, cutting-edge research.</p>

                <Divider horizontal>
                    <Header as='h1'>
                    Courses
                    </Header>
                </Divider>
                <p>The courses in TIGP AIoT program are graduate-level courses from <a href="https://nol.ntu.edu.tw/nol/coursesearch/index.php?lang=EN">NTU</a>, <a href="https://querycourse.ntust.edu.tw/querycourse/#/">NTUST</a> and <a href="https://courseap2.itc.ntnu.edu.tw/acadmOpenCourse/index.jsp">NTNU</a>. These courses cover a wide range of areas in AIoT such as Artificial Intelligence, Wireless Communication and Embedded System. Some areas and courses are listed as examples in the table below.</p>
                <Table celled structured>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Area</Table.HeaderCell>
                            <Table.HeaderCell>Course Title</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell rowSpan='5'>Artificial Intelligence</Table.Cell>
                            <Table.Cell>Deep Learning for Computer Vision</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Mathematical Principles of Machine Learning</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Machine Learning</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Artificial Intelligence</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Artificial Intelligence Technologies and Business Applications</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell rowSpan='3'>Communication Theory</Table.Cell>
                            <Table.Cell>Digital Communications</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Stochastic Processes and Applications</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Queueing Theory</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell rowSpan='3'>Embedded System</Table.Cell>
                            <Table.Cell>Cloud and Fog Computing in the Internet of Things</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Industrial Internet of Things Programming and Practice</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Embedded OS Implementation</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Computer Network</Table.Cell>
                            <Table.Cell>Network Flow Models and Applications</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell rowSpan='3'>Wireless Communication</Table.Cell>
                            <Table.Cell>Principle and Applications of Smart Antennas</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Wireless Communication</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Special Topics on Antenna </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Container>
        </div>
    )
}

export default AcademicTemp