import React , {Component} from 'react';
import '../css/style.css';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import img1 from '../images/tattva.jpg';
import img2 from '../images/ziggurate.jpg';
import img3 from '../images/samarth.jpg';
import img4 from '../images/Quizart.jpg';
import img5 from '../images/oxygen.jpg';
import img6 from '../images/zukti.jpg';

const styles= {
	            card: {
	            	    height: '100%'
	                  }
              };

class Showcase extends Component{
	render(){
		return(
			<center>
			<div className="row">
      		<div className='center-xs'>
      		<h1>Digital Academy Projects</h1>
      		<Divider/>
      		<h4>Wipro's Digital arm launched the 'Digital Academy' in September 2015,to build a strong team of digital engineers for the future.The Academy aims to nurture excellent technologies and programmers who have the ability to completely build and release substantial internet scale applications.</h4> 
      		</div>
      		</div>
      		<div className='container'>
       			<div className="row">
          		<div className="col-xs-4">
            		<Card style={styles.card}>
              			<CardMedia>
              			<img src={img1} alt='Tattva'/>
              			</CardMedia>
              			<CardTitle title="Tattva" className='card' titleStyle={{fontSize:'29px'}}/>
              			<CardText style={{fontSize:'17px'}} className='card'>
               			 Real time stream processing platform for heavy duty data processing
              			</CardText>
            		</Card>
          		</div>
          		<div className="col-xs-4">
            		<Card style={styles.card}>
              			<CardMedia>
              			<img src={img2} alt='Ziggurate'/>
              			</CardMedia>
              			<CardTitle title="Ziggurate" className='card' titleStyle={{fontSize:'29px'}}/>
              			<CardText style={{fontSize:'17px'}} className='card'>
               			 Deployment as a Service
              			</CardText>
            		</Card>
          		</div>
          		<div className="col-xs-4">
           			<Card style={styles.card}>
              			<CardMedia>
              			<img src={img3} alt='Samarth'/>
              			</CardMedia>
              			<CardTitle title="Samarth" className='card' titleStyle={{fontSize:'29px'}}/>
              			<CardText style={{fontSize:'17px'}} className='card'>
               			 Scalable, Skill to Placement platform with trackable for success
              			</CardText>
            		</Card>
          		</div>
        		</div>
        		<div className="row" style={{marginTop:'40px'}}>
          		<div className="col-xs-4">
            		<Card style={styles.card}>
            		    <CardMedia>
              			<img src={img4} alt='Quizart'/>
              			</CardMedia>
              			<CardTitle title="Quizart" className='card' titleStyle={{fontSize:'29px'}}/>
              			<CardText style={{fontSize:'17px'}} className='card'>
               			 A highly scalable quizzing application
              			</CardText>
            		</Card>
          		</div>
          		<div className="col-xs-4">
            		<Card style={styles.card}>
            		    <CardMedia>
              			<img src={img5} alt='Oxygen'/>
              			</CardMedia>
              			<CardTitle title="Oxygen" className='card' titleStyle={{fontSize:'29px'}}/>
              			<CardText style={{fontSize:'17px'}} className='card'>
                         Breath intent intelligence to semantic search
              			</CardText>
            		</Card>
          		</div>
          		<div className="col-xs-4">
           			<Card style={styles.card}>
              			<CardMedia>
              			<img src={img6} alt='Zukti'/>
              			</CardMedia>
              			<CardTitle title="Zukti" className='card' titleStyle={{fontSize:'29px'}}/>
              			<CardText style={{fontSize:'17px'}} className='card'>
               			 Scalable, Skill to Placement platform with trackable for success
              			</CardText>
            		</Card>
          		</div>
        		</div>
      		</div>
         	</center>
		);
	}
}

export default Showcase;