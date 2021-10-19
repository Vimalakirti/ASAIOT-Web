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
import logo from '../images/square-image.png'

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
          <Segment inverted vertical textAlign="center" id="home_segment1">
            
            <Container text className="active">
              <Header inverted as="h1">
                TIGP AIoT Program
              </Header>
              <p>
              The TIGP AIoT program can cultivate Taiwanese and international talents in related areas to the program, strengthen innovative potential, and enhance the level of academic research.
              </p>
              <Button primary size="huge" href="#admission">
                Apply now
              </Button>
            </Container>
          </Segment>
          <Segment inverted vertical textAlign="center" id="home_segment2">
            <Container text className="active">
              <Header inverted as="h1">
                Strong teaching and research
              </Header>
              <p>
              NTU and Academia Sinica will co-play leading and supervisory roles, and provide research resources and equipment. Additionally, the participating scholars of these institutions will be jointly responsible for teaching activities, supervising research, and guiding international graduate students.
              </p>
              <Button primary size="huge" href="#faculty">
                Learn more
              </Button>
            </Container>
          </Segment>
          <Segment inverted vertical textAlign="center" id="home_segment3">
            <Container text className="active">
              <Header inverted as="h1">
                Solid curriculum design
              </Header>
              <p>
              TIGP will focus on both theory and practice to provide students with a solid theoretical 
              basis and technical capability to solve practical problems of various applications.
              </p>
              <Button primary size="huge" href="#academic">
                Browser courses
              </Button>
            </Container>
          </Segment>
        </Slider>
        <Container>
          

          <Divider horizontal>
            <Header as='h1' id='learn_more'>
              Overview
            </Header>
          </Divider>
          <p>Artificial Intelligence of Things (AIoT) is an emerging technology that combines artificial intelligence (AI) and Internet of Things (IoT). It is one of the most promising scientific and technological trends today. In recent years, with breakthroughs in computer storage space and computing performance, coupled with big data analysis, inference, and learning, AI has become the focus and is widely adopted in many fields, such as finance, manufacturing, retail, and medical industries. According to IDC's Worldwide Artificial Intelligence Spending Guide report, the total global AI spending will increase more than twice in the next four years, from $50.1 billion in 2020 to more than $110 billion in 2024. According to PWC’s report, by 2030, the global AI technology output value will increase to 6.6 trillion U.S. dollars, and AI applications will generate 9.1 trillion U.S. dollars, which will bring 14% growth to global GDP. The potential for business opportunities is promising. On the other hand, IoT upgrades communications from the traditional "human-to-human" and "human-to-machine" communication and interactions to the intelligent "machine-to-machine", which connects various digital devices to the Internet and transmits all kinds of information sensed to each other. Through machine learning and data mining technologies, we can further discover valuable knowledge and ubiquitously provide various services in people's lives. According to the research of McKinsey Management Consultants, the global application output value of IoT will reach 11.1 trillion U.S. dollars in 2025. IDC also assesses that the data volume of IoT devices from 2018 to 2025 will grow at an average annual growth rate of 28.7% and reach 79.4ZB in 2025. For the applications of AIoT, Frost & Sullivan, a world-renowned business consulting firm, estimates that the global output value of smart cities will reach a market size of 2 trillion U.S. dollars by 2025. </p>
          <p>In recent years, Taiwan has gradually matured in IC chip development, wireless transmission, and data storage technologies. Therefore, industries, government administration, and academia have begun to attach importance to the value of integrating AIoT with interdisciplinary fields. The development of AIoT technology not only has high research value in academics but also plays a pivotal role in the progress of various fields in Taiwan, such as technology industries, government efficiency, biomedical science and technology, health management, transportation construction, agricultural technology, as well as cultural and creative industries, and the upgrading of international competitiveness. Therefore, there is an urgent need for AIoT talents and technologies. </p>
          <Divider horizontal>
            <Header as='h1'>
            The TIGP Program on AIoT
            </Header>
          </Divider>
          <p>The TIGP on Artificial Intelligence of Things (AIoT) is a program established jointly by National Taiwan University (NTU) and Academia Sinica. Artificial Intelligence of Things is a new important application and technology that have been rapidly developing in recent years. The TIGP AIoT program can cultivate Taiwanese and international talents in related areas to the program, strengthen innovative potential, and enhance the level of academic research. NTU and Academia Sinica will co-play leading and supervisory roles, and provide research resources and equipment. Additionally, the participating scholars of these institutions will be jointly responsible for teaching activities, supervising research, and guiding international graduate students.</p>
          <p>This TIGP program hopes to attract outstanding young domestic and international students. In the scope of AIoT, this program gives priority to computer science and engineering and takes mathematics as a subsidiary to provide students with training across multiple fields. The curriculum contents will probe into various fields, including networking and communications, signal processing, embedded IoT systems, cloud computing, mobile edge computing, big data systems, machine learning, data mining, multivariate data analysis, business models, privacy and security, and multimedia that emphasized areas and combinations in computer science, electrical engineering, and communication.</p>
          <p>In TIGP on Artificial Intelligence of Things, the cooperating university and institutes will provide the required laboratory equipment and instruments for teaching and research. With the equipment and varied expertise of the researchers from the cooperating institutions, this program can provide young students with an excellent educational opportunity to cultivate their research capabilities in interdisciplinary areas. This specific TIGP will focus on both theory and practice to provide students with a solid theoretical basis and technical capability to solve practical problems of various applications.</p>
          <Divider horizontal>
            <Header as='h1'>
              Research Topics
            </Header>
          </Divider>

          <Segment vertical>
            <Grid stackable>
              <Grid.Column width={10}>
                <Header as="h1">
                 Intelligent Healthcare
                </Header>
                <p>
                Epidemics and pandemics, such as COVID-19, MERS, and H1N1, have a significant impact on public health, society, and the economy. Before any treatment becomes available or vaccines are fully deployed, it is essential to contain the epidemics by contact tracing via social networks, communication networks, and cell broadcast to ensure case isolation, quarantine, and avoid swarm infection. Google and Apple announced a joint effort to leverage Bluetooth to reduce the spread of COVID-19 by tracing user privacy and security in the core design. Google Sodar uses Augmented Reality (AR) technology to visualize a two-meter radius ring around people to help maintain social distancing. Many innovative mobile applications, such as Aarogya Setu and 1point5, also help people maintain social distancing by measuring the Bluetooth signal of nearby mobile phones to monitor the proximity of mobile users with IoT. Therefore, these epidemics have motivated the urgency and importance of studying the research area of epidemiological data collection, surveillance, contact tracing, and potential source identification with the help of AIoT for infectious disease containment.
                </p>
              </Grid.Column>
              <Grid.Column width={6}>
                <Image src={logo} />
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment vertical>
            <Grid stackable>
              <Grid.Column width={6}>
                <Image src={logo} />
              </Grid.Column>
              <Grid.Column width={10}>
                <Header as="h1">
                  Machine Learning in AIoT
                </Header>
                <p>
                Individual IoT systems can be integrated into a large-scale system for various modern applications, which lead to a lot of collected or real-time data. Intelligent and efficient data processing is essential to use the information generated from these data effectively. The data can be analyzed and utilized with machine learning for problem-solving or decision-making. Regarding the massive amount of data under the IoT system, machine learning pays more attention to actively learning from the data and extracting features, discovering knowledge that humans hardly observe, and providing feedback to improve the algorithms to enhance the performance. With the help of vast amounts of data, the effectiveness of machine learning has made revolutionary progress. In recent years, it has gradually moved from theory to reality. Some areas, such as face recognition, object recognition, voice recognition, and acoustic event detection, have demonstrated their practical value. Integrated with the IoT, it is foreseeable that there will be more breakthrough developments in the industry and academia in the future for the popular multi-task learning, active learning, online learning, transfer learning, and ensemble learning. Nevertheless, there are still many important issues required the further study, such as complexity, efficiency, scalability, accuracy, and robustness related to machine learning in modern AIoT systems and applications.
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
                <Image src={logo} />
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment vertical>
            <Grid stackable>
              <Grid.Column width={6}>
                <Image src={logo} />
              </Grid.Column>
              <Grid.Column width={10}>
                <Header as="h1">
                Blockchain and Mobile Edge Computing (MEC)
                </Header>
                <p>
                With the emergence of 5G/6G, Internet of Things (IoT), and Artificial Intelligence (AI), AIoT has emerged to meet various demands of intelligence, flexibility, agility, and ubiquitous accessibility of the cyberspace. However, the traditional centralized IoT architecture is heavily restricted with the problem of a single point failure, data privacy, security, robustness, etc. In recent years, blockchain has become an open, cryptographic, and decentralized database, maintaining immutable ledgers accessible but tamper-proof for everyone. Moreover, the rapid development of Mobile Edge Computing (MEC) has enabled ubiquitous and real-time AIoT services by pushing cloud services from the network core to the network edges, which are in closer proximity to AIoT devices. Therefore, blockchain and MEC are attractive technologies to fill these gaps by enabling new ways of AIoT applications and services through secure, reliable, flexible, and intelligent devices and systems along with related digital value and economics. Blockchain and MEC-assisted AIoT can provide attractive solutions to address many challenges, such as decentralization service schemes, service virtualization and flexibility, reliable management and maintenance, resources optimization, and so on.
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
                As AI-on-chips have attained high performance and power efficiency, AI services are facilitated to make things smarter, where each object has a different perspective on the surroundings, and all information is locally combined and analyzed to form a more comprehensive understanding of how and why the events happen. These connected AI-enabled things are finding their way into vehicles (smart-cars), urban areas (smart-cities), and infrastructure (smart-grid). AIoT automatically creates and maintains social relations among smart vehicles and objects to deal with the possibly unpredictable and intense environmental changes due to user mobility, network congestion, etc. Moreover, AIoT can also detect and analyze human behaviors (e.g., social interactions, purchase logs, and traveling trajectories) together with social networking websites to obtain a more accurate result. Accordingly, integrating AI, IoT, and social networks to provide instantaneous, robust, and diverse user services is imperative. As air (e.g., UAVs) and ground vehicles are two vital network intermediaries in the next-generation network (i.e., 6G), it is envisaged that Air-Ground Integrated sociaL nEtwork (AGILE) is a prevailing trend, where Human Social Network (HSN) reveals user behaviors, sentiments, and opinions to benefit data-driven decision-making with AI, while AIoTs provide and analyze versatile environmental sensing to improve service quality.
                </p>
              </Grid.Column>
              <Grid.Column width={6}>
                <Image src={logo} />
              </Grid.Column>
            </Grid>
          </Segment>
        </Container>
        </div>
    )
}

export default About