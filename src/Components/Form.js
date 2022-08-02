import React from 'react'
import Slider from 'react-slick'
import {
    Table,
    Container,
    Header,
    Segment,
    Divider,
    TableHeaderCell,
} from "semantic-ui-react"

const Form = () => {
    return (
        <div>
            <Slider className="slide">
                <Segment inverted vertical id="form_segment"/>
            </Slider>
            <Container>
                <Divider horizontal>
                    <Header as='h1'>
                    Forms
                    </Header>
                </Divider>
                <Table celled structured>
                    <Table.Header>
                        <Table.Row>
                            <TableHeaderCell colspan='3'>Item</TableHeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell rowspan='5' colspan='2'>Student Affairs</Table.Cell>
                            <Table.Cell><a href='#'>Student Handbook</a></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><a href='https://drive.google.com/file/d/1OuxBgMrllgFCAYXwVe3mNiECnz8F8esE/view?usp=sharing'>Regulation for the Stipend</a></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><a href='https://drive.google.com/file/d/1u51SMEhe_f3TRWwzFeBslJHeYQTh-ETg/view?usp=sharing'>Stipend Guideline</a></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Application for the leave (<a href='https://docs.google.com/document/d/1BnAiC-uHreI7LXRz93KDhXcE0zA7gN-a/edit?usp=sharing&ouid=108727198679634274424&rtpof=true&sd=true'>word</a>/<a href='https://drive.google.com/file/d/1Sb0JgGmkAXS0Ab5qek2Vac6_XBLcWYbs/view?usp=sharing'>pdf</a>)</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><a href='https://drive.google.com/file/d/1yKbITctDpGE7iDE3Xao95HHBA17pagKC/view?usp=sharing'>Advisor consent form</a></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell colspan='2'>Course</Table.Cell>
                            <Table.Cell><a href='#'>Application for Cross-department electives (CSIE)</a></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell rowspan='5'>Qualification Assessment</Table.Cell>
                            <Table.Cell rowspan='3'>EE</Table.Cell>
                            <Table.Cell><a href='#'>Application for Qualification Assessment</a></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><a href='#'>Application for exemption by taking courses</a></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><a href='#'>Application for exemption by publishing papers</a></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell rowspan='2'>CSIE</Table.Cell>
                            <Table.Cell><a href='#'>Fundamental courses</a></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><a href='#'>Research ability assessment</a></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell rowspan='5'>Thesis Proposal Review</Table.Cell>
                            <Table.Cell>EE</Table.Cell>
                            <Table.Cell><a href='#'>Application for thesis proposal review</a></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell rowspan='2'>GICE</Table.Cell>
                            <Table.Cell><a href='#'>Application for thesis proposal review by research proposal</a></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><a href='#'>Application for thesis proposal review by paper credits</a></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>GINM</Table.Cell>
                            <Table.Cell><a href='#'>Application for thesis proposal review</a></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>CSIE</Table.Cell>
                            <Table.Cell><a href='#'>Application for thesis proposal review</a></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell colspan='2' rowspan='2'>Other forms or attachments</Table.Cell>
                            <Table.Cell><a href='https://drive.google.com/file/d/1mIeQfbPe_o9_OCj9JDIetbNA3gbwrUls/view?usp=sharing'>Syllabusf for 2022 Fall Seminar</a></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><a href='https://drive.google.com/file/d/1VyR2nipL-UxARk4SsV03mQjkG5xhliRJ/view?usp=sharing'>Faculty list</a></Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

                <Divider horizontal>
                    <Header as='h1'>
                    Links
                    </Header>
                </Divider>
                <Table celled structured>
                    <Table.Header>
                        <Table.Row>
                            <TableHeaderCell colspan='2'>Institute/Organization</TableHeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell rowspan='3'>Academia Sinica</Table.Cell>
                            <Table.Cell><a href='https://www.iis.sinica.edu.tw/en/index.html'>Institute of Information Science (IIS)</a></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><a href='https://www.citi.sinica.edu.tw/en/'>Research enter for Information Technology Innovation (CITI)</a></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><a href='https://tigp.sinica.edu.tw/'>TIGP office</a></Table.Cell>
                        </Table.Row>
                        
                        <Table.Row>
                            <Table.Cell rowspan='7'>National Taiwan University</Table.Cell>
                            <Table.Cell><a href='https://eecs.ntu.edu.tw/?locale=en'>College of Electrical Engineering and Computer Science</a></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><a href='https://www.ee.ntu.edu.tw/graduate/english/'>Graduate Institute of Electrical Engineering</a></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><a href='https://www.csie.ntu.edu.tw/main.php'>Department of Computer Science and Information Engineering</a></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><a href='https://comm.ntu.edu.tw/en/'>Graduate Institute of Communication Engineering</a></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><a href='https://www.inm.ntu.edu.tw/main.php'>Graduate Institute of Networking and Multimedia</a></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><a href='https://oia.ntu.edu.tw/en/'>Office of International Affairs</a></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><a href='https://www.aca.ntu.edu.tw/w/acaEN/Index'>Office of Academic Affairs</a> </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell rowspan='2'>Other Useful Link</Table.Cell>
                            <Table.Cell><a href='https://www.ifs.sinica.edu.tw/'>Information for foreigners</a></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><a href='https://coa.immigration.gov.tw/coa-frontend/student/entry?lang=en'>National Immigration Agency (ARC Online Application)</a></Table.Cell>
                        </Table.Row>

                    </Table.Body>
                </Table>
                
            </Container>
        </div>
    )
}

export default Form