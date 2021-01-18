import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import { ServicesContainer, ServicesH1, ServicesWrapper,
ServicesIcon, ServicesH2, ServicesP, ServicesCard
} from './ServicesElements'
import { Button } from '../ButtonElements'

const Services = () => {
    return (
        <>
            <ServicesContainer id='services'>
                <ServicesH1>Nuentros servicios</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1}/>
                        <ServicesH2>Plan Hogar</ServicesH2>
                        <ServicesP></ServicesP>
                        <Button to='home'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            primary
                            dark
                            dark2
                            >Conocer</Button>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2}/>
                        <ServicesH2>Plan Home Office</ServicesH2>
                        <ServicesP></ServicesP>
                        <Button to='home'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            primary
                            dark
                            dark2
                            >Conocer</Button>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3}/>
                        <ServicesH2>Plan Empresas</ServicesH2>
                        <ServicesP></ServicesP>
                        <Button to='home'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            primary
                            dark
                            dark2
                            >Conocer</Button>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services
