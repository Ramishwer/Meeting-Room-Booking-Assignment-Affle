import React from "react";
import './custom.css'
function Meeting(){
    return(
       
       <div>
           
       
        <form>
            <label className="bro" for="fname">Meeting Room</label><br></br>
            <select className='selectvalue'>
                <option >Training Room</option>
                <option>Personal Room</option>
                <option>Meeting ID</option>
                 </select><br></br>
            <label for='fname'>Name</label><br></br>
           <input type="text" placeholder="Enter Your Name"></input><br></br>

           <label className='hel' for='fname'>Meeting Description</label><br></br>
           <input type="text" placeholder="Enter Meeting Description"></input><br></br>
           <input className="z" type="date" placeholder="Enter Meeting Description"></input>
           <p>Please select your preferred slot</p>
          
           
        </form>  
         <ul className="a"><button>9 AM</button></ul>
         <ul className="b"><button>9:30 AM</button></ul>
         <ul className="c"><button>10 AM</button></ul>
         <ul className="d"><button>11:30 AM</button></ul>
         <ul className="e"><button>12:30 PM</button></ul>
         <ul className="f"><button>1 PM</button></ul>
         <ul className="g"><button>2:30 PM</button></ul>
         <ul className="p"><button>4:30 PM</button></ul>
         <ul className="q"><button>6:30 PM</button></ul>
         <ul className="r"><button>8 PM</button></ul>
         <ul className="s"><button>9 PM</button></ul>
         <ul className="t"><button>9:30 PM</button></ul>
         <ul className="re"><button>10:30 PM</button></ul>
        
        
         
        <button className="button">Book Allotment</button>
        <br></br>

     </div>
    )
}
export default Meeting;







