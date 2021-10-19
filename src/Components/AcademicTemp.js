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
                <p>This program is completely taught in English. The courses include graduate-level courses, seminar and project research. Program professors guide students to the newest research topics in the field of Artificial Intelligence of Things to conduct high-quality, cutting-edge research.</p>
                <Divider horizontal>
                    <Header as='h1'>
                    Thesis Advisor
                    </Header>
                </Divider>
                <p>Students in this program should decide their advisor and co-advisor within the first academic year after enrollment. The student should complete Advisor/Co-advisor Consent Form and return it to the AIoT office. It shall be approved by the academic committee members.</p>
                <p>The advisor/co-advisor for the thesis dissertation must be AIoT faculty. A student must choose an advisor from Academic Sinica or the university he/she enrolls.</p>
                <Divider horizontal>
                    <Header as='h1'>
                    Courses
                    </Header>
                </Divider>
                <p>The courses in TIGP AIoT program are graduate-level courses from NTU, NTUST and NTNU.</p>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Curriculum Number</Table.HeaderCell>
                            <Table.HeaderCell>Course Title</Table.HeaderCell>
                            <Table.HeaderCell>Instructor</Table.HeaderCell>
                            <Table.HeaderCell>University</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>CommE5052 </Table.Cell>
                            <Table.Cell>Deep Learning for Computer Vision</Table.Cell>
                            <Table.Cell>YU-CHIANG WANG</Table.Cell>
                            <Table.Cell>NTU</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>CommE5022  </Table.Cell>
                            <Table.Cell>Digital Communications</Table.Cell>
                            <Table.Cell>HSUAN-JUNG SU</Table.Cell>
                            <Table.Cell>NTU</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>CommE5051</Table.Cell>
                            <Table.Cell>Mathematical Principles of Machine Learning </Table.Cell>
                            <Table.Cell>I-HSIANG WANG</Table.Cell>
                            <Table.Cell>NTU</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>EE5041</Table.Cell>
                            <Table.Cell>Stochastic Processes and Applications  </Table.Cell>
                            <Table.Cell>CHAR-DIR CHUNG</Table.Cell>
                            <Table.Cell>NTU</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>EE5184</Table.Cell>
                            <Table.Cell>Machine Learning</Table.Cell>
                            <Table.Cell>HUNG-YI LEE</Table.Cell>
                            <Table.Cell>NTU</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>CSIE5400</Table.Cell>
                            <Table.Cell>Artificial Intelligence </Table.Cell>
                            <Table.Cell>YUNG-JEN HSU</Table.Cell>
                            <Table.Cell>NTU</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>CSIE5043</Table.Cell>
                            <Table.Cell>Machine Learning</Table.Cell>
                            <Table.Cell>HSUAN-TIEN LIN</Table.Cell>
                            <Table.Cell>NTU</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>CSIE7435</Table.Cell>
                            <Table.Cell>Topics in Machine Learning </Table.Cell>
                            <Table.Cell>CHIH-JEN LIN</Table.Cell>
                            <Table.Cell>NTU</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>MI5118701</Table.Cell>
                            <Table.Cell>Artificial Intelligence Technologies and Business Applications </Table.Cell>
                            <Table.Cell>Bor-Shen Lin</Table.Cell>
                            <Table.Cell>NTUST</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>MI5413701</Table.Cell>
                            <Table.Cell>Network Flow Models and Applications </Table.Cell>
                            <Table.Cell>Cheng-Huang Hung</Table.Cell>
                            <Table.Cell>NTUST</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>CS5148701</Table.Cell>
                            <Table.Cell>Queueing Theory</Table.Cell>
                            <Table.Cell>Binayak Kar</Table.Cell>
                            <Table.Cell>NTUST</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>EE5332701</Table.Cell>
                            <Table.Cell>Cloud and Fog Computing in the Internet of Things</Table.Cell>
                            <Table.Cell>Shuhao Liang</Table.Cell>
                            <Table.Cell>NTUST</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>EE5340701</Table.Cell>
                            <Table.Cell>Industrial Internet of Things Programming and Practice</Table.Cell>
                            <Table.Cell>MINH QUANG</Table.Cell>
                            <Table.Cell>NTUST</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>EE6502701</Table.Cell>
                            <Table.Cell>Introduction to Intelligent Control</Table.Cell>
                            <Table.Cell>Shun-Feng Su</Table.Cell>
                            <Table.Cell>NTUST</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>EE5912701</Table.Cell>
                            <Table.Cell>Principle and Applications of Smart Antennas</Table.Cell>
                            <Table.Cell>Hsin-Chin Liu</Table.Cell>
                            <Table.Cell>NTUST</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Container>
        </div>
    )
}

export default AcademicTemp