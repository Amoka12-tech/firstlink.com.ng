import React from 'react';
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodepen, faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowCircleRight, faCode, faCodeBranch, faPlayCircle, faSnowflake } from '@fortawesome/free-solid-svg-icons';
import trainingPicture from '../images/trainImg.jpg'
import { primary, tatiary, white } from '../colors';
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';

const HomePage = () => {
  return (
    <main>
        <div className='top_column'>
          <div>
            <p style={{width: '100%', fontSize: 12}}><b>Best Agency in <span style={{ color: '#004080' }}>Nigeria</span></b>
              <br />
              <h2><b>Tech. Agency</b><br />
              &amp;IT Solutions</h2><br />
              Professional and Efficent delivary of
              products and it's management <br />
            </p><br />
            <span className="startHolder">
              <span className='get_started'>Get started 
                  <FontAwesomeIcon style={{ marginLeft: 10 }} icon={faPlayCircle} />
              </span>
              <span className="startLearning">
                Start a learning
                <FontAwesomeIcon style={{ marginLeft: 10 }} icon={faPlayCircle} />
              </span>
            </span>
          </div>
          <div></div>
        </div>
        <Card className='main_card'>
          <div>
            <FontAwesomeIcon size='lg' icon={faFacebook} color='blue' /> Facebook
          </div>
          <div>
            <FontAwesomeIcon size='lg' icon={faTwitter} color='#0099cc' /> Twitter
          </div>
          <div>
            <FontAwesomeIcon size='lg' icon={faLinkedin} color='#0099cc' /> LinkedIn
          </div>
          <div>
            <FontAwesomeIcon size='lg' icon={faGithub} color='#fe1010' /> GitHub
          </div>
        </Card>

        <div className='bottom_column'>
          <div>
            <span style={{ color: '#004080', fontWeight: 'bold' }}>About us</span> <br />
            <h2>Boost your bussiness</h2>
            <p>
              With the help of our creative and talented
              team that work from everywhere in the world,
              we deliever a standard and efficent Solutions
              to bussinesses around the nation.
            </p>
            <span>
              Read more 
              <FontAwesomeIcon style={{ marginLeft: 10 }} size= 'sm' icon={faArrowCircleRight} color='#004080' />
            </span>
          </div>

          <div>
            <img src={trainingPicture} 
            style={{ borderRadius: '25px 0px 25px 25px', height: '26vw', width: '100%' }} />
          </div>
        </div>
        
        <div className='bottom_column'>
          <div>
            {/* first card */}
              <Card className="course_card" style={{ marginRight: '2%' }}>
                <CardContent style={{ wordSpacing: 0, height: 180, textAlign: 'center'}}>
                  <Typography>
                    <span style={{ marginRight: 10, color: tatiary, fontSize: 35 }}>
                      &#10100;
                    </span>
                    <span style={{ fontSize: 35, color: tatiary }}>
                      &#10101;
                    </span>
                    <br />
                    <h6>Web Development</h6>
                    <span style={{ textAlign: 'left', lineHeight: 0, fontSize: 11 }}>
                    Our web development program 
                      covered <em>HTML</em> <em>CSS</em> <em>JavaScrip</em>
                    </span>
                  </Typography>
                    
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>

              {/* second card */}
              <Card className="course_card" style={{ marginTop: 20, backgroundColor: tatiary, color: white }}>
                <CardContent style={{ wordSpacing: 0, height: 180, textAlign: 'center'}}>
                  <Typography>
                    <FontAwesomeIcon size='2x' icon={faCode} color={white} />
                    <br />
                    <h6>Application Programming</h6>
                    <span style={{ textAlign: 'left', lineHeight: 0, fontSize: 11 }}>
                    Our application development courses in mobile and desktop 
                    software code in <em>Java</em> <em>PHP</em> <em>C#</em> 
                    <em>React Native</em>
                    </span>
                  </Typography>
                    
                </CardContent>
                <CardActions>
                  <Button style={{ color: white }} size="small">Learn More</Button>
                </CardActions>
              </Card>

            <div style={{ width: '100%' }}></div>

            {/* first card */}
            <Card className="course_card" style={{ marginRight: '2%' }}>
                <CardContent style={{ wordSpacing: 0, height: 180, textAlign: 'center'}}>
                  <Typography>
                    <span style={{ color: tatiary, fontSize: 35 }}>
                      &#10063;
                    </span>
                    <br />
                    <h6>Graphic Design</h6>
                    <span style={{ textAlign: 'left', lineHeight: 0, fontSize: 11 }}>
                    Graphic design course includes 
                     <em>Corel Draw</em> <em>Photoshop</em>
                    </span>
                  </Typography>
                    
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>

              {/* second card */}
              <Card className="course_card" style={{ marginTop: 20 }}>
                <CardContent style={{ wordSpacing: 0, height: 180, textAlign: 'center'}}>
                  <Typography>
                    <span style={{ marginRight: 10, color: tatiary, fontSize: 35 }}>
                      &#9885;
                    </span>
                    <br />
                    <h6>UI / UX</h6>
                    <span style={{ textAlign: 'left', lineHeight: 0, fontSize: 11 }}>
                    Move from graphic design to UI design
                     <em>Adobe XD</em> <em>Figma</em>
                    </span>
                  </Typography>
                    
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
          </div>

          <div style={{ height: 400 }}>
            <h4 style={{ color: primary }}>Courses</h4>
            <h6>Our IT Skill development program aimed</h6>
            <p>at introduction and preparation 
              of youths and people with intrest in IT tools development 
              and management.
            </p>
            <span className="allCourses">
              All Courses 
              <FontAwesomeIcon style={{ marginLeft: 5 }} color='black' size='sm' icon={faArrowCircleRight} />
            </span>
          </div>
        </div>
    </main>
  )
}

export default HomePage
