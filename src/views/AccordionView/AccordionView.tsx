import { ChatbotsApiData } from '../../pages/api/chatbot-details';

interface AccordionPageParams {
    data: ChatbotsApiData;
}

const AccordionView = ({ data }: AccordionPageParams) => {
    return (
        <div>
            <pre>{JSON.stringify(data, null, 4)}</pre>
        </div>
    );
};

export default AccordionView;
