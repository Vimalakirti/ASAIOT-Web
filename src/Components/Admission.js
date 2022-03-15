import React from 'react'
import Slider from 'react-slick'
import {
    List,
    Container,
    Grid,
    Header,
    Image,
    Segment,
    Divider,
    Table,
    Button
} from "semantic-ui-react"
import logo1 from '../images/1.png'
import logo2 from '../images/2.png'
import logo3 from '../images/3.png'

const Admission = () => {
    return (
        <div>
            <Slider className="slide">
                <Segment inverted vertical id="admission_segment">
                    
                    <Container text className="active">
                    <Header inverted as="h1">
                        Admission
                    </Header>
                    </Container>
                </Segment>
            </Slider>
            <Segment vertical>
            <Grid container stackable textAlign="center" columns={3}>
              <Grid.Column>
                <Image
                  centered
                  size="small"
                  src={logo1}
                />
                <Header as="h1">Admission Brochure</Header>
                <p>
                  Info. about <a href="https://tigp.sinica.edu.tw/">TIGP program</a>
                </p>
              </Grid.Column>
              <Grid.Column>
                <Image
                  centered
                  size="small"
                  src={logo2}
                />
                <Header as="h1">Application Deadline</Header>
                <p>Regular Deadline: January 27</p>
              </Grid.Column>
              <Grid.Column>
                <Image
                  centered
                  size="small"
                  src={logo3}
                />
                <Header as="h1">Apply Now</Header>
                <p>
                  Apply <a href="https://tigp.apps.sinica.edu.tw/index.php">on-line</a>!
                </p>
              </Grid.Column>
            </Grid>
          </Segment>
          <Container>
          <Divider horizontal>
            <Header as='h1'>
              Admission requirements
            </Header>
          </Divider>
            <Header as='h2'>
              1. Degree certificate
            </Header>
            <List bulleted size='huge'>
              <List.Item>
                  <List.Content>
                  Master's degree in computer science, electrical engineering, or other related areas, or equivalent qualification based on the regulation of the Ministry of Education of Taiwan.
                  </List.Content>
              </List.Item>
              <List.Item>
                  <List.Content>
                  Unless the diplomas are issued in English by the institution, the official records in their original language must be submitted with an authorized, complete, and exact English translation.
                  </List.Content>
              </List.Item>
            </List>
            <Header as='h2'>
              2. Academic transcript
            </Header>
            <List bulleted size='huge'>
              <List.Item>
                  <List.Content>
                  Including an explanation of grading system.
                  </List.Content>
              </List.Item>
              <List.Item>
                  <List.Content>
                  Please provide an explanation of the grading system. If the transcript is not in English, an English translation is required.​
                  </List.Content>
              </List.Item>
            </List>
            <Header as='h2'>
              3. Language proficiency requirement
            </Header>
            <List bulleted size='huge'>
              <List.Item>
                  <List.Content>
                  This requirement can be waived for those who come from <a href='https://drive.google.com/file/d/1oEiEJtKGS8tGFj80edsTC0Cm9c5X-eXj/view?usp=sharing'>English-speaking countries</a> or those who have obtained a bachelor's or master's degree from native English-speaking countries.
                  </List.Content>
              </List.Item>
              <List.Item>
                  <List.Content>
                  For those applicants for whom English is not their first language, an English test result of one of the following is required:
                  </List.Content>
                  <Table basic='very'>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>English Test</Table.HeaderCell>
                        <Table.HeaderCell>Minimum Requirement Score</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>

                    <Table.Body>
                      <Table.Row>
                        <Table.Cell>TOEFL</Table.Cell>
                        <Table.Cell>79 (iBT)</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>IELTS</Table.Cell>
                        <Table.Cell>5.5</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>GEPT</Table.Cell>
                        <Table.Cell>High Intermediate level</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>TOEIC</Table.Cell>
                        <Table.Cell>785</Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
              </List.Item>
              <List.Item>
                <List.Content>
                The English proficiency exam must be taken in the last 24 months and the score could be submitted later but must be before July 31. Without a valid English proficiency exam score, we cannot guarantee that your application for the English language waiver will be accepted.
                </List.Content>
              </List.Item>
            </List>
            <Header as='h2'>
              4. Three letters of recommendation
            </Header>
            <List bulleted size='huge'>
              <List.Item>
              <List.Content>
              ​​It is suggested that one of the letters comes from your advisor.
              </List.Content>
              </List.Item>
            </List>
            <Header as='h2'>
              5. A Statement of purpose and CV
            </Header>
            <List bulleted size='huge'>
              <List.Item>
              <List.Content>
              that includes a research plan
              </List.Content>
              </List.Item>
            </List>
            <Header as='h2'>
              6. The Graduate Record Examination (GRE) scores (Optional)
            </Header>
            <Header as='h2'>
              7. Passport and Taiwan Alien Resident Certificate(ARC) (if applicable)
            </Header>
            <Header as='h2'>
              8. Passport-size Photograph
            </Header>
            <List bulleted size='huge'>
              <List.Item>
              <List.Content>
              In color and less than 6 months old, showing a close-up shot of the head and shoulders, and without wearing a hat.
              </List.Content>
              </List.Item>
            </List>
            <Header as='h2'>
              9. Additional notes
            </Header>
            <List bulleted size='huge'>
              <List.Item>
              <List.Content>
              After reviewing all the supporting documents mentioned above, candidates passing the first screening might be invited for an interview. Local candidates will be asked to come to Academia Sinica for interviews. For international students, interviews via skype will be conducted.
              </List.Content>
              </List.Item>
              <List.Item>
              <List.Content>
              Before logging into the system, please assemble all of the required information and material. If you have any questions about the application process, please get in touch with the assistant to Artificial Intelligence of Things (AIoT) before the application deadline, Jan. 27, 2022.
              </List.Content>
              </List.Item>
              <List.Item>
              <List.Content>
              The admission notice (including conditional admission) will be sent in early May. For those who receive conditional admission, the students will need to submit the documents (such as an official master's degree diploma or GRE) by July 31.
              </List.Content>
              </List.Item>
            </List>

          <Divider horizontal>
            <Header as='h1'>
              Apply on-line
            </Header>
          </Divider>
          <Container textAlign='center'>
          <Button size='massive' positive href='https://tigp.apps.sinica.edu.tw/index.php'>Click me to apply now!</Button>
          </Container>
          </Container>
        </div>
    )
}

export default Admission