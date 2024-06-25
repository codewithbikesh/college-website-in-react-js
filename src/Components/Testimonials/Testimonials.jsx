import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

function Testimonials ()  {

    const slider = useRef();
    let tx = 0;

const slideForward = () => {
     if(tx > -50){
         tx -=25;
     }
     slider.current.style.transform = `translateX(${tx}%)`;
}

const slideBackward = () =>{
    if(tx < 0){
        tx +=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward}  />
      <img src={back_icon} alt="" className="back-btn" 
onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" className="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, Nepal</span>
                        </div>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" className="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, Nepal</span>
                        </div>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" className="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, Nepal</span>
                        </div>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" className="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, Nepal</span>
                        </div>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )    
}

export default Testimonials;
