import './App.css'
import { useState } from 'react';

function App() {
  const [linktext, setlinktext] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    const linksap = e.target.link.value;
    if(!linksap){
      return;
    }
    const linkspli = linksap.split('/')
    console.log(linkspli[5]);
    setlinktext(`https://drive.google.com/uc?export=download&id=${linkspli[5]}`)
  }
  const handelCopy = () => {
    navigator.clipboard.writeText(linktext);
  }

  return (
    <>
      <div className="py-[15px] text-center text-3xl font-[600]">Google Driver Link To Download Link</div>
      

      <div className="h-[75vh] flex justify-center items-center text-center border">
        <div className="w-[70%]">
        
          <div className="w-full">
          <h2 className="text-[20px] mb-[10px]">Give Your Goole Drive Shaire Link And Get Download Link</h2>
          <form onSubmit={handelSubmit}>
            <div className="w-full">
              <input className="w-full mb-[20px] bg-gray-200 py-[10px] px-[20px] rounded-lg" name="link" type="url" placeholder="Give You Google Drive Shair Link"/>
            </div>
            <div className="w-full">
              <button className="py-[10px] bg-gray-200 px-[25px] rounded-lg">Get Download Link</button>
            </div>
          </form>
          </div>
          <div  className="mt-[30px]">
        {
          linktext && <p className="flex justify-between px-[20px] py-[8px] bg-gray-300 rounded-lg"> <p>{linktext}</p> <button className="btn" onClick={handelCopy}>Copy</button></p>
        }

      </div>
        </div>
      </div>
      <div className="py-[20px] text-center">
        <p>This Site &copy;opyright By Ruhit Biadya</p>
      </div>
    </>
  )
}

export default App
