import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './components.css'

export default function Navigationbar(){
  const [navmobiler, setNavmobiler] = useState(false)
  useEffect(() => {
    let links = document.querySelectorAll("nav a")
    let navdiv = document.getElementById("navdiv")
    // const navmobilecontent = document.getElementById("navmobile-content");
    // const navmobileblur = document.getElementById("navmobile-blur");


    
    links.forEach(element => {
      element.style.transform=`translateX(${navdiv.offsetWidth}px)`
    });


    links.forEach((element, index) => {
      setTimeout(() => {
        element.style.transition="1200ms"
        element.classList.add("nonestyle")
        setTimeout(() => {
          element.style.transition="500ms"
        }, 100);
      }, 100 * index);
    });


    // navmobilecontent.style.height=window.innerHeight - 70 + "px";
    // navmobileblur.style.height=window.innerHeight - 70 + "px";
    // setTimeout(() => {
    //   navmobilecontent.style.transition="500ms"
    // }, 100);
    // setTimeout(() => {
    //   navmobileblur.style.transition="500ms"
    // }, 100);

  },[])


  const toggleMobileNav = () => {
    const navmobilecontent = document.getElementById("navmobile-content");
    const navmobileblur = document.getElementById("navmobile-blur");
    const root = document.querySelector("#root")
    if (!navmobiler) {
      root.style.overflow="hidden"
      // window.
      navmobilecontent.style.right="0" 
      navmobileblur.style.display="flex"
      setTimeout(() => {
        navmobileblur.style.opacity="1"
      }, 1);
      setNavmobiler(true);
    } 

    else if (navmobiler && window.innerWidth <= 900) {
      root.style.overflowX="hidden"
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      root.style.overflowY="auto"
      navmobilecontent.style.right = '-60%';
      navmobileblur.style.opacity = '0';
      setTimeout(() => {
        navmobileblur.style.display = 'none';
      }, 500);
      setNavmobiler(false);
    } 


    else if (navmobiler) {
      root.style.overflow="auto"
      navmobilecontent.style.right="-40%" 
      navmobileblur.style.opacity="0"
      setTimeout(() => {
        navmobileblur.style.display="none"
      }, 500);
      setNavmobiler(false);
    }

    
  };

  

  const toggleMobileNavBlur = () => {
    const navmobilecontent = document.getElementById("navmobile-content");
    const navmobileblur = document.getElementById("navmobile-blur");
    const root = document.querySelector("#root")
    if (navmobiler && window.innerWidth <= 900) {
      root.style.overflow="auto"
      navmobilecontent.style.right = '-60%';
      navmobileblur.style.opacity = '0';
      setTimeout(() => {
        navmobileblur.style.display = 'none';
      }, 500);
      setNavmobiler(false);
    }
    
    else if(navmobiler){
      root.style.overflow="auto"
      navmobilecontent.style.right="-40%" 
      navmobileblur.style.opacity="0"
      setTimeout(() => {
        navmobileblur.style.display="none"
      }, 500);
      setNavmobiler(false);
    }
  }
  
  

  return(<>
    <nav>
      <div id='navdiv'>
        <Link to="#">About Us</Link>
        <Link to="#">Roles</Link>
        <Link to="#">Game</Link>
        <Link to="#">Home</Link>
      </div>

      <div id='navmobile' className='navmobile' onClick={toggleMobileNav}>
        <div className='khat'></div>
      </div>
    </nav>

    <div id='navmobile-content' className='navmobile-content'>
        <div id='navmobile' className='navmobile2' onClick={toggleMobileNav}>
            <div className='khat2'></div>
        </div>
        <Link to="#">Home</Link>
        <Link to="#">Game</Link>
        <Link to="#">Roles</Link>
        <Link to="#">About Us</Link>
    </div>

    <div className='navmobile-blur' id='navmobile-blur' onClick={toggleMobileNavBlur}></div>
    </>)
}


export function Chatbox(){
  const [InputValue, setInputValue] = useState("")
  const inputSticker = document.getElementById("inputSticker")
  
  const HandleClick = (event) => {
    if (InputValue.length > 7) {
      console.log(InputValue.length)
    }
    else{
      setInputValue(InputValue + event.target.innerHTML)
      console.log(InputValue.length)
    }
  }

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }


  return (
    <>
      <div className='chatbox'>
        <p className='massage'>ChatBox!</p>
        <input type="text" className='inputSticker' id='inputSticker' value={InputValue} onChange={handleChange} disabled={true} placeholder='Select Stickers...'/>
        <div className='stickers'>
          <div className='row1Sticker'>
            <div onClick={HandleClick}>👍</div>
            <div onClick={HandleClick}>👎</div>
            <div onClick={HandleClick}>✋</div>
            <div onClick={HandleClick}>👋</div>
            <div style={{color:"red"}} onClick={HandleClick}>&#x2764;</div>
          </div>
          <div className='row1Sticker'>
            <div onClick={HandleClick}>😭</div>
            <div onClick={HandleClick}>🥺</div>
            <div onClick={HandleClick}>😎</div>
            <div onClick={HandleClick}>😐</div>
            <div onClick={HandleClick}>🤨</div>
          </div>
        </div>
      </div>
    </>
  )

}

export function TozihCard(props){

  useEffect(() => {
    const tozihCards = document.querySelectorAll(".tozihCard");
    const qus = document.querySelectorAll(".qu-container")
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("nonestyle");
          }, index * 200);
        }
      });
    });

    tozihCards.forEach((element) => {
      observer.observe(element);
    });

    qus.forEach(element => {
      observer.observe(element)
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  
  return(
    <div className='tozihCard' id='tozihCard'>
      <div className='tozihAks' style={{backgroundImage: `url("/photos/${props.aks}")`}}></div>
        <p>Title</p>
        <p>درک هدف کلی: همان طور که اشاره کردیم هدف دانشگاه یا کارفرما بررسی این نکته است که شما نحوی سازماندهی افکارتان چگونه است، این که چگونه می توانید مطابق به انتظارات به نگارش متنی بپردازید که در عین حال توانایی های شما را هم بیان کند. قطعا داشد.</p>
    </div>
  )
}

export function Qu(props) {


  return (
    <>
    <div className="qu-container">
      <input
        type="checkbox"
        name="myRadio"
        id={props.id}
        className="checker"
      />
      <label className="qu" htmlFor={props.id}>چرا؟ <span className='arrow-icon'></span></label>
      <div className="aqu"><p className="mb-4">نه می توانید مطابق به انتظارات به نگارش متنی بپردازید که در عین حال توانایی های شما را هم بیان کند. قطعا</p></div>
    </div>
    </>
  );
}






export function Footer(){
    return(
        <>
            <footer>
              <p><span><Link to="https://electrotm.org" target='_blank' style={{color:"#e6053d",marginRight:"6px"}}>electrotm.org</Link></span> ایده برداری شده از وبسایت</p>
              <p>This Photo <span className='copyaks' style={{backgroundImage:'url("/photos/mafiapic1.png")'}}></span> Is Designed By <span><Link to="https://freepic.com" style={{color:"#e6053d",marginLeft:"6px"}} target='_blank'>freepic.com</Link></span></p>
              <p>These Photos <span className='copyaks' style={{backgroundImage:'url("/photos/boxing-gloves.png")'}}></span><span className='copyaks' style={{backgroundImage:'url("/photos/gun.png")'}}></span><span className='copyaks' style={{backgroundImage:'url("/photos/add-friend.png")'}}></span><span className='copyaks' style={{backgroundImage:'url("/photos/adamak.png")'}}></span> are Designed By<span><Link to="https://flaticon.com" style={{color:"#e6053d",marginLeft:"6px"}} target='_blank'>flaticon.com</Link></span></p>
            </footer>
        </>
    )
}
