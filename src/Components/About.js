import React from 'react'
import Slider from 'react-slick'
import {
    Button,
    Container,
    Grid,
    Header,
    Image,
    Segment
  } from "semantic-ui-react"

const About = () => {
    const slickSettings = {
        lazyLoad: true,
        autoplay: true,
        dots: true,
        speed: 1000
    }
    return (
        <div>
        <Slider {...slickSettings} className="slide">
          <Segment inverted vertical textAlign="center">
            
            <Container text className="active">
              <Header inverted as="h1">
                TIGP AIoT Program
              </Header>
              <p>
                Note: If you're viewing this page via a <code>file://</code>
                URL, the "next" and "previous" Glyphicon buttons on the left and
                right might not load/display properly due to web browser
                security rules.
              </p>
              <Button primary size="huge">
                Learn more
              </Button>
            </Container>
          </Segment>
          <Segment inverted vertical textAlign="center">
            <Container text className="active">
              <Header inverted as="h1">
                Another example headline.
              </Header>
              <p>
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Donec id elit non mi porta gravida at eget metus. Nullam id
                dolor id nibh ultricies vehicula ut id elit.
              </p>
              <Button primary size="huge">
                Learn more
              </Button>
            </Container>
          </Segment>
          <Segment inverted vertical textAlign="center">
            <Container text className="active">
              <Header inverted as="h1">
                One more for good measure
              </Header>
              <p>
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Donec id elit non mi porta gravida at eget metus. Nullam id
                dolor id nibh ultricies vehicula ut id elit.
              </p>
              <Button primary size="huge">
                Browse gallery
              </Button>
            </Container>
          </Segment>
        </Slider>
        <Container>
          <Segment vertical>
            <Grid container stackable textAlign="center" columns={3}>
              <Grid.Column>
                <Image
                  centered
                  circular
                  size="small"
                  src="/images/square-image.png"
                />
                <Header as="h1">Heading</Header>
                <p>
                  Donec sed odio dui. Etiam porta sem malesuada magna mollis
                  euismod. Nullam id dolor id nibh ultricies vehicula ut id
                  elit. Morbi leo risus, porta ac consectetur ac, vestibulum at
                  eros. Praesent commodo cursus magna.
                </p>
                <Button basic>View details &raquo;</Button>
              </Grid.Column>
              <Grid.Column>
                <Image
                  centered
                  circular
                  size="small"
                  src="/images/square-image.png"
                />
                <Header as="h1">Heading</Header>
                <p>
                  Donec sed odio dui. Etiam porta sem malesuada magna mollis
                  euismod. Nullam id dolor id nibh ultricies vehicula ut id
                  elit. Morbi leo risus, porta ac consectetur ac, vestibulum at
                  eros. Praesent commodo cursus magna.
                </p>
                <Button basic>View details &raquo;</Button>
              </Grid.Column>
              <Grid.Column>
                <Image
                  centered
                  circular
                  size="small"
                  src="/images/square-image.png"
                />
                <Header as="h1">Heading</Header>
                <p>
                  Donec sed odio dui. Etiam porta sem malesuada magna mollis
                  euismod. Nullam id dolor id nibh ultricies vehicula ut id
                  elit. Morbi leo risus, porta ac consectetur ac, vestibulum at
                  eros. Praesent commodo cursus magna.
                </p>
                <Button basic>View details &raquo;</Button>
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment vertical>
            <Grid stackable>
              <Grid.Column width={10}>
                <Header as="h1">
                 Intelligent Healthcare
                </Header>
                <p>
                Epidemics and pandemics, such as COVID-19, MERS, and H1N1, have a significant impact on public health, society, and the economy. Before any treatment becomes available or vaccines are fully deployed, it is essential to contain the epidemics by contact tracing via social networks, communication networks, and cell broadcast to ensure case isolation, quarantine, and avoid swarm infection. Google and Apple announced a joint effort to leverage Bluetooth to reduce the spread of COVID-19 by tracing user privacy and security in the core design. Google Sodar uses Augmented Reality (AR) technology to visualize a two-meter radius ring around people to help maintain social distancing. Many innovative mobile applications, such as Aarogya Setu and 1point5, also help people maintain social distancing by measuring the Bluetooth signal of nearby mobile phones to monitor the proximity of mobile users. Therefore, these epidemics have motivated the urgency and importance of studying the research area of epidemiological data collection, surveillance, contact tracing, and potential source identification with the help of AIoT for infectious disease containment.
                </p>
              </Grid.Column>
              <Grid.Column width={6}>
                <Image src="/images/square-image.png" />
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment vertical>
            <Grid stackable>
              <Grid.Column width={6}>
                <Image src="/images/square-image.png" />
              </Grid.Column>
              <Grid.Column width={10}>
                <Header as="h1">
                  Machine Learning in AIoT
                </Header>
                <p>
                Individual IoT systems can be integrated into a large-scale system for various modern applications, which lead to a lot of collected or real-time data. Intelligent and efficient data processing is essential to use the information generated from these data effectively. The data can be analyzed and utilized with machine learning for problem-solving or decision-making. Without machine learning, IoT would have limited value. Regarding the massive amount of data under the IoT system, machine learning pays more attention to actively learning from the data and extracting features, discovering knowledge that humans hardly observe, and providing feedback to improve the algorithms to enhance the performance. With the help of vast amounts of data, the effectiveness of machine learning has made revolutionary progress. In recent years, it has gradually moved from theory to reality. Some areas, such as face recognition, object recognition, voice recognition, and acoustic event detection, have demonstrated their practical value. Integrated with the IoT, it is foreseeable that there will be more breakthrough developments in the industry and academia in the future for the popular multi-task learning, active learning, online learning, transfer learning, and ensemble learning. Nevertheless, there are still many issues such as complexity, efficiency, scalability, accuracy, and robustness related to machine learning in modern AIoT systems and applications.
                </p>
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment vertical>
            <Grid stackable>
              <Grid.Column width={10}>
                <Header as="h1">
                Big Data in AIoT
                </Header>
                <p>
                AIoT data, collected from various sensors over long periods, is a type of big data. Typically, the main characteristics of big data include 1) velocity, which denotes the speed of data production and processing to extract valuable insights, 2) volume, which implies the huge quantities of data produced every second, 3) variety, which specifies the various format of data such as documents, videos, and logs, and 4) veracity, indicates the data quality factors. In the domain of AIoT, in order to process, store, analyze, and compute the large amount of data collected by IoT, distributed systems are the most feasible solutions. In addition to being the theoretical foundation and core technology of cloud computing, distributed systems are also the key technology for research centers and governments. Improving the performance and storage capacity of the distributed systems to meet the demand of AIoT in the future is a crucial research direction for both industry and academia.
                </p>
              </Grid.Column>
              <Grid.Column width={6}>
                <Image src="/images/square-image.png" />
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment vertical>
            <Grid stackable>
              <Grid.Column width={6}>
                <Image src="/images/square-image.png" />
              </Grid.Column>
              <Grid.Column width={10}>
                <Header as="h1">
                Blockchain and Mobile Edge Computing (MEC)
                </Header>
                <p>
                With the emergence of 5G/6G, Internet of Things (IoT), and Artificial Intelligence (AI), AIoT has emerged to meet the demands of intelligence, flexibility, agility, and ubiquitous accessibility of the cyberspace. However, the traditional centralized IoT architecture is heavily restricted with the problem of a single point failure, data privacy, security, robustness, scalability, etc. In recent years, blockchain has become an open, cryptographic, and decentralized database, maintaining immutable ledgers accessible but tamper-proof for everyone. Moreover, the rapid development of Mobile Edge Computing (MEC) has enabled ubiquitous and real-time AIoT services by pushing cloud services from the network core to the network edges, which are in closer proximity to AIoT devices. For distributed AIoT services, MEC can also be deployed on powerful AIoT devices such as smart cameras and cars via service virtualization. Therefore, blockchain and MEC are attractive technologies to fill these gaps by enabling new ways of AIoT applications and services through secure, reliable, flexible, and intelligent devices and systems along with related digital value and economics. Blockchain and MEC-assisted AIoT can provide attractive solutions to address many challenges, such as decentralized service schemes, service virtualization and flexibility, reliable management and maintenance, resources optimization, and so on.
                </p>
              </Grid.Column>
              
            </Grid>
          </Segment>
          <Segment vertical>
            <Grid stackable>
              <Grid.Column width={10}>
                <Header as="h1">
                Integration of AIoT and Next Generation Networks
                </Header>
                <p>
                As AI-on-chips have attained high performance and power efficiency, AI services are facilitated to make things smarter, where each object has a different perspective on the surroundings, and all information is locally combined and analyzed to form a more comprehensive understanding of how and why the events happen. These connected AI-enabled things are finding their way into vehicles (smart-cars), urban areas (smart-cities), and infrastructure (smart-grid). AIoT automatically creates and maintains social relations among smart vehicles and objects to deal with the possibly unpredictable and intense environmental changes due to user mobility, network congestion, etc. Moreover, AIoT can also detect and analyze human behaviors (e.g., social interactions, purchase logs, and traveling trajectories) together with social networking websites to obtain a more accurate result. Accordingly, integrating AI, IoT, and social networks to provide instantaneous, robust, and diverse user services is imperative. As air (e.g., UAVs) and ground vehicles are two vital network intermediaries in the next-generation network (i.e., 6G), it is envisaged that air-ground integrated social network is a prevailing trend, where Human Social Network (HSN) reveals user behaviors, sentiments, and opinions to benefit data-driven decision-making with AI, while AIoTs provide and analyze versatile environmental sensings to improve service quality.
                </p>
              </Grid.Column>
              <Grid.Column width={6}>
                <Image src="/images/square-image.png" />
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment vertical>
            <Grid columns={2}>
              <Grid.Column>
                &copy; 2017 Company, Inc. · <a href="#root">Privacy</a> ·{" "}
                <a href="#root">Terms</a>
              </Grid.Column>
              <Grid.Column textAlign="right">
                <a href="#root">Back to top</a>
              </Grid.Column>
            </Grid>
          </Segment>
        </Container>
        </div>
    )
}

export default About