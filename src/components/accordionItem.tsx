import { ChatbotWidgetData } from '../pages/api/chatbot-details';
import styled from '@emotion/styled';

const Header = styled.div(({ theme }) => ({
    display: 'flex',
    gap: '30px',
    alignItems: 'flex-start',
    flexGrow: '1',
    width: '100%',
    div: {
        h2: {
            ...theme.typography.content.UI20,
            marginBottom: '10px',
        },
    },
}));

const Description = styled.p<{ active: boolean }>(({ theme, active }) => ({
    ...theme.typography.content.UI16,
    padding: '0',
    margin: '0',
    transition: 'all 0.5s',
    [theme.breakpoints.md]: {
        maxHeight: active ? '200px' : 0,
        overflow: 'hidden',
        '.xDDDD': {
            background: 'red',
        },
    },
}));

const AccordionItemStyled = styled.div<{ active: boolean }>(({ theme, active }) => ({
    backgroundColor: active ? theme.color.WHITE : theme.color.GRAY_50,
    padding: '24px',
    borderRadius: '16px',
    boxShadow: active ? '0px 2px 8px rgba(0, 27, 71, 0.28)' : 'unset',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '57px',
    transition: 'all 0.3s',
    [theme.breakpoints.md]: {
        backgroundColor: theme.color.WHITE,
        ':hover': {
            backgroundColor: theme.color.GRAY_50,
            cursor: 'pointer',
        },
    },
}));

const Icon = styled.img(() => ({
    flex: '0 0 38px',
}));

const SmImage = styled.picture<{ active: boolean }>(({ active, theme }) => ({
    display: active ? 'initial' : 'none',
    [theme.breakpoints.md]: {
        display: 'none',
    },
}));

export interface AccordionItemProps {
    widget: ChatbotWidgetData;
    active: boolean;
    onClick: () => void;
}

export const AccordionItem = ({ widget, active, onClick }: AccordionItemProps) => {
    return (
        <AccordionItemStyled active={active} onClick={onClick}>
            <Header>
                <Icon src={widget.icon} width={38} height={38} alt={widget.title} />
                <div>
                    <h2>{widget.title}</h2>
                    <Description active={active}>{widget.description}</Description>
                </div>
            </Header>
            <SmImage active={active}>
                <source
                    media="(min-width:800px)"
                    srcSet={widget.image.large.url}
                    height={widget.image.large.height}
                    width={widget.image.large.width}
                />
                <img
                    src={widget.image.small.url}
                    width={widget.image.small.width}
                    height={widget.image.small.height}
                    alt={widget.image.alt}
                />
            </SmImage>
        </AccordionItemStyled>
    );
};
