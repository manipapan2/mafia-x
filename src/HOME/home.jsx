import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Qu, TozihCard, Footer } from "../COMPONENTS/components"
import "./home.css"
export default function Home(){
    useEffect(() => {
        var mafiapic = document.getElementById("mafiapic")
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

          
          const handleScroll = () => {
            mafiapic.style.transform = `rotate(${window.scrollX}deg)`;
          };
      
          window.addEventListener("scroll", handleScroll);
            
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

            <div className="ezafTozih">
                <div className='aksezfe'></div>
                <div className='qu-handler justify-items-end'>
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