'use client'
import Container from '@/app/components/Container'
import Text from '@/app/components/nativeLike/Text'
import View from '@/app/components/nativeLike/View'
import Image from 'next/image'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import BottomCarousel from '@/app/components/includes/BottomCarousel'
import Link from 'next/link'

type Props = {}

const page = (props: Props) => {
    return (
        <View>
            <Container>
                <View className="flex flex-col gap-6 px-3 sm:px-12 lg:px-0">
                    <View className="pt-4">
                        <Text className="flex gap-2  text-[rgb(122,124,127)]">
                            <Text>Home</Text>/<Text>Clothing</Text>/<Text>Dresses</Text>
                        </Text>
                    </View>
                    <View className="flex flex-col lg:flex-row gap-6">
                        <View className="lg:w-4/6">
                            <View className="lg:grid grid-cols-2 gap-4 hidden">
                                <Image width="400" height="600" alt='' className="w-full" src="https://res.cloudinary.com/dcaptnlz3/image/upload/c_fill,f_auto,h_1350,q_auto:best,w_900/kt1o24xdn7jnapyza08hmvtw0tmt" />
                                <Image width="400" height="600" alt='' className="w-full" src="https://res.cloudinary.com/dcaptnlz3/image/upload/c_fill,f_auto,h_1350,q_auto:best,w_900/bilji05a2vyyhz65kyhwprfpadlc" />
                                <Image width="400" height="600" alt='' className="w-full" src="https://res.cloudinary.com/dcaptnlz3/image/upload/c_fill,f_auto,h_1350,q_auto:best,w_900/twox7flwpbbk6w80pr3nlu9f0jl2" />
                                <Image width="400" height="600" alt='' className="w-full" src="https://res.cloudinary.com/dcaptnlz3/image/upload/c_fill,f_auto,h_1350,q_auto:best,w_900/1ufg0wq710bdct2buxsc4wau709x" />
                            </View>
                            <View className="lg:hidden">
                                <Swiper
                                    loop
                                    tag="ul"
                                    navigation
                                    spaceBetween={0}
                                    slidesPerView={1}
                                    modules={[Pagination, Navigation]}
                                    pagination={{ clickable: true }}>
                                    <SwiperSlide><Image width="400" height="600" className="w-full" alt='' src="https://res.cloudinary.com/dcaptnlz3/image/upload/c_fill,f_auto,h_1350,q_auto:best,w_900/kt1o24xdn7jnapyza08hmvtw0tmt" /></SwiperSlide>
                                    <SwiperSlide><Image width="400" height="600" className="w-full" alt='' src="https://res.cloudinary.com/dcaptnlz3/image/upload/c_fill,f_auto,h_1350,q_auto:best,w_900/bilji05a2vyyhz65kyhwprfpadlc" /></SwiperSlide>
                                    <SwiperSlide><Image width="400" height="600" className="w-full" alt='' src="https://res.cloudinary.com/dcaptnlz3/image/upload/c_fill,f_auto,h_1350,q_auto:best,w_900/twox7flwpbbk6w80pr3nlu9f0jl2" /></SwiperSlide>
                                    <SwiperSlide><Image width="400" height="600" className="w-full" alt='' src="https://res.cloudinary.com/dcaptnlz3/image/upload/c_fill,f_auto,h_1350,q_auto:best,w_900/1ufg0wq710bdct2buxsc4wau709x" /></SwiperSlide>
                                </Swiper>
                            </View>
                        </View>
                        <View className="lg:pl-3 lg:w-2/6">
                            <View className="flex flex-col gap-4 bg-white p-3 lg:p-9 lg:py-12">
                                <Text htmlTag='h5' className="text-2xl font-bold">Bardot</Text>
                                <Text>Reese Midi Dress In Cobalt</Text>
                                <Text>Rent from £41 - £73</Text>
                                <Text className="text-[rgb(122,124,127)]">Retail £200</Text>
                                <View className="flex flex-col gap-1">
                                    <Text>Size</Text>
                                    <select className="border border-[#2D2F33] h-9 outline-none rounded-0 select-none px-3"><option value="">Select a size...</option>
                                        <option value="1403">UK 6</option>
                                        <option value="2009">UK 12</option>
                                        <option value="1400">UK 14</option>
                                    </select>
                                </View>
                                <View className="flex flex-col p-3 mb-3 gap-3 bg-[#f5f5f5]">
                                    <Text htmlTag='p'>Worried about fit?</Text>
                                    <Text htmlTag='p' className="mb-0">Use our Fit Policy to receive a refund, minus the delivery and cleaning charges. <Link href="#" className="text-dark border-b-2 border-[#2D2F33]">Press here to learn more.</Link></Text>
                                </View>
                                <View className='flex flex-col'>
                                    <Text>Rental Duration</Text>
                                    <View className="grid grid-cols-2 gap-3">
                                        <View className="flex flex-col justify-center items-center gap-1 font-bold h-[77px] border">
                                            <Text>4 days</Text>
                                            <Text>$ 61.78</Text>
                                        </View>
                                        <View className="flex flex-col justify-center items-center gap-1 font-bold h-[77px] border">
                                            <Text>4 days</Text>
                                            <Text>$ 61.78</Text>
                                        </View>
                                        <View className="flex flex-col justify-center items-center gap-1 font-bold h-[77px] border">
                                            <Text>4 days</Text>
                                            <Text>$ 61.78</Text>
                                        </View>
                                        <View className="flex flex-col justify-center items-center gap-1 font-bold h-[77px] border">
                                            <Text>4 days</Text>
                                            <Text>$ 61.78</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View className="sm:px-12 lg:px-0">
                    <View className="py-9">
                        <BottomCarousel title="Recently Viewed" />
                    </View>
                </View>
            </Container>
        </View>
    )
}

export default page