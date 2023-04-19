import React from 'react'
import HornedBeast from './HornedBeast';

let imgUrl = "https://i.imgur.com/DZ29Xb8.png";
let desc ="Amares the troll!";

let imgUrl2 = "https://i.imgur.com/7bdQJyG.png";
let desc2 = "Cabria the troll";

class Main extends React.Component {

    render() {
        return (
            <div>
                <HornedBeast title="Amares" imageUrl={imgUrl} description={desc}/>
                <HornedBeast title="Cabria" imageUrl={imgUrl2} description={desc2}/>
                
            </div>
        )
    }
}

export default Main;