import React from "react";
import { FaImage } from "react-icons/fa6";

export default function MemeForm() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    
    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name] : value
        }))
    }

    const [allMemes, setAllMemes] = React.useState([])
    
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])


    function clearInputFields() {
        setMeme((prevMeme) => ({
            ...prevMeme,
            topText: "",
            bottomText: ""
        }));
    }
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));
        
    }


  return (
    <div className="container">
        <div className="form-box">
            <div className="input-box">
                <div className="input-item">
                    <label for="top-tex">Top text</label>
                    <input 
                        id="top-tex" 
                        type="text" 
                        placeholder="Shut up"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-item">
                    <label for="bottom-tex">Bottom text</label>
                    <input 
                        id="bottom-tex" 
                        type="text" 
                        placeholder="And take my money"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <button onClick={()=>{getMemeImage(); clearInputFields()}} >Get a new meme image <FaImage className="icon-image"/> </button>

            <div className="meme">
                <img src={meme.randomImage} className="meme-image" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
            
        </div>
    </div>
  );
}
