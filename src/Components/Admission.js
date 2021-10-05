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
                  circular
                  size="small"
                  src="/images/square-image.png"
                />
                <Header as="h1">Admission Brochure</Header>
                <p>
                  [TODO] PDF link here 
                </p>
              </Grid.Column>
              <Grid.Column>
                <Image
                  centered
                  circular
                  size="small"
                  src="/images/square-image.png"
                />
                <Header as="h1">Application Deadline</Header>
                <p>Early Decision: December 31<br/>Regular Deadline: February 1</p>
              </Grid.Column>
              <Grid.Column>
                <Image
                  centered
                  circular
                  size="small"
                  src="/images/square-image.png"
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
                  Bachelor's or Master's degree in computer science or other related areas, or equivalent qualification based on the regulation of the Ministry of Education of Taiwan.
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
                  Official transcripts in English from academic institutions attended after senior high school.
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
              5. Programming skills
            </Header>
            <List bulleted size='huge'>
              <List.Item>
              <List.Content>
              ​​Demonstrated by courses or projects completed.
              </List.Content>
              </List.Item>
            </List>
            <Header as='h2'>
              6. A Statement of purpose and study plan
            </Header>
            <List bulleted size='huge'>
              <List.Item>
              <List.Content>
              ​​Less than three pages
              </List.Content>
              </List.Item>
            </List>
            <Header as='h2'>
              7. The Graduate Record Examination (GRE) / Undergraduate or Master's thesis/ Research Publication
            </Header>
            <List bulleted size='huge'>
              <List.Item>
              <List.Content>
              Alternatively, the applicants should provide us with supplementary information (e.g. undergraduate or Master's thesis, research publication, description of research experiences) that can demonstrate your potential in research.
              </List.Content>
              </List.Item>
            </List>
            

          <Divider horizontal>
            <Header as='h1'>
              Costs and Funding
            </Header>
          </Divider>
          <Header as='h2'>
              1. Tuition fee
          </Header>
          <List bulleted size='huge'>
            <List.Item>
            <List.Content>
            The tuition fee is about US$1,500 per year. (Due upon registration)
            </List.Content>
            </List.Item>
          </List>
          <Header as='h2'>
              2. Fellowship and Stipends
          </Header>
          <List bulleted size='huge'>
            <List.Item>
            <List.Content>
            Once admitted, each TIGP student will receive a monthly stipend of NT$34,000 (around USD1,140) for the first year. Additionally, the support will be extended to two more years for students who perform well academically. In subsequent years (from the 4th year), the thesis advisor will be responsible for the financial support. The Academic Committee will decide to reduce the student’s stipend level if his or her performance is less than satisfactory.
            </List.Content>
            </List.Item>
            <List.Item>
            <List.Content>
            The students are required to find their own financial support prior to arriving in Taiwan. The fellowship will be given in the second month (October) after school starts.
            </List.Content>
            </List.Item>
          </List>
          <Header as='h2'>
              3. Medical Insurance
          </Header>
          <p>All international students can apply to enroll in the Taiwan’s National Health Insurance Program through the partner school after a continuous residence within Taiwan for 6 months.</p>
          <List bulleted size='huge'>
            <List.Item>
            <List.Content>
            ​​Fee NT$??? /per month
            </List.Content>
            </List.Item>
            <List.Item>
            <List.Content>
            Payment is calculated separately from the tuition fee.
            </List.Content>
            </List.Item>
          </List>
          <Header as='h2'>
              4. Living and housing
          </Header>
          <List bulleted size='huge'>
            <List.Item>
            <List.Content>
            On campus: details please visit our website at <a href='http://tigp.sinica.edu.tw/Accommodation.html'>http://tigp.sinica.edu.tw/Accommodation.html</a>
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