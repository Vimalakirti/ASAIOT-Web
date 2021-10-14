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

const Student = () => {
    return (
        <div>
            <Slider className="slide">
                <Segment inverted vertical id="student_segment">
                    
                    <Container text className="active">
                    <Header inverted as="h1">
                        Student
                    </Header>
                    </Container>
                </Segment>
            </Slider>
            <Container>
                <Divider horizontal>
                    <Header as='h1'>
                    Thesis Advisor
                    </Header>
                </Divider>
                <p>(Copied from SNHCC currently)</p>
                <p><font color='red'>The TIGP on Social Networks and Human-Centered Computing cuts into social networks and human-centered computing mainly from the viewpoint of computer science and engineering, and is supplemented by social and behavioral science, to provide students in the program with interdisciplinary training.</font></p>
                <p>This program is completely taught in English. The courses include core courses, elective courses, seminar and project research. Program professors guide students to the newest research topics in the field of social network and human-centered computing to conduct high-quality, cutting-edge research.</p>
                <p>This program adopts a <font color='red'>team-teaching system</font>, and students should decide their <font color='red'> advisor and co-advisor within the first academic year after enrollment</font>. The student should complete Advisor/Co-advisor Consent Form and return it to the SNHCC office. It shall be approved by the academic committee members.</p>
                <p>The advisor/co-advisor for the thesis dissertation must be SNHCC faculty. A student must choose an advisor from Academic Sinica or the university he/she enrolls.</p>
                <p>For example, if you enroll in NCCU, you may choose advisor from AS and a co-advisor from NCCU (or you may choose an advisor from NCCU and a co-advisor from AS). But a NCCU student can't choose NTHU teacher to be your advisor, but this NTHU teacher can be your one of your co-advisors.</p>
                <p>If you want to change your advisor or co-advisor, you need to complete Petition for Change of Advisor. It shall be approved by the academic committee members.</p>
                <p>The forms are available in the TIGP SNHCC office. <font color='red'>The teachers who are eligible to take students will be announced at the end of each semester.</font></p>
                <Divider horizontal>
                    <Header as='h1'>
                    Stipend Guideline
                    </Header>
                </Divider>
                <p><font color='red'>Stipend for the first yearis guaranteed</font> ; the amount of the stipend for the second and third years will depend on student's performance. In the subsequent year, the financial support will be provided by the student's thesis advisor. The amount of the support will be at the discretion of the advisor. Violations of ethics, e.g. plagiarism, unauthorized absence from class, distasteful conduct are considered as "bad" performance and may result in reduced allowance.</p>
                <List ordered size='huge'>
                    <List.Item>
                        <List.Content>
                        Semester Evaluation by Mentor
                        </List.Content>
                        <List>
                            <List.Item>
                                Mentor
                                <List>
                                    <List.Item>&nbsp;&nbsp;Each student is required to <font color='red'>find one mentor within a month after the semester starts.</font>The mentor will give the student guidance or advises as needed. The mentor may offer suggestions on how to find advisor, participate in a lab activity or project, access to a professional community, recommend resources, lectures or conferences, and others. The mentorship will last until the student has officially found the thesis advisor. (The mentor will not necessary be your advisor in the future.)</List.Item>
                                    <List.Item>&nbsp;&nbsp;The mentor can be from Academia Sinica or the partner university one is enrolled. Each mentor can take two students at most.</List.Item>
                                    <List.Item>&nbsp;&nbsp;A mentee will need to take initiative to arrange meetings with the mentor in a regular basis.</List.Item>
                                    <List.Item>&nbsp;&nbsp;Complete Mentor Consent Form a month after the semester starts.</List.Item>
                                </List>
                            </List.Item>
                            <List.Item>
                                Evaluation by Mentor
                                <List>
                                    <List.Item>&nbsp;&nbsp;In the end of every semester, the mentor will evaluate the student's academic performance based on attendance, grades, attitude, participation and enthusiasm upon the PhD studies. The evaluation form needs to be filled and signed by the mentor.</List.Item>
                                    <List.Item>&nbsp;&nbsp;In addition, students should submit the transcript and supporting materials, such as lab report, current study plan to AIoT office before the semester ends. If the mentee remains good standing, he/she will receive full amount of stipend for the following semester.</List.Item>
                                </List>
                            </List.Item>
                            <List.Item>
                                Evaluation by Student Affairs Committee
                                <div>The purpose of stipend is to enhance and support the overall educational experiences. If the mentee's performance is not satisfactory, the Student Affairs Committee reserves the right to deduct the amount of stipend.</div>
                            </List.Item>
                            <List.Item>
                                Review and Notification
                                <div>The review will be held after the grade for each course is completed <font color='red'>every semester</font>. The result will be emailed to each student individually at the beginning of the following semester (for fall semester result), or by the end of July (for spring semester). If there is stipend deduction, it will start from March or September.</div>
                            </List.Item>
                        </List>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                        Advisor
                        </List.Content>
                        <List>
                            <List.Item><font color='red'>If a student cannot find thesis advisor by the end of third semester, the stipend will be terminated.</font></List.Item>
                            <List.Item>For the fourth year students, the financial support will be provided by the thesis advisor and the amount will not be guaranteed to be the same as TIGP stipend.</List.Item>
                        </List>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                        Misconduct
                        </List.Content>
                        <div>Any serious on-campus, off-campus, scholarly misconduct will be evaluated by the Student Affairs Committee for reduced allowance. For serious violation or misconduct, e.g. plagiarism, stealing, etc, the procedure shall be done in accordance with the Student Award and Penalty Regulations of NTU.</div>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                        Amendment
                        </List.Content>
                        <div>The rules and regulations stated in this document shall be administered after they are approved by Student Affairs Committee. Any revision to this guideline must follow the same procedures.</div>
                    </List.Item>
                </List>
            </Container>
        </div>
    )
}

export default Student