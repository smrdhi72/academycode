import React, { Component } from 'react';
import '../css/style.css';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import img1 from '../images/madhu.JPG';
import img2 from '../images/alex.jpg';
import img3 from '../images/Mckenna-Rory.jpg';

const styles = {
                card: {
                       width:'100%',
                       height:  '100%'
                      }
               };

class About extends Component {
  render() {
    return (<center>
      <div className="row">
      <div className='center-xs'>
      <h1>Digital Academy</h1>
      <Divider/>
      <h4>Wipro's Digital arm launched the 'Digital Academy' in September 2015,to build a strong team of digital engineers for the future.The Academy aims to nurture excellent technologies and programmers who have the ability to completely build and release substantial internet scale applications.</h4> 
      </div>
      </div>
      <div className='container'>
       <div className="row">
          <div className="col-xs-4">
            <Card style={styles.card}>
              <CardMedia>
              <img src={img1} alt='Madhusudan'/>
              </CardMedia>
              <CardTitle title="Madhusudan Murthy" subtitle="General Manager and Head of Global Delivery, Digital" 
               className='card' titleStyle={{fontSize:'29px'}} subtitleStyle={{fontSize:'15px'}}/>
              <CardText style={{fontSize:'17px'}} className='card'>
               Digital Academy is the medium to energise & up skill our workforce to be Digitally relevant 
               and prepare the future multi-specialsed smart engineers. Digital demands the end-to-end 
               thinking including focussing on Design, Engineering, Quality and well-orchasrated output. 
               Academy is to be seen not as a barrier but a break away to the bright future.
              </CardText>
            </Card>
          </div>
          <div className="col-xs-4">
            <Card style={styles.card}>
              <CardMedia>
              <img src={img2} alt='alex'/>
              </CardMedia>
              <CardTitle title="Reynolds Alex" subtitle="General Manager and Delivery Head, Digital"
               className='card' titleStyle={{fontSize:'29px'}} subtitleStyle={{fontSize:'15px'}}/>
              <CardText style={{fontSize:'17px'}} className='card'>
               Digital Academy, is powered by a vision to create “Excellent Programmers” who have the 
               ability to completely build and release substantial applications. It provides a platform 
               to upskill and, transform an individual, by building multi-dimensional perspective that 
               includes Entrepreneurship, Design thinking, Performance, and support differential thinking.
              </CardText>
            </Card>
          </div>
          <div className="col-xs-4">
           <Card>
              <CardMedia>
              <img src={img3} alt='rory'/>
              </CardMedia>
              <CardTitle title="Rory Mckenna" subtitle="Global Head of Engineering, Digital"
               className='card' titleStyle={{fontSize:'29px'}} subtitleStyle={{fontSize:'15px'}}/>
              <CardText style={{fontSize:'17px'}} className='card'>
               Digital demands a more adaptive skill set, one that extends beyond the silo-ed specialisms 
               that we have been used to. It requires us to be customer and design-led but with an ability 
               to scale at the enterprise level. It goes beyond the tradition of following a pre-determined 
               instruction set and being instruction-led. To that end we have a vision that the Academy will 
               begin to create a cadre of engineering talent that can be relevant to the current client needs, 
               and set a new emergent hybrid engineer.
              </CardText>
            </Card>
          </div>
        </div>
      </div>
      </center>
    );
  }
}

export default About;