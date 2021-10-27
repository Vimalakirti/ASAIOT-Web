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
                <p>The courses include graduate-level courses, seminar and project research. Program professors guide students to the latest research topics in the field of Artificial Intelligence of Things to conduct high-quality, cutting-edge research.</p>
                <Divider horizontal>
                    <Header as='h1'>
                    Thesis Advisor
                    </Header>
                </Divider>
                <p>Students in this program should decide their advisor and co-advisor within the first academic year after enrollment. The student should complete Advisor/Co-advisor Consent Form and return it to the AIoT office. It shall be approved by the academic committee members. The advisor/co-advisor for the thesis dissertation must be AIoT faculty. Note that a student must choose two advisors, one from Academic Sinica and one from NTU.</p>
                
                <Divider horizontal>
            <Header as='h1'>
              Costs and Funding
            </Header>
          </Divider>
          <Header as='h2'>
              1. Tuition fee
          </Header>
          <p>The tuition fee is about US$1,500 per year. (Due upon registration)</p>
          <Header as='h2'>
              2. Fellowship and Stipend
          </Header>
          <p>Once admitted, each TIGP student will receive a monthly stipend of NT$34,000 (around USD1,140) for the first year. Additionally, the support will be extended to two more years for students who perform well academically. In subsequent years, i.e., from the third year, the thesis advisor will be responsible for the financial support. The Academic Committee will decide to reduce the student’s stipend level if his or her performance is less than satisfactory.</p>            
          <Header as='h2'>
              3. Medical Insurance
          </Header>
          <p>Students will be required to join <a href="https://www.nhi.gov.tw/English/">NHI</a> after 6 months of continuous residence in Taiwan. The students pay the same premium as all the Taiwan citizens and will be entitled to the same medical coverage. In cases of illness, injury, and childbirth, the beneficiaries can receive medical services; including medication, outpatient and inpatient services from NHI contracted healthcare providers.</p>
          <Header as='h2'>
              4. Living and housing
          </Header>
          <List bulleted size='huge'>
            <List.Item>
            <List.Content>
            On-campus: details please visit our website at <a href='http://tigp.sinica.edu.tw/Accommodation.html'>http://tigp.sinica.edu.tw/Accommodation.html</a>
            </List.Content>
            </List.Item>
            <List.Item>
            <List.Content>
            Off-campus : rents for off-campus apartments range from NT$ 5,000 - 20,000 per month
            </List.Content>
            </List.Item>
          </List>

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