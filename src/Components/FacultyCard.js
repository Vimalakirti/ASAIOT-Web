import React from 'react'
import {
    Card,
    Image
} from "semantic-ui-react"

import site_icon from '../images/Faculty_icon/1.png'
import mail_icon from '../images/Faculty_icon/2.png'
import honor_icon from '../images/Faculty_icon/3.png'
import background_icon from '../images/Faculty_icon/Bg.png'

const FacultyCard = ({image, faculty_name, education, description, email, website}) => {
    return (
        <Card>
            <Image src={image} wrapped ui={false} />
            <Card.Content>
            <Card.Header><Image src={honor_icon} size="mini"/>{faculty_name}</Card.Header>
            <Card.Meta>
                {education}
            </Card.Meta>
            <Card.Description>
                {description}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Image as='a' href={"mailto:"+email} src={mail_icon} size="mini"/>
                <Image as='a' href={website} src={site_icon} size="mini"/>
                <Image floated="right" src={background_icon} size="mini"/>
            </Card.Content>
        </Card>
    )
}

export default FacultyCard