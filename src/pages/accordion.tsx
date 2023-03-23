import type { GetStaticProps, NextPage } from 'next';
import AccordionView from '../views/AccordionView/AccordionView';
import { ChatbotsApiData } from './api/chatbot-details';

const AccordionPage: NextPage<{ data: ChatbotsApiData }> = ({ data }) => {
    return <AccordionView data={data.data} />;
};

export const getStaticProps: GetStaticProps = async () => {
    const result = await fetch(`${process.env.API_URL}/chatbot-details`);
    const data: ChatbotsApiData = await result.json();
    return {
        props: { data },
    };
};

export default AccordionPage;
