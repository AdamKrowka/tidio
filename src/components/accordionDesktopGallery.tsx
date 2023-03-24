import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import { ChatbotData } from '../pages/api/chatbot-details';
import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { EffectFade } from 'swiper';

const ImageSlide = styled(SwiperSlide)(({ theme }) => ({
    background: theme.color.WHITE,
    img: {
        objectFit: 'cover',
        maxWidth: '100%',
    },
}));

const ImageSlider = styled(Swiper)(({ theme }) => ({
    background: theme.color.WHITE,
    flex: '0 1 100%',

    display: 'none',
    [theme.breakpoints.md]: {
        display: 'initial',
    },
}));

export interface AccordionDesktopGalleryProps {
    active: number;
    data: ChatbotData;
}
const AccordionDesktopGallery = ({ active, data }: AccordionDesktopGalleryProps) => {
    const swiperRef = useRef<SwiperRef | null>(null);
    useEffect(() => {
        if (!swiperRef?.current) return;
        swiperRef.current.swiper.slideTo(active);
    }, [swiperRef, active]);
    return (
        <ImageSlider ref={swiperRef} effect={'fade'} modules={[EffectFade]} allowTouchMove={false}>
            {data.widget.map((widget, index) => (
                <ImageSlide>
                    <img
                        src={widget.image.large.url}
                        width={widget.image.large.width}
                        height={widget.image.large.height}
                        alt={widget.image.alt}
                    />
                </ImageSlide>
            ))}
        </ImageSlider>
    );
};

export default AccordionDesktopGallery;
