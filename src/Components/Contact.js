import React from 'react'
import Slider from 'react-slick'
import {
    Container,
    Header,
    Segment,
    Divider,
    List
} from "semantic-ui-react"

const Contact = () => {
    return (
        <div>
            <Slider className="slide">
                <Segment inverted vertical id="contact_segment">
                
                    <Container text className="active">
                    <Header inverted as="h1">
                        Contact
                    </Header>
                    </Container>
                </Segment>
            </Slider>
            <Container>
                <Divider horizontal>
                    <Header as='h1'>
                        Transportation Information
                    </Header>
                </Divider>
                <Header as='h2'>
                    Bus
                </Header>
                <p>Route：205、212、212 (Express)、212 (Shuttle)、270、276、306、620、645、S12、BL25、679、S5、S1、CB7 (get off at Academia Sinica Stop)</p>
                <Header as='h2'>
                    Train
                </Header>
                <p>Go to Nangang Station and transfer Bus 306, 205, 276, S12、212、679、S5 and get get off at Academia Sinica Stop.</p>
                <Header as='h2'>
                    MRT
                </Header>
                <List bulleted size='huge'>
                    <List.Item>
                        <List.Content>
                        Go to Nangang Station and get out from Exit No.2, turn right and transfer buses 212 (Express/Shuttle), 270 or BL25 then get off at Academia Sinica Stop.
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                        Go to Taipei Nangang Exhibition Center Station and get out from Exit No.5, cross the street for bus 212, 276, 306, 620, 645, 679, 205, S5, S1、S12 then get off at Academia Sinica Stop.
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                        Bannan (Blue) Line：Go to Taipei Main Station and transfer to Nangang Station or Taipei Nangang Exhibition Center Station
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                        Tamsui-Xinyi (Red) Line：Go to Taipei Main Station and transfer Bannan (Blue) Line to Nangang Station or Taipei Nangang Exhibition Center Station
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                        Wenhu (Brown) Line：Go to Zongxiao Fuxing Station and transfer Bannan (Blue) Line to Nangang Station or Taipei Nangang Exhibition Center Station
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                        Zonghe-Xinlu (Yellow) Line: Go to Zongxiao Xinsheng and transfer Bannan (Blue) Line to Nangang Station or Taipei Nangang Exhibition Center Station
                        </List.Content>
                    </List.Item>
                </List>
                <Divider horizontal>
                    <Header as='h1'>
                        Contact Us
                    </Header>
                </Divider>
                <Header as='h2'>
                    For general enquiries of TIGP and application, please contact:
                </Header>
                <p>
                    TIGP Administrative Office<br/>
                    Taiwan International Graduate Program<br/>
                    128 Academia Rd., Section 2<br/>
                    Nankang, Taipei 115<br/>
                    Taiwan<br/>
                    E-mail: <a href="mailto:tigp@gate.sinica.edu.tw">tigp@gate.sinica.edu.tw</a><br/>
                    Tel: 886-2-2789-8050<br/>
                    Fax: 886-2-2785-8944<br/>
                    Website: <a href="http://tigp.sinica.edu.tw">http://tigp.sinica.edu.tw</a>
                </p>
                <Header as='h2'>
                    For specific information concerning the AIoT program, please contact:
                </Header>
                <p>
                    Coordinator: Dr. De-Nian Yang<br/>
                    Program Assistant: Mr. Jheng-Kun Lin<br/>
                    Institute of Information Science, Academia Sinica<br/>
                    128 Academia Rd., Section 2<br/>
                    Nankang, Taipei 115<br/>
                    Taiwan<br/>
                    E-mail: <a href="mailto:tigpaiot@gate.sinica.edu.tw">tigpaiot@gate.sinica.edu.tw</a><br/>
                    Website: <a href="https://tigpaiot.iis.sinica.edu.tw">https://tigpaiot.iis.sinica.edu.tw</a>
                </p>
            </Container>
        </div>
    )
}

export default Contact