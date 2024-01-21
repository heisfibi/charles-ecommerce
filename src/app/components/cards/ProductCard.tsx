import React from 'react'
import View from '../nativeLike/View'
import Text from '../nativeLike/Text'
import Image from 'next/image'
import Pressable from '../nativeLike/Pressable'
import { FaCamera } from 'react-icons/fa'
import { SiCanva } from 'react-icons/si'
import { BiPencil } from 'react-icons/bi'
import Link from 'next/link'

type Props = {}

const ProductCard = (props: Props) => {
    return (
        <Link href={"/items/1"}>

            <View className="flex flex-col gap-3 w-full py-3">
                <View className="relative">
                    <View className="flex flex-col items-end absolute right-1 -top-3 z-10 gap-2">
                        <Pressable className="flex gap-1 text-sm sm:text-base justify-center items-center rounded-full bg-white px-2 py-1">
                            <FaCamera />
                            <Text>Try it on</Text>
                        </Pressable>
                        <Pressable className="flex text-sm justify-center items-center rounded-full w-fit bg-white p-2">
                            <BiPencil />
                        </Pressable>
                    </View>
                    <View className="overflow-hidden flex-1">
                        <Image width={400} height={600} className="w-full h-auto" alt="" src="https://res.cloudinary.com/dcaptnlz3/image/upload/c_fill,f_auto,h_1350,q_auto:best,w_900/xwj9caleakjtps9mfky07ufwd3sg" />
                    </View>
                </View>
                <View className="flex flex-col gap-1 sm:gap-2">
                    <Text className="font-bold">Molby the Label</Text>
                    <Text className="text-sm">Rent From $37</Text>
                    <Text className="text-gray-500 text-xs">Retail $180</Text>
                </View>
            </View>
        </Link>
    )
}

export default ProductCard