import React, {useState} from 'react';
import { HeroBg, HeroContainer, VideoBg,
        HeroContent, HeroH1, HeroBtnWrapper,
        HeroP, ArrowForward, ArrowRight,
} from './HeroElements';
import Video from '../../videos/video.mp4'

import {Button} from '../ButtonElements'


const HeroSection = () => {

    const [hover, setHover] = useState (false)

    const onHover= () => {
        setHover(!hover)
    }

    return(
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='Imagen/jpg' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Internet WiFi</HeroH1>
                <HeroP>Conexiones ultra rápidas</HeroP>
                <HeroBtnWrapper>
                    <Button primary dark to='services'
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80}>
                        Conocer los planes {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;