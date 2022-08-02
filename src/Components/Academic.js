import React from 'react'
import Slider from 'react-slick'
import {
    Table,
    Container,
    Header,
    Segment,
    Divider,
} from "semantic-ui-react"

const Academic = () => {
    return (
        <div>
            <Slider className="slide">
                <div id="academic_background">
                    <Segment inverted vertical id="academic_segment"/>
                </div>
            </Slider>
            <Container>
                <Divider horizontal>
                    <Header as='h1'>
                    Course Schedule for Fall 2022
                    </Header>
                </Divider>
                <p>For more course information, visit <a href="https://nol.ntu.edu.tw/nol/coursesearch/index.php?lang=EN">here</a>.</p>
                <Table celled structured>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Subject</Table.HeaderCell>
                            <Table.HeaderCell>Credit</Table.HeaderCell>
                            <Table.HeaderCell>Chair</Table.HeaderCell>
                            <Table.HeaderCell>Time</Table.HeaderCell>
                            <Table.HeaderCell>Place</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell><a href="https://drive.google.com/file/d/1mIeQfbPe_o9_OCj9JDIetbNA3gbwrUls/view?usp=sharing">Seminar</a></Table.Cell>
                            <Table.Cell>0</Table.Cell>
                            <Table.Cell>Dr. Che Lin</Table.Cell>
                            <Table.Cell>Fri 1400-1600</Table.Cell>
                            <Table.Cell>N106, IIS, AS</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

                <Divider horizontal>
                    <Header as='h1'>
                    Graduation Requirement
                    </Header>
                </Divider>
                <p>Graduate Requirement for TIGP AIoT Program (<a href='https://drive.google.com/file/d/170VegzZ6fMVUbI2it7wZ-gTARxWWjzNK/view?usp=sharing'>Ch</a>/<a href='https://drive.google.com/file/d/1vV0QHMjeLNn7pUc43U6OT5HYDMudosdC/view?usp=sharing'>En</a>)</p>
                <p>Research in AIoT Program can be categorized into four fields which correspond to the institutes under the College of Electrical Engineering and Computer Science, National Taiwan University. Students shall decide their research interests and follow the graduation requirement based on the graduate institutes below.</p>
                <Table celled structured>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell colSpan='6'>Research in AIoT Program can be categorized into four fields which correspond to the institutes under the College of Electrical Engineering and Computer Science, National Taiwan University. Students shall decide their research interests and follow the graduation requirement based on the graduate institutes below.</Table.HeaderCell>
                        </Table.Row>
                        <Table.Row>
                            <Table.HeaderCell colSpan='2'></Table.HeaderCell>
                            <Table.HeaderCell ><a href='https://graduate.ee.ntu.edu.tw/#/'>Graduate Institute of Electrical Engineering (EE)</a></Table.HeaderCell>
                            <Table.HeaderCell ><a href='https://comm.ntu.edu.tw/en/'>Graduate Institute of Communication Engineering (GICE)</a></Table.HeaderCell>
                            <Table.HeaderCell ><a href='https://www.inm.ntu.edu.tw/main.php'>Graduate Institute of Networking and Multimedia (GINM)</a></Table.HeaderCell>
                            <Table.HeaderCell ><a href='https://www.csie.ntu.edu.tw/main.php'>Graduate Institute of Computer Science and Information Engineering (CSIE)</a></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell rowSpan='6'>Course Requirements: <br/>at least 18 credits, excluding PhD Thesis, Special Project, Seminar, Udergraduate Course or General Course</Table.Cell>
                            <Table.Cell>PhD Thesis (0 credit)</Table.Cell>
                            <Table.Cell>At least in the last semester</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Special Project (1 credit)</Table.Cell>
                            <Table.Cell>Every semester during the study except for the graduation semester</Table.Cell>
                            <Table.Cell>Every semester during the study (Those who completed 6 semesters can waive one semester after the advisor's approval)</Table.Cell>
                            <Table.Cell>Every semester before taking PhD Thesis</Table.Cell>
                            <Table.Cell>Every semester</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Seminar (0 credit)</Table.Cell>
                            <Table.Cell>Every semester during the study except for the graduation semester</Table.Cell>
                            <Table.Cell>In the previous 6 semesters, one of which can be replaced with the seminar imparted by the other institute under the College of Electrical Engineering and Computer Science after the advisor's approval.</Table.Cell>
                            <Table.Cell>4 semesters</Table.Cell>
                            <Table.Cell>4 semesters</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Other credits required by each institute</Table.Cell>
                            <Table.Cell>At least 9 credits must be from EE. EE course should be identified by the advisor.</Table.Cell>
                            <Table.Cell>At least 9 credits must be from GICE. GICE course should be identified by the advisor.</Table.Cell>
                            <Table.Cell>1. 18 credits must be from GINM <br/>2. Take three out of the four categories, i.e., Multi-Media Technology, Networking Technology, Systems and Application, Data Science and AI. At least 6 credits must come from multimedia or networking category, and at least 3 credits in each of the other two categories. One course cannot be counted multiple times to satisfy the aforementioned requirement.</Table.Cell>
                            <Table.Cell><a href='https://www.csie.ntu.edu.tw/stu/recruit.php?Sn=22'>1. At least 18 credits must be from CISE. <br/>2. Cross-department electives must be research-related and may not exceed 9 credits. (Application form is needed)</a><br/>(跨所選修申請書需英譯)</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Specific Field/Group</Table.Cell>
                            <Table.Cell>Control Systems, Power Systems, Computer Science, Information Security</Table.Cell>
                            <Table.Cell>Electromagnetics (EM), Communication and Signal Processing (CSP), Data Science (DS)</Table.Cell>
                            <Table.Cell>Multi-Media Technology, Networking Technology, Systems and Application, Data Science and AI</Table.Cell>
                            <Table.Cell>Systems and Network, Multimedia and Contents, Data Science and AI, Bioinformatics and Theory</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell colSpan='5'>In addition to the above-mentioned course, it's mandatory for students to complete Research Ethics Education course within one year after enrollment.</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell rowSpan='5'>Qualification Assessment</Table.Cell>
                            <Table.Cell>Measure</Table.Cell>
                            <Table.Cell>Pass the required exam depending on the group<br/> (需英譯資格考附加說明)</Table.Cell>
                            <Table.Cell><a href='https://comm.ntu.edu.tw/en/Doctoral_Qualification_Exam.php'>Pass the required exam depending on the group (link)</a></Table.Cell>
                            <Table.Cell>Pass 4 out of the 6 core courses</Table.Cell>
                            <Table.Cell>1. Fundamental courses<br/>2. Research ability assessment</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Application date/form</Table.Cell>
                            <Table.Cell><a href="https://graduate.ee.ntu.edu.tw/#/studentAffairs/docQualificationTest">(附件:申請表)</a><br/>(需英譯)</Table.Cell>
                            <Table.Cell><a href="https://comm.ntu.edu.tw/en/Doctoral_Qualification_Exam.php">Visit the website. The exam will be held once each semester, detailed schedule is subject to GICE.</a></Table.Cell>
                            <Table.Cell>The exam will be held 4 weeks after the beginning of each semester. Apply for the exam through email before the semester gets started. </Table.Cell>
                            <Table.Cell><a href="https://www.csie.ntu.edu.tw/stu/recruit.php?Sn=57">(附件: 申請表)</a><br/>(需英譯)</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell rowSpan='2'>Deadline</Table.Cell>
                            <Table.Cell>within 4 semesters<br/>(excluding any leaves of absence)</Table.Cell>
                            <Table.Cell>within 5 semesters<br/>(excluding any leaves of absence)</Table.Cell>
                            <Table.Cell>1. Students need to take at least one exam by the end of the first year. <br/>2. Complete within 5 semesters (including any leaves of absense)</Table.Cell>
                            <Table.Cell>within 3 years<br/> (including any leaves of absense)</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell colSpan='4'>All the deadline can be deferred for one year for students in AIoT Program</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Exemption</Table.Cell>
                            <Table.Cell><a href='https://graduate.ee.ntu.edu.tw/#/studentAffairs/docQualificationTest'>Either by taking courses or publishing papers, should apply beforehand and get the committee's approval<br/>(附件:申請表)</a><br/>(無英譯申請書，需翻譯)</Table.Cell>
                            <Table.Cell>By taking the courses</Table.Cell>
                            <Table.Cell><a href='https://www.inm.ntu.edu.tw/files/archive/355_ed57dfd7.pdf'>1. By taking courses<br/>2. By publishing papers<br/>3. Through system implementation</a><br/>(申請書需英譯)</Table.Cell>
                            <Table.Cell></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>PhD Candidate</Table.Cell>
                            <Table.Cell colSpan='5'>A doctoral student shall meet the following two conditions to be nominated as a Ph.D. candidate:<br/>1. Completing all the required coursework for the doctoral degree<br/>2. 2. Passing the doctoral candidacy qualifying examination (i.e., Qualification Assessment)</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell rowSpan='3'>Thesis Proposal Review</Table.Cell>
                            <Table.Cell>Prerequisite</Table.Cell>
                            <Table.Cell>Pass Qualification Assessment</Table.Cell>
                            <Table.Cell>Pass Qualification Assessments</Table.Cell>
                            <Table.Cell>1. Fulfill the Qualification Assessment and Course Requirements <br/>2. Get the advisor's approval</Table.Cell>
                            <Table.Cell>The next semester after fulfilling the PhD candidate requirement</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Measure</Table.Cell>
                            <Table.Cell><a href='https://graduate.ee.ntu.edu.tw/#/studentAffairs/docThesisReview'>Present the proposal</a><br/>(需英譯)</Table.Cell>
                            <Table.Cell><a href='https://comm.ntu.edu.tw/Thesis.php'>By research proposal or by paper credits</a><br/>(需英譯)</Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell><a href='https://www.csie.ntu.edu.tw/stu/recruit.php?Sn=22'>Present the proposal</a><br/>(需英譯)</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Deadline</Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell>Within 3 semesters after passing the Qualification Assessments</Table.Cell>
                            <Table.Cell></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell rowSpan='3'>PhD Degree Oral Defense</Table.Cell>
                            <Table.Cell colSpan='5'>Thesis Proposal Review and PhD Degree Oral Defense cannot be held in the same semester.</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Prerequisite</Table.Cell>
                            <Table.Cell>1. Complete Thesis Proposal Review.<br/>2. Apply for the review.</Table.Cell>
                            <Table.Cell>Complete Thesis Proposal Review.</Table.Cell>
                            <Table.Cell>1. Complete Thesis Proposal Review.<br/>2. Get the advisor's approval and apply for the review</Table.Cell>
                            <Table.Cell>Complete Thesis Proposal Review. </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Application Form</Table.Cell>
                            <Table.Cell><a href='https://graduate.ee.ntu.edu.tw/#/studentAffairs/qualificationTest'>Visit EE website</a></Table.Cell>
                            <Table.Cell><a href='https://comm.ntu.edu.tw/en/Oral_Defense.php'>Visit GICE website</a></Table.Cell>
                            <Table.Cell><a href='https://www.inm.ntu.edu.tw/info2/archive2.php?class=101'>Visit GINM website</a></Table.Cell>
                            <Table.Cell><a href='https://www.csie.ntu.edu.tw/stu/recruit.php?class=103'>Visit CSIE website</a></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell colSpan='6'>In case of any discrepancies, the Chinese version shall be consulted.</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Container>
        </div>
    )
}

export default Academic