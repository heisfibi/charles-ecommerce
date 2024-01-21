'use client'
import React, { useEffect, useRef, useState } from 'react'
import View from '../nativeLike/View'
import Text from '../nativeLike/Text'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import Pressable from '../nativeLike/Pressable'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProductCard from '../cards/ProductCard'

type Props = {
    title: string
}

function BottomCarousel({ title }: Props) {
    const carRef = useRef<SwiperRef | null>(null)
    const counts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const [width, setWidth] = useState(0);
    useEffect(() => { 
        setWidth(window.outerWidth)
        const handleResize = () => {
            setWidth(window.outerWidth)
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    return (
        <View className="w-full">
            <View>
                <View className="px-3 sm:p-0">
                    <View className="flex justify-between text-base">
                        <Text className="font-bold">{title}</Text>
                        <View className="flex gap-9 lg:gap-12 text-2xl">
                            <Pressable onPress={() => { carRef.current?.swiper.slidePrev() }}>
                                <MdChevronLeft />
                            </Pressable>
                            <Pressable onPress={() => { carRef.current?.swiper.slideNext() }}>
                                <MdChevronRight />
                            </Pressable>
                        </View>
                    </View>
                </View>
                <View className="pr-3">
                    <Swiper
                        tag="ul"
                        loop={true}
                        ref={carRef}
                        spaceBetween={8}
                        slidesPerView={width > 1024 ? 4.2 : 1.6}
                        pagination={{ clickable: true }}>
                        {
                            counts.map((item, index) => {
                                return (
                                    <SwiperSlide key={index} className="p-3">
                                        <ProductCard />
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </View>
            </View>
        </View>
    )
}

export default BottomCarousel