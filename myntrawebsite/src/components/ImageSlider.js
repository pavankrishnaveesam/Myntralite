import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class ImageGallaryComponent extends React.Component {
    render() {
        return (
            <div>
              
                {/* <h2>My Image Gallery</h2> */}
                <Carousel showThumbs={false} autoPlay interval="800" transitionTime="800">
                    <div>
                        <img src="./Images/IS_tp.png" />
                        
                    </div>
                    <div>
                        <img src="./Images/IS_Watch.png" />
                        
                    </div>
                    <div>
                        <img src="./Images/IS_womens.png"/>
                        
                    </div>
                    <div>
                        <img src="./Images/IS_mens.png" />
                        
                    </div>
                    <div>
                        <img src="./Images/IS_footwear.png" />
                        
                    </div>
                    <div>
                        <img src="./Images/IS_Jewellery.png" />
                        
                    </div>
                    <div>
                        <img src="./Images/IS_kids.png" />
                        
                    </div>
                </Carousel>
            </div>
        )
    };
}

export default ImageGallaryComponent;