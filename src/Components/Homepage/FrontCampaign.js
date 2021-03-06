import React from 'react'
import './FrontCampaign.css'

function FrontCampaign() {
    return (
        <div className="FrontCampaign">
            <h1 className="FrontCampaign-title">Campaigns</h1>
            <div className="content">
            <div className="grid">
                <figure className="effect-julia">
                    <img src="images/Campaigns_1.png" alt="img21"/>
                    <figcaption>
                        <h2>Shiksha-Ak Nayi Ummed</h2>
                        <div>
                            <p>Julia dances in the deep dark</p>
                            <p>She loves the smell of the ocean</p>
                            <p>And dives into the morning light</p>
                        </div>
                    </figcaption>			
                </figure>
                <figure className="effect-julia">
                    <img src="images/Campaigns_2.png" alt="img22"/>
                    <figcaption>
                        <h2>Passionate</h2>
                        <div>
                            <p>Julia dances in the deep dark<br/></p>
                            <p>She loves the smell of the ocean</p>
                            <p>And dives into the morning light</p>
                        </div>
                    </figcaption>			
                </figure>
                <figure className="effect-julia">
                    <img src="images/Campaigns_3.png" alt="img22"/>
                    <figcaption>
                        <h2>Passionate</h2>
                        <div>
                            <p>Julia dances in the deep dark<br/></p>
                            <p>She loves the smell of the ocean</p>
                            <p>And dives into the morning light</p>
                        </div>
                    </figcaption>			
                </figure>
			</div>
            </div>
            {/* <a href="#" className="FrontCampaign-btn">Know More</a> */}
            <hr className="breakline"/>
        </div>
    )
}

export default FrontCampaign
