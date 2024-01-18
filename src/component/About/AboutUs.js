import './about.css';
import { useState } from 'react';
import { useDarkMode } from '../DarkModeContext';


const AboutUs = () => {

    const[textDisplay,setTextDisplay] = useState('true');
    const { darkMode } = useDarkMode();

  const AboutDtels = [
    {
      heading: "Analyse Your Text",
      Desc: "Textutils gives you a way to analyze your text quickly and efficently.It let you to count word, count charecters or reading time required.It has both light and dark mode for better compartable.",
    },
    {
      heading: "Free To Use",
      Desc: "TextUtils is a free charecter counter tool that provided instant charecter count and word count statics for a given text. TextUtils reports the number of words and charecter. Thus it is suitable for writing text with word / charecter limit.",
    },
    {
      heading: "Browser Compatible",
      Desc: "This word counter software works in any web browser such as Chrome , Firefox ,Internet Explorer ,Safari,Opera etc.",
    },
  ];


  const TextFormation=()=>{
    setTextDisplay((prevtextDisplay) => !prevtextDisplay);
  }

  return (
    <div className="AboutUs">
      <h1>About App</h1>
      <div className={darkMode? 'AboutPage':'Aboutpagenew'}>
        {
          AboutDtels.map((items)=>{
            return<div>
                <div className={darkMode?'About':'Aboutnew'}>
                    <button className={darkMode?'ShowBtn':'darkShowBtn'} onClick={TextFormation}>
                    <h3>{items.heading}</h3>
                    </button>
                    <p className={textDisplay?'TextShow':'TextHidden'}>{items.Desc}</p>
                </div>
            </div>
          })  
        }
      </div>
    </div>
  );
};

export default AboutUs;
