import React from 'react'
import {
    Container,
    Header,
    Segment,
    Divider,
    Table,
    Card,
} from "semantic-ui-react"
import Slider from 'react-slick'

import LunWeiKu from '../images/Headshot/古倫維.png'
import HenHsenHuang from '../images/Headshot/黃瀚萱.png'
import DeNianYang from '../images/Headshot/楊得年.png'
import MengTsungTsai from '../images/Headshot/蔡孟宗.jpg'
import JenChenLin from '../images/Headshot/林仁俊.png'
import YuTsao from '../images/Headshot/曹昱.PNG'
import JunChengChen from '../images/Headshot/陳駿承.jpg'
import HsiangYunCheng from '../images/Headshot/鄭湘筠.jpg'
import ChihYuWang from '../images/Headshot/王志宇.jpg'
import YenNunHuang from '../images/Headshot/黃彥男.jpg'
import PiChengHsiu from '../images/Headshot/修匹承.jpg'
import AiChunPang from '../images/Headshot/逄愛君.png'
import HsinMuTsai from '../images/Headshot/蔡欣穆.jpg'
import CheLin from '../images/Headshot/林澤.jpg'
import HungYiLee from '../images/Headshot/李宏毅2.jpg'
import HungYunHsieh from '../images/Headshot/謝宏昀.jpg'
import HungYuWei from '../images/Headshot/魏宏宇.jpg'
import HsuanJungSu from '../images/Headshot/蘇炫榮.jpg'

import FacultyCard from './FacultyCard'

const iis_faculty_list = [
    {
        childKey: 0,
        image: LunWeiKu,
        header: 'Lun-Wei Ku古倫維',
        description: 'Natural Language Processing, Computational Linguistics, Sentiment (Opinion and Emotion) Analysis, Information Extraction and Retrieval, Chinese Language Processing, Topic Detection and Tracking, Artificial Intelligence, Computer Assisted Language Learning (CALL)',
        meta: 'lwku@iis.sinica.edu.tw',
        extra: 'https://homepage.iis.sinica.edu.tw/pages/lwku/contact_en.html',
        education: 'Ph.D., National Taiwan University, Taiwan',
    },
    {
        childKey: 1,
        image: HenHsenHuang,
        header: 'Hen-Hsen Huang黃瀚萱',
        description: 'Natural Language Processing, Computational Linguistics, Information Retrieval',
        meta: 'hhhuang@iis.sinica.edu.tw',
        extra: 'https://homepage.iis.sinica.edu.tw/pages/hhhuang/index_en.html',
        education: 'Ph.D., National Taiwan University, Taiwan'
    },
    {
        childKey: 2,
        image: DeNianYang,
        header: 'De-Nian Yang楊得年',
        description: 'Social and Multimedia Networks and Applications, Data Mining and Machine Learning Algorithms and Applications, Network Analysis and Distributed Optimization/Learning',
        meta: 'dnyang@iis.sinica.edu.tw',
        extra: 'https://homepage.iis.sinica.edu.tw/pages/dnyang/contact_en.html',
        education: 'Ph.D., National Taiwan University, Taiwan'
    },
    {
        childKey: 3,
        image: MengTsungTsai,
        header: 'Meng-Tsung Tsai蔡孟宗',
        description: 'Graph Theory, Streaming Algorithms, Lower Bound Techniques',
        meta: 'mttsai@iis.sinica.edu.tw',
        extra: 'https://homepage.iis.sinica.edu.tw/pages/mttsai/contact_en.html',
        education: 'Ph.D., Rutgers University - New Brunswick, United States'
    },
    {
        childKey: 4,
        image: JenChenLin,
        header: 'Jen-Chen Lin林仁俊',
        description: 'Multimedia Content Understanding, Artificial Intelligence, Machine Learning, Affective Computing',
        meta: 'jenchunlin@iis.sinica.edu.tw',
        extra: 'https://homepage.iis.sinica.edu.tw/pages/jenchunlin/index_en.html',
        education: 'Ph.D., National Cheng Kung University, Taiwan'
    },
]

const citi_faculty_list = [
    {
        childKey: 0,
        image: YuTsao,
        header: 'Yu Tsao曹昱',
        description: 'Assistive Oral Communication Technologies, Speech Enhancement, Voice Conversion, Biomedical Signal Processing, Speech Signal Processing',
        meta: 'yu.tsao@citi.sinica.edu.tw',
        extra: 'https://www.citi.sinica.edu.tw/pages/yu.tsao/index_en.html',
        education: 'Ph.D., Georgia Institute of Technology, United States'
    },
    {
        childKey: 1,
        image: JunChengChen,
        header: 'Jun-Cheng Chen陳駿丞',
        description: 'Computer Vision, Machine Learning, Deep Learning, Artificial Intelligence, Biometrics Applications (such as face recognition/facial analytics, activity recognition/detection, etc)',
        meta: 'pullpull@citi.sinica.edu.tw',
        extra: 'https://www.citi.sinica.edu.tw/pages/pullpull/index_en.html',
        education: 'Ph.D., University of Maryland College Park, United States',
    },
    {
        childKey: 2,
        image: HsiangYunCheng,
        header: 'Hsiang-Yun Cheng鄭湘筠',
        description: 'Computer Architecture, Memory System Design, Energy-Efficient Multi-Core Systems',
        meta: 'hycheng@citi.sinica.edu.tw',
        extra: 'https://www.citi.sinica.edu.tw/pages/hycheng/index_en.html',
        education: 'Ph.D., Pennsylvania State University, United States',
    },
    {
        childKey: 3,
        image: ChihYuWang,
        header: 'Chih-Yu Wang王志宇',
        description: 'Wireless Communications, Social Network, Game Theory, Network Economics, Machine Learning in Networks',
        meta: 'cywang@citi.sinica.edu.tw',
        extra: 'https://www.citi.sinica.edu.tw/pages/cywang/index_en.html',
        education: 'Ph.D., National Taiwan University, Taiwan',
    },
    {
        childKey: 4,
        image: YenNunHuang,
        header: 'Yen-Nun Huang黃彥男',
        description: '',
        meta: 'yennunhuang@citi.sinica.edu.tw',
        extra: 'https://www.citi.sinica.edu.tw/pages/yennunhuang/index_en.html',
        education: 'Ph.D., University of Maryland, United States',
    },
    {
        childKey: 5,
        image: PiChengHsiu,
        header: 'Pi-Cheng Hsiu修丕承',
        description: 'Embedded Systems, Mobile Systems, Real-Time Systems',
        meta: 'pchsiu@citi.sinica.edu.tw',
        extra: 'https://www.citi.sinica.edu.tw/pages/pchsiu/index_en.html',
        education: 'Ph.D., National Taiwan University, Taiwan',
    },
]

const csie_faculty_list = [
    {
        childKey: 0,
        image: AiChunPang,
        header: 'Ai-Chun Pang逄愛君',
        description: 'Fog/Edge Computing, Wireless Networking, Mobile Computing, Multimedia Communications, Performance Modeling',
        meta: 'acpang@csie.ntu.edu.tw',
        extra: 'https://www.csie.ntu.edu.tw/~acpang/',
        education: 'Ph.D., National Chiao Tung University, Taiwan',
    },
    {
        childKey: 1,
        image: HsinMuTsai,
        header: 'Hsin-Mu (Michael) Tsai蔡欣穆',
        description: 'Visible light communications and positioning, Vehicular networking and communications, Vehicle and transportation systems',
        meta: 'hsinmu@csie.ntu.edu.tw',
        extra: 'https://www.csie.ntu.edu.tw/~hsinmu/site/',
        education: 'Ph.D., Carnegie Mellon University, United State',
    },
]

const ee_faculty_list = [
    {
        childKey: 0,
        image: CheLin,
        header: 'Che Lin林澤',
        description: 'Deep Learning, Data Science, Signal Processing in Wireless Communications, Systems Biology, FinTech, and Optimization Theory',
        meta: 'chelin@ntu.edu.tw',
        extra: 'https://www.ee.ntu.edu.tw/profile1.php?teacher_id=25203&p=3',
        education: 'Ph.D., University of Illinois, Urbana-Champaign, United States',
    },
    {
        childKey: 1,
        image: HungYiLee,
        header: 'Hung-Yi Lee李宏毅',
        description: 'Machine Learning, Deep Learning, Spoken Language Understanding, Speech Recognition',
        meta: 'hungyilee@ntu.edu.tw',
        extra: 'https://www.ee.ntu.edu.tw/profile1.php?teacher_id=901182&p=3',
        education: 'Ph.D., National Taiwan University, Taiwan',
    },
    {
        childKey: 2,
        image: HungYunHsieh,
        header: 'Hung-Yun Hsieh謝宏昀',
        description: 'IoT, next-generation communication systems, network science and cybersecurity',
        meta: 'hungyun@ntu.edu.tw',
        extra: 'https://www.ee.ntu.edu.tw/profile1.php?teacher_id=942014&p=3',
        education: 'Ph.D., Georgia Institute of Technology, United States',
    },
    {
        childKey: 3,
        image: HungYuWei,
        header: 'Hung-Yu Wei魏宏宇',
        description: 'mobile and wireless networking, 3GPP standards, game theory for communications and networking, cross-layer design and optimization for wireless multimedia, wireless sensor networks and IoT, edge/fog computing, machine learning, 5G security ',
        meta: 'hywei@ntu.edu.tw',
        extra: 'https://www.ee.ntu.edu.tw/profile1.php?teacher_id=901161&p=3',
        education: 'Ph.D., Columbia University, United States',
    },
    {
        childKey: 4,
        image: HsuanJungSu,
        header: 'Hsuan-Jung Su蘇炫榮',
        description: 'Wireless Communications',
        meta: 'hjs@ntu.edu.tw',
        extra: 'https://www.ee.ntu.edu.tw/profile1.php?teacher_id=942007&p=3',
        education: 'Ph.D., University of Maryland at College Park, United States',
    },
]

const FacultyCardGroup = ({faculty_list}) => {
    return (
        <Card.Group stackable itemsPerRow={4}>
                {faculty_list.map(function(faculty){
                    return <FacultyCard
                    image={faculty.image}
                    faculty_name={faculty.header}
                    education={faculty.education}
                    description={faculty.description}
                    email={faculty.meta}
                    website={faculty.extra}
                    />;
                })}
        </Card.Group>
    )
}

const Faculty = () => {
    return (
        <div>
            <Slider className="slide">
                <Segment inverted vertical id="faculty_segment"/>
            </Slider>
            <Container>
                <Divider horizontal>
                <Header as='h1'>Faculty List</Header>
                </Divider>
                <Header as='h2'>
                    Institute of Information science, Academia Sinica				
                </Header>
                <FacultyCardGroup faculty_list={iis_faculty_list}/>
                <Header as='h2'>
                    Research Center for Information Technology Innovation, Academia Sinica				
                </Header>
                <FacultyCardGroup faculty_list={citi_faculty_list}/>
                <Header as='h2'>
                    Department of Computer Science and Information Engineering, National Taiwan University							
                </Header>
                <FacultyCardGroup faculty_list={csie_faculty_list}/>
                <Header as='h2'>
                    Department of Electrical Engineering, National Taiwan University							
                </Header>
                <FacultyCardGroup faculty_list={ee_faculty_list}/>

                <Divider horizontal>
                <Header as='h1'>Program Committee</Header>
                </Divider>
                <Table celled striped>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan='2'>AIoT Program Committee</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell collapsing>Academic Affairs Committee
                            </Table.Cell>
                            <Table.Cell>Dr. De-Nian Yang (Chair), Dr. Yen-Nun Huang, Dr. Jen-Chen Lin, Dr. Che Lin, Dr. Hsuan-Jung Su, Dr. Hung-Yi Lee, Dr. Ai-Chun Pang, Dr. Hsin-Mu (Michael) Tsai</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Admission Committee
                            </Table.Cell>
                            <Table.Cell>Dr. Che Lin (Chair), Dr. De-Nian Yang, Dr. Lun-Wei Ku, Dr. Hen-Hsen Huang, Dr. Meng-Tsung Tsai, Dr. Jun-Cheng Chen, Dr. Yu Tsao, Dr. Hsiang-Yun Cheng, Dr. Hsuan-Jung Su, Dr. Hung-Yu Wei, Dr. Hung-Yun Hsieh, Dr. Hung-Yi Lee, Dr. Ai-Chun Pang, Dr. Hsin-Mu (Michael) Tsai</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Student Affairs Committee
                            </Table.Cell>
                            <Table.Cell>Dr. Chih-Yu Wang, Dr. Pi-Cheng Hsiu, Dr. Hsuan-Jung Su, Dr. Hung-Yi Lee, Dr. Ai-Chun Pang, Dr. Hsin-Mu (Michael) Tsai</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Container>
        </div>
    )
}

export default Faculty