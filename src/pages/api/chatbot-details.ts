import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

interface ChatbotImageSize {
    url: string;
    width: number;
    height: number;
}

interface ChatbotImage {
    alt: string;
    small: ChatbotImageSize;
    large: ChatbotImageSize;
}

interface ChatbotWidgetData {
    title: string;
    description: string;
    icon: string;
    image: ChatbotImage;
}

interface ChatbotData {
    header: string;
    description: string;
    widget: ChatbotWidgetData[];
}

export interface ChatbotsApiData {
    data: ChatbotData;
}

const chatbotsApiHandler: NextApiHandler = (request: NextApiRequest, response: NextApiResponse) => {
    const data: ChatbotsApiData = {
        data: {
            header: 'Chatbots can generate sales',
            description:
                'Explore new ways to capture leads and generate more sales. Discover some of our most popular sales chatbots templates:',
            widget: [
                {
                    title: 'Discount for new/returning visitors',
                    description:
                        'Set up personalized messages offering a discount to new and returning visitors.',
                    icon: '/images/discount-icon.svg',
                    image: {
                        alt: 'Discount for new/returning visitors',
                        small: {
                            url: '/images/discount-for-new-visitors-small.png',
                            width: 330,
                            height: 425,
                        },
                        large: {
                            url: '/images/discount-for-new-visitors-large.png',
                            width: 592,
                            height: 660,
                        },
                    },
                },
                {
                    title: 'Product recommendation',
                    description: 'Sell more by recommending hot deals and cross-sell offers.',
                    icon: '/images/product-recommendation-icon.svg',
                    image: {
                        alt: 'Product recommendation',
                        small: {
                            url: '/images/product-recommendation-small.png',
                            width: 330,
                            height: 425,
                        },
                        large: {
                            url: '/images/product-recommendation-large.png',
                            width: 592,
                            height: 660,
                        },
                    },
                },
                {
                    title: 'Abandoned cart saver',
                    description:
                        'Stop 60% of your customers from abandoning their carts by offering a discount.',
                    icon: '/images/abandoned-cart-icon.svg',
                    image: {
                        alt: 'Abandoned cart saver',
                        small: {
                            url: '/images/abandoned-cart-saver-large.png',
                            width: 330,
                            height: 425,
                        },
                        large: {
                            url: '/images/abandoned-cart-saver-large.png',
                            width: 592,
                            height: 660,
                        },
                    },
                },
            ],
        },
    };

    return response.json(data);
};

export default chatbotsApiHandler;
