import React from "react";
import './directory.styles.scss';
import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component{
    constructor(){
        super();

        this.state={
            sections:[
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/fkLD7h7/hatsoff.jpg',
                    id: 1
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/hsN1pMj/sneakersoff.jpg',
                    id: 2
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/7XxRp8j/jacketsoff.jpg',
                    id: 3
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/dKvSKn3/street-style-mosphere.jpg',
                    id: 4
                },
                {
                    title: 'wemens',
                    imageUrl: 'https://i.ibb.co/2ZJ0XrS/wemensoff.jpg',
                    id: 5
                }
            ]
        }
    }

    render(){
        return(
         <div className="directory-menu">
                {this.state.sections.map(({title, imageUrl, id})=>(
                        <MenuItem key={id} title={title} imageUrl={imageUrl}/>
                ))
                }
         </div>
        );
    }

}

export default Directory;