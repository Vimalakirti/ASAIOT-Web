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
                <p>This program is completely taught in English. The courses include graduate-level courses, seminar and project research. Program professors guide students to the newest research topics in the field of Artificial Internet of Things to conduct high-quality, cutting-edge research.</p>
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
            </Container>
        </div>
    )
}

export default AcademicTemp