import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import '../css/style.css';
import immersive from '../images/immersive.jpg';
import hybrid from '../images/hybrid.jpg';
import onlineTraining from '../images/onlineTraining.jpg';
import spark from '../images/capsule.jpg';
import Java from '../images/Java.png';
import Paper from 'material-ui/Paper';

class Programs extends Component {
  render() {
    const style = {
      width: '80%',
      marginBottom: 45,
     };

    return (<div className='row'>
    <div className='center-xs'>
      <h1>Programs We have</h1>
      <Divider/>
      <h4>
        The curriculum at the Academy is combination of programming languages, technology, engineering tools and discipline. It also goes beyond traditional training programs to foster principles of entrepreneurship, design thinking and performance.
      </h4>
    </div>
    <center>
    <Paper style={style} zDepth={3} rounded={true} >
    <div className='row'>
    <div className='col-xs-4'>
      <img src={immersive} alt='immersive' style={{height:'100%',width:'100%'}}/>
    </div>
      <div className='col-xs-8'>
        <h2><i>full stack Immersive Program</i></h2>
        <p>If you qualify the Digi-thon, and have a ready approval from your manager, you are eligible for this is 12-week dedicated training program that will boost your skills in various programming languages, technologies, engineering tools and disciplines : from front-end technologies to databases, development automation and provisioning. You will become a pro at building and rolling out internet scale applications.</p>
        <h5>Read More...</h5>
      </div>
    </div>
     </Paper>

     <Paper style={style} zDepth={3} rounded={true} >
    <div className='row'>
    <div className='col-xs-4'>
      <img src={hybrid} alt='hybrid' style={{height:'100%',width:'100%'}}/>
    </div>
      <div className='col-xs-8'>
        <h2><i>hybrid Program</i></h2>
        <p>If you qualify the Digi-thon, but can’t take up a full-time dedicated training because you are a part of billable / internal projects, then this program is for you. It is an 8-week long program, where you attend the training sessions for 2 working days a week, within the Wipro campus. The program follows the pattern of the full stack program.</p>
        <h5>Read More...</h5>
      </div>
    </div>
     </Paper>
     <Paper style={style} zDepth={3} rounded={true} >
    <div className='row'>
    <div className='col-xs-4'>
      <img src={onlineTraining} alt='onlineTraining' style={{height:'100%',width:'100%'}}/>
    </div>
      <div className='col-xs-8'>
        <h2><i>learn on the go</i></h2>
        <p>This is an online training program which will be available to pre-identified employees, nominated by project teams.The program is concise, and emphasizes on imparting skills in technologies like Go, Ruby, Cassandra, Zookeeper, etc. The course truly encourages "learning on the go"</p>
        <h5>Read More...</h5>
      </div>
    </div>
     </Paper>
     <Paper style={style} zDepth={3} rounded={true} >
    <div className='row'>
    <div className='col-xs-4'>
      <img src={spark} alt='spark' style={{height:'100%',width:'100%'}}/>
    </div>
      <div className='col-xs-8'>
        <h2><i>spark</i></h2>
        <p>This program will be available to pre-identified employees, nominated by account/project teams. The course emphasizes on complementary / extensions to Java / Full Stack (former versions). This role-based capsule training is specially crafted for Program Managers, Project Managers, Sales Teams, Business Development Associates, UX and UI Application Leads, Digital Architects, Technical Architects etc.</p>
        <h5>Read More...</h5>
      </div>
    </div>
     </Paper>
     <Paper style={style} zDepth={3} rounded={true} >
    <div className='row'>
    <div className='col-xs-4'>
      <img src={Java} alt='java' style={{height:'100%',width:'100%'}}/>
    </div>
      <div className='col-xs-8'>
        <h2><i>collaboration with JAVA academy</i></h2>
        <p>Do you want to enhance your digital foundation with Java? If you are already a graduate of the java academy, and qualify the digi-thon, you can enroll for this custom-program. It focuses on project specific technologies, including HTML5, Java 8, Algorithms 101, Spring, Angular JS, Restful services, etc. Training sessions will be within Wipro campus.</p>
        <h5>Read More...</h5>
      </div>
    </div>
     </Paper>
     </center>
      </div>  
    );
  }
}

export default Programs;
