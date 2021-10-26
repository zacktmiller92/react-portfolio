import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import zackHeadshot from '../../assets/img/zack-headshot.jpg'


function About() {


    return (
        <Container>
            <Row>
                <Col>
                    <img src={zackHeadshot} style={{height:'300px'}}></img>
                </Col>
                <Col>
                    <p>
                        I'm baby mumblecore disrupt 3 wolf moon, poutine offal gentrify williamsburg 
                        normcore truffaut succulents hammock kombucha. Drinking vinegar ethical iceland, 
                        bushwick marfa paleo poutine scenester migas selfies synth DIY. Lomo seitan 
                        mixtape disrupt fashion axe food truck. Franzen normcore vaporware air plant 
                        brunch iceland pour-over salvia try-hard poutine kombucha. Chambray squid 
                        semiotics meggings four loko, migas bicycle rights ugh mixtape. La croix yr 
                        DIY chillwave squid 8-bit. Aesthetic disrupt heirloom hot chicken dreamcatcher 
                        pop-up iPhone cornhole wolf kale chips direct trade readymade venmo succulents.
    
                        Unicorn activated charcoal seitan, humblebrag migas keytar fingerstache biodiesel 
                        selvage. Lo-fi hammock lumbersexual try-hard lomo listicle. Hoodie thundercats 
                        enamel pin dreamcatcher yuccie helvetica vinyl. Cray green juice art party tacos, 
                        yuccie mixtape pabst synth sustainable twee kogi food truck.
                        </p>
                </Col>
            </Row>

        </Container>
    )
}

export default About;