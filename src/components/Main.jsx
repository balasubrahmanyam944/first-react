import { useState, useEffect  } from "react"

export default function Main() {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })
    const [memeImg, setMemeImage] = useState([])
    useEffect(() => {
    async function fetchData() {
        try {
            const response = await fetch("https://api.imgflip.com/get_memes");
            const imgData = await response.json();  // Await the json response here
            console.log(imgData.data.memes);
            setMemeImage(imgData.data.memes);
        } catch (err) {
            console.log("Error fetching data:", err);
        }
    }
    fetchData();
}, []);  // Empty array means this runs only once when the component mounts

const getMemeImagae=()=>{
    const randomNumber = Math.floor(Math.random() * memeImg.length);
    const newMemUrl = memeImg[randomNumber].url
    setMeme(preMeme=>({...preMeme,imageUrl:newMemUrl}))
}
    function handleChange(event) {
        const {value,name} = event.currentTarget
        /**
         * Challenge: update the topText value in the meme state
         * object every time the topText input box is changed
         * 
         * Note: don't worry about bottomText at this point.
         */
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    // function handleChanges(event) {
    //     const {value} = event.currentTarget
    //     setMeme(prevMeme => ({
    //         ...prevMeme,
    //         bottomText: value
    //     }))
    // }
    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button onClick={getMemeImagae}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
             {/* <table style={{borderCollapse: "collapse"}}>
    <thead>
<tr>
    <th style={{border:"black solid 2px"}}>ID</th>
    <th style={{border:"black solid 2px"}}>Name</th>
    <th style={{border:"black solid 2px"}}>Department</th>
    <th style={{border:"black solid 2px"}}>Age</th>
    <th style={{border:"black solid 2px"}}>Status</th>
</tr>
    </thead>
    <tbody>
        {tableData.map((data)=>
        <tr>
    <th style={{border:"black solid 2px"}}>{data.id}</th>
    <th style={{border:"black solid 2px"}}>{data.name}</th>
    <th style={{border:"black solid 2px"}}>{data.department}</th>
    <th style={{border:"black solid 2px"}}>{data.age}</th>
    <th style={{border:"black solid 2px"}}>{data.status}</th>
</tr>
        )}
    </tbody>
  </table> */}
        </main>
    )
}