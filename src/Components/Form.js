import React from 'react'
import Slider from 'react-slick'
import {
    Table,
    Container,
    Header,
    Segment,
    Divider,
    TableHeaderCell,
    List,
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

                <List bulleted size='huge'>
                    <List.Item>
                        <List.Content as='a' href='https://drive.google.com/file/d/1yKbITctDpGE7iDE3Xao95HHBA17pagKC/view?usp=sharing'>
                        Advisor consent form
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content as='a' href='https://drive.google.com/file/d/1Sb0JgGmkAXS0Ab5qek2Vac6_XBLcWYbs/view?usp=sharing'>
                        Form for leave application
                        </List.Content>
                    </List.Item>
                </List>

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