import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function ThirdRow(){
    return(
        <>
        <div className="container-fluid">
            <div className="row  justify-content-center text-light" style={{background:"rgb(0,8,29)"}}>
                <div className="col-10  mt-5">
                <h1 className='text-light' style={{fontFamily:"Bold", fontSize:"40px", fontWeight:"700"}}>Frequently Asked Questions</h1>
                <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"   className='py-2 mt-4' style={{backgroundColor:"rgb(19,33,68)", color:"white"}}
          id="panel1a-header"
        >
          <Typography><h3 style={{fontFamily:"Regular", fontSize:"24px"}}>What is Netflix?</h3></Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:"rgb(19,33,68)", color:"white"}}>
          <Typography>
          <h3 style={{fontFamily:"Regular", fontSize:"24px"}}>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
          You can watch as much as you want, whenever you want, without a single ad - all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</h3>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content" className='py-2 mt-3' style={{backgroundColor:"rgb(19,33,68)", color:"white"}}
          id="panel2a-header">
          <Typography><h3 style={{fontFamily:"Regular", fontSize:"24px"}}>How much does Netflix cost?</h3></Typography>
          </AccordionSummary>
          <AccordionDetails style={{backgroundColor:"rgb(19,33,68)", color:"white"}}>
          <Typography>
          <h3 style={{fontFamily:"Regular", fontSize:"24px"}}>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.</h3>
          </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content" className='py-2 mt-3' style={{backgroundColor:"rgb(19,33,68)", color:"white"}}
          id="panel2a-header"
        >
          <Typography><h3 style={{fontFamily:"Regular", fontSize:"24px"}}>Where can I watch it?</h3></Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:"rgb(19,33,68)", color:"white"}}>
          <Typography>
          <h3 style={{fontFamily:"Regular", fontSize:"24px"}}>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

          You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</h3>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content" className='py-2 mt-3' style={{backgroundColor:"rgb(19,33,68)", color:"white"}}
          id="panel2a-header"
        >
          <Typography><h3 style={{fontFamily:"Regular", fontSize:"24px"}}>How do I cancel?</h3></Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:"rgb(19,33,68)", color:"white"}}>
          <Typography>
          <h3 style={{fontFamily:"Regular", fontSize:"24px"}}>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</h3>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content" className='py-2 mt-3' style={{backgroundColor:"rgb(19,33,68)", color:"white"}}
          id="panel2a-header"
        >
          <Typography><h3 style={{fontFamily:"Regular", fontSize:"24px"}}>what can I watch on Netflix?</h3></Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:"rgb(19,33,68)", color:"white"}}>
          <Typography>
          <h3 style={{fontFamily:"Regular", fontSize:"24px"}}>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</h3>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content" className='py-2 mt-3' style={{backgroundColor:"rgb(19,33,68)", color:"white"}}
          id="panel2a-header"
        >
          <Typography><h3 style={{fontFamily:"Regular", fontSize:"24px"}}>Is Netflix good for Kids?</h3></Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:"rgb(19,33,68)", color:"white"}}>
          <Typography> 
          <h3 style={{fontFamily:"Regular", fontSize:"24px"}}>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

          Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</h3>
          </Typography>
        </AccordionDetails>
      </Accordion>
                </div>
                <div className="col-10  mt-5 text-light">
                    <h1 style={{fontFamily:"Light", fontSize:"24px", lineHeight:"30px"}}>Ready to watch? Enter your email to create or restart your membership.</h1>
                    <div className="row ">
                        <div className="col-md-5 col-12 mt-2 mb-5 text-light">
                            <input type="text" className="py-3 ps-3 mb-5" style={{width:"100%", borderRadius:"5px", backgroundColor:"rgb(15,17,24)", border:"none", border:"0.1px solid gray", color:"white"}} placeholder="Email address"></input>
                        </div>
                        <div className="col-md-3 col-12 mt-2 mb-5 text-light"> 
                        <button className='py-1' style={{borderRadius:"6px",color:"white"}}><h2 style={{fontFamily:"Regular", fontSize:"24px", fontWeight:"500"}} className='py-2 px-3'>Get Started</h2></button>
                       </div>
              
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default ThirdRow;