import React from 'react'
import Slider from 'react-slick'
import {
    Button,
    Container,
    Grid,
    Header,
    Image,
    Segment,
    Divider,
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
                    <p>
                        The participating scholars comes from ??? institutions including Academia Sinica, NTU and ???
                    </p>
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
                  pdf link here?
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
                  Apply <a href="https://tigp.apps.sinica.edu.tw/index.php">online</a>!
                </p>
              </Grid.Column>
            </Grid>
          </Segment>
          <Divider horizontal>
            <Header as='h1'>
            The TIGP Program on AIoT
            </Header>
          </Divider>            
        </div>
    )
}

export default Admission