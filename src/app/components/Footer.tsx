import React from 'react'
import View from './nativeLike/View'
import Container from './Container'
import Text from './nativeLike/Text'
import { FaFacebook, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import Link from 'next/link'

type Props = {}

function Footer({ }: Props) {
    return (
        <View className='bg-[#102B2B] text-white py-9 px-3 sm:px-6 lg:py-12 lg:px-0 font-medium'>
            <Container>
                <View className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
                    <View className="flex flex-col gap-3 lg:gap-4 w-full">
                        <Text className="uppercase text-base font-bold">The Services</Text>
                        <View className='flex flex-col gap-1 capitalize'>
                            <Link href="/how-it-works"><Text className="How it works">How it works</Text></Link>
                            <Text className="FAQs">FAQs</Text>
                        </View>
                    </View>
                    <View className="flex flex-col gap-3 lg:gap-4 w-full">
                        <Text className="uppercase text-base font-bold">JOHN LEWIS & PARTNERS</Text>
                        <View className='flex flex-col gap-1 capitalize'>
                            <Text className="How it works">About Us</Text>
                            <Text className="FAQs">Privacy Policy</Text>
                            <Text className="FAQs">Sustainability</Text>
                            <Text className="FAQs">Terms Of Service</Text>
                        </View>
                    </View>
                    <View className="flex flex-col gap-3 lg:gap-4 w-full">
                        <Text className="uppercase text-base font-bold">SUPPORT</Text>
                        <View className='flex flex-col gap-1 capitalize'>
                            <Text className="How it works">help@johnlewisfashionrental.com</Text>
                            <Text className="FAQs">Monday-Friday, 9am-6pm</Text>
                        </View>
                    </View>
                    <View className="flex flex-col gap-3 lg:gap-4 w-full">
                        <Text className="uppercase text-base font-bold">ABOUT</Text>
                        <View className='flex flex-col gap-1 capitalize'>
                            <Text htmlTag='p' className="How it works">Our new rental range makes designer womenswear more affordable than ever. With our curated selection, including new designer brands and must-have John Lewis collections, you can easily refresh your look, without it costing the Earth.</Text>
                        </View>
                        <View className="flex gap-6">
                            <FaFacebook size={15} />
                            <FaInstagram size={15} />
                            <FaPinterest size={15} />
                            <FaXTwitter size={15} />
                            <FaYoutube size={15} />
                        </View>
                    </View>
                </View>
                <View className="flex justify-center items-center w-full gap-3 flex-col mt-12 lg:mt-16  ">
                    <Text>Powered by HURR </Text>
                    <Text>Copyright © 2024. All rights reserved.</Text>
                </View>
            </Container>
        </View>
    )
}

export default Footer