import styled from '@emotion/styled';
import { useState } from 'react';
import { AccordionItem } from '../../components/accordionItem';
import AccordionDesktopGallery from '../../components/accordionDesktopGallery';
import { ChatbotData } from '../../pages/api/chatbot-details';

interface AccordionPageParams {
    data: ChatbotData;
}

const Wrapper = styled.div(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '80px 14px',
    maxWidth: '1200px',
    margin: '0 auto',
    [theme.breakpoints.sm]: {
        padding: '80px 41px',
    },
    [theme.breakpoints.md]: {
        padding: '120px 96px',
    },
}));

const Title = styled.h1(({ theme }) => ({
    ...theme.typography.heading.H1SM,
    marginBottom: '20px',
    textAlign: 'center',
    [theme.breakpoints.sm]: {
        ...theme.typography.heading.H1,
    },
}));

const Description = styled.p(({ theme }) => ({
    ...theme.typography.content.UI18,
    marginBottom: '60px',
    textAlign: 'center',
    [theme.breakpoints.sm]: {
        ...theme.typography.content.UI24,
        marginBottom: '102px',
    },
    [theme.breakpoints.md]: {
        marginBottom: '122px',
    },
}));

const AccordionWrapper = styled.div(({ theme }) => ({
    width: '100%',
    [theme.breakpoints.md]: {
        display: 'flex',
        gap: '32px',
        alignItems: 'center',
    },
}));

const Accordion = styled.div(({ theme }) => ({
    flexDirection: 'column',
    display: 'flex',
    gap: '16px',
    [theme.breakpoints.sm]: {
        gap: '26px',
    },
    [theme.breakpoints.md]: {
        gap: '16px',
        flex: '0 0 488px',
    },
}));

const AccordionView = ({ data }: AccordionPageParams) => {
    const [active, setActive] = useState(0);
    return (
        <Wrapper>
            <Title>{data.header}</Title>
            <Description>{data.description}</Description>
            <AccordionWrapper>
                <AccordionDesktopGallery active={active} data={data} />
                <Accordion>
                    {data.widget.map((widget, index) => (
                        <AccordionItem
                            widget={widget}
                            key={index}
                            active={index === active}
                            onClick={() => setActive(index)}
                        />
                    ))}
                </Accordion>
            </AccordionWrapper>
        </Wrapper>
    );
};

export default AccordionView;
