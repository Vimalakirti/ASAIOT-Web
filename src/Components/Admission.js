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
    Table
} from "semantic-ui-react"
import logo1 from '../images/1.png'
import logo2 from '../images/2.png'
import logo3 from '../images/3.png'

const Admission = () => {
    return (
        <div>
            <Slider className="slide">
                <Segment inverted vertical id="admission_segment"/>
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
              General Introduction
            </Header>
          </Divider>
          <p>The <a href="https://tigp.apps.sinica.edu.tw/index.php">online application</a> starts from November 1st to February 1st every year. Results of admissions are usually announced in late June / early July; admitted applicants may be enrolled in the following fall semester.</p>

          <Divider horizontal>
            <Header as='h1'>
              Requirements
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
              5. A Statement of purpose
            </Header>
            <List bulleted size='huge'>
              <List.Item>
              <List.Content>
              that includes a research plan
              </List.Content>
              </List.Item>
            </List>
            <Header as='h2'>
              6. Curriculum Vitae
            </Header>
            <Header as='h2'>
              7. The Graduate Record Examination (GRE) scores (Optional)
            </Header>
            <Header as='h2'>
              8. Passport and Taiwan Alien Resident Certificate(ARC) (if applicable)
            </Header>
            <Header as='h2'>
              9. Passport-size Photograph
            </Header>
            <List bulleted size='huge'>
              <List.Item>
              <List.Content>
              In color and less than 6 months old, showing a close-up shot of the head and shoulders, and without wearing a hat.
              </List.Content>
              </List.Item>
            </List>
            <Header as='h2'>
              Additional notes
            </Header>
            <List bulleted size='huge'>
              <List.Item>
              <List.Content>
              After reviewing all the supporting documents mentioned above, candidates passing the first screening might be invited for an interview. Local candidates will be asked to come to Academia Sinica for interviews. For international students, interviews via skype will be conducted.
              </List.Content>
              </List.Item>
              <List.Item>
              <List.Content>
              Before logging into the system, please assemble all of the required information and material. If you have any questions about the application process, please get in touch with the assistant to Artificial Intelligence of Things (AIoT) before the application deadline, or check out the FAQ section <a href="https://tigp.apps.sinica.edu.tw/faqs">here</a>.
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
              Costs and Funding
            </Header>
          </Divider>
          <Header as='h2'>
              Fellowship and Stipend
          </Header>
          <p>Once admitted, each TIGP student will receive a monthly stipend of NT$34,000 (around USD1,140) for the first year. Additionally, the support will be extended to two more years for students who perform well academically. In subsequent years, i.e., from the 4th year, the thesis advisor will be responsible for the financial support. The stipend during TIGP studies is merit-based. The Student Affairs Committee reserves the right to reduce the student’s stipend level if his or her academic performance is less than satisfactory.</p>
          <p><a href='https://drive.google.com/file/d/1OuxBgMrllgFCAYXwVe3mNiECnz8F8esE/view?usp=sharing'>Regulation for the stipend</a> / <a href='https://drive.google.com/file/d/1u51SMEhe_f3TRWwzFeBslJHeYQTh-ETg/view?usp=sharing'>Evaluation Details</a></p>

          <Header as='h2'>
              Costs
          </Header>
          <List size='huge'>
              <List.Item>
              <List.Header>1. Tuition Fees</List.Header>
              <List.Content>
              <p>TIGP office subsidizes tuition fees for international students for 5 consecutive years, during which you only need to pay the same amount as the local students do. (If a student applies for suspension anytime during those 5 years, the subsidy cannot be delayed for later use.) For local students, the tuition fee of NTU is NTD 30,360 per semester during the first two years (one academic year has two semesters). Starting from the third to the fifth year, it will be NTD 14,690 per semester. For international students, the tuition fee will double without the subsidy.</p>
              </List.Content>
              </List.Item>
              <List.Item>
              <List.Header>2. Medical Insurance</List.Header>
              <List.Content>
              <p>Students will be required to join <a href="https://www.nhi.gov.tw/English/">NHI</a> after 6 months of continuous residence in Taiwan. The students pay the same premium as all Taiwanese citizens and will be entitled to the same medical coverage. In cases of illness, injury, and childbirth, the beneficiaries can receive medical services; including medication, outpatient and inpatient services from NHI contracted healthcare providers.</p>
              </List.Content>
              </List.Item>
              <List.Item>
              <List.Header>3. Living and Housing Cost</List.Header>
              <List.Content>
                <p>TIGP provides the first-year student with the on-campus dormitory which costs NTD 5,500 per month (See more at https://tigp.sinica.edu.tw/posts/155356). The rents for off-campus housing ranges from NTD 7,000 to NTD15,000 per month. Living expenses vary depending on your needs, generally, it is about NTD 6,000 to NTD 10,000.</p>
              </List.Content>
              </List.Item>
            </List>
          <Header as='h3'>
          Here’s a summary of the costs: 
          </Header>
          <Table celled structured>
            <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='2'>Item</Table.HeaderCell>
              <Table.HeaderCell >Fee</Table.HeaderCell>
            </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
            <Table.Cell rowSpan='2' colSpan='2'>Tuition Fees</Table.Cell>
            <Table.Cell>NTD 30,360 / semester (1st~4th semester)</Table.Cell>
            </Table.Row>
            <Table.Row>
            <Table.Cell >NTD 14,690 / semester (5th~10th semester)</Table.Cell>
            </Table.Row>
            <Table.Row>
            <Table.Cell colSpan='2'>Medical Insurance</Table.Cell>
            <Table.Cell>NTD 4,956 / semester</Table.Cell>
            </Table.Row>
            <Table.Row>
            <Table.Cell colSpan='2'>Living Expense</Table.Cell>
            <Table.Cell>NTD 6,000 - 8,000 / month</Table.Cell>
            </Table.Row>
            <Table.Row>
            <Table.Cell rowSpan='2'>Housing</Table.Cell>
            <Table.Cell>TIGP Student Dorm</Table.Cell>
            <Table.Cell>NTD 5,000 / month</Table.Cell>
            </Table.Row>
            <Table.Row>
            <Table.Cell>Off-Campus</Table.Cell>
            <Table.Cell>NTD 7,000 to 15,000 / month</Table.Cell>
            </Table.Row>
            </Table.Body>
          </Table>
          </Container>
        </div>
    )
}

export default Admission