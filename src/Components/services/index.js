import React from 'react';
import Icon1 from '../../Images/svg-4.svg';
import Icon2 from '../../Images/svg-5.svg';
import Icon3 from '../../Images/svg-3.svg';
import {
    ServicesContainer,
    ServicesH1,
    ServicesCard,
    ServicesH2,
    ServicesWrapper,
    ServicesIcon,
    ServicesP
} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>
                        We help reduce your fees and increase your overall
                        revenue.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Full reporting</ServicesH2>
                    <ServicesP>
                        We provide full reporting tools, so you never have to
                        worry.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>24/7 Support</ServicesH2>
                    <ServicesP>
                        Our support team is always available to help, no matter
                        the time of day.
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
};

export default Services;
