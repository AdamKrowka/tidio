import styled from '@emotion/styled';
import { ChatbotWidgetData } from '../pages/api/chatbot-details';
import { theme } from '../theme';

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
        p: {
            ...theme.typography.content.UI16,
            padding: '0',
        },
    },
}));

const AccordionItemStyled = styled.div(({ theme }) => ({
    backgroundColor: theme.color.GRAY_50,
    padding: '24px',
    borderRadius: '16px',
    boxShadow: 'unset',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '57px',
    transition: 'all 0.3s',
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
        <AccordionItemStyled
            onClick={onClick}
            style={
                active
                    ? {
                          boxShadow: '0px 2px 8px rgba(0, 27, 71, 0.28)',
                          backgroundColor: theme.color.WHITE,
                      }
                    : {}
            }
        >
            <Header>
                <Icon src={widget.icon} width={38} height={38} alt={widget.title} />
                <div>
                    <h2>{widget.title}</h2>
                    <p>{widget.description}</p>
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
