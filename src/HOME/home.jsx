import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Qu, TozihCard, Footer } from "../COMPONENTS/components"
import "./home.css"
export default function Home(){
    useEffect(() => {
        var mafiapic = document.getElementById("mafiapic")
        var aksezafe = document.getElementById("aksezfe")
        var ezafTozih = document.getElementById("ezafTozih")
        var neveshte = document.querySelectorAll(".neveshte")
        var playbutton = document.getElementById("playButton")
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("nonestyle");
              }
            });
          });
      
          observer.observe(mafiapic)
          neveshte.forEach(element => {
            observer.observe(element)
          });
          observer.observe(playbutton)


          
          const handleMouseMove = (event) => {
          var ezafewidthfake = window.getComputedStyle(ezafTozih).width
          var ezafewidth = ezafewidthfake.split("px")
          var ezafeheightfake = window.getComputedStyle(ezafTozih).height
          var ezafeheight = ezafeheightfake.split("px")
          var rotatey = ((event.clientX/ezafewidth[0])*38)
          var rotatex = ((event.clientY/ezafeheight[0])*20)
          // if(rota){

          // }
          console.log(ezafeheight)
          console.log("ehem :" + event.clientX)
          // console.log((event.clientY/ezafeheight[0])*30)
            // if(event.clientX >= 30){
            // aksezafe.style.transform = `perspective(500px) rotateX(5deg) rotateY(30deg)`;
            // }
            // else{
            // aksezafe.style.transform = `perspective(500px) rotateX(5deg) rotateY(${((event.clientX/window.innerHeight)*2)}deg)`;
            // }

            aksezafe.style.transform = `perspective(500px) rotateX(${rotatex}deg) rotateY(${rotatey}deg)`;

            // console.log(event.clientX/window.innerHeight)
          };

          const cardListener = () => {
            if(window.innerWidth > 900){
              ezafTozih.addEventListener("mousemove", handleMouseMove);
            }
            else{
              ezafTozih.removeEventListener("mousemove", handleMouseMove);
            }
          }
      
          window.addEventListener("resize", cardListener)

          cardListener()
            
    })

    
    return(
        <>
            <div className="firstDiv">
            <div className='containerhanlder1'>
                <div className="mafiapiccontainer"><div className="mafiapic" id='mafiapic'></div></div>
                <div className='neveshtehandler'>
                    <p className='neveshte'>چرا مافیا ایکس؟</p>
                    <p className='neveshte'>درک هدف کلی: همان طور که اشاره کردیم هدف دانشگاه یا کارفرما بررسی این نکته است که شما نحوی سازماندهی افکارتان چگونه است، این که چگونه می توانید مطابق به انتظارات به نگارش متنی بپردازید که در عین حال توانایی های شما را هم بیان کند. قطعا در نگارش با اهداف آکادمیک اهداف تحصیلی مدنظر و در نگارش برای موقعیت شغلی تمرکز بر نحوه ارائه مهارت ها می باشد.</p>
                    <button className="playButton" id='playButton'><Link to={"/a"} className='game-link'>بازی</Link></button>
                </div>

                </div>
            </div>

            <div className="tozihDiv">
                <TozihCard aks="boxing-gloves.png"></TozihCard>
                <TozihCard aks="gun.png"></TozihCard>
                <TozihCard aks="add-friend.png"></TozihCard>
            </div>

            <div className="ezafTozih" id='ezafTozih'>
                <div className='aksezfe' id='aksezfe'></div>
                <div className='qu-handler'>
                    <Qu id="radio1"></Qu>
                    <Qu id="radio2"></Qu>
                    <Qu id="radio3"></Qu>
                    <Qu id="radio4"></Qu>
                </div>
            {/* <Footer></Footer> */}
            </div>
        </>
    )
}