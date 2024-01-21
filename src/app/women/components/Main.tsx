"use client"
import Container from '@/app/components/Container'
import ProductCard from '@/app/components/cards/ProductCard'
import Pressable from '@/app/components/nativeLike/Pressable'
import Text from '@/app/components/nativeLike/Text'
import View from '@/app/components/nativeLike/View'
import React, { useState } from 'react'
import { CgChevronUp } from 'react-icons/cg'
import { FaX } from 'react-icons/fa6'

function Main() {
    const [isFilter, setFilter] = useState(false);

    return (
        <View htmlTag='main'>
            <View className="bg-[#f5f5f5] px-3 sm:px-0">
                <View className="flex justify-center flex-col text-center text-sm gap-3 py-9 ">
                    <Text className="text-2xl font-bold capitalize">RENT NEW WOMENSWEAR</Text>
                    <Text>Discover the latest rental pieces from the leading brands and labels at John Lewis, curated by our expert buyers.</Text>
                </View>
            </View>
            <Container>
                <View className="flex w-full my-9 justify-center items-center lg:hidden px-3 sm:px-0">
                    <Pressable className="bg-transparent hover:bg-black text-black hover:text-white border px-3 w-full h-10 border-black"
                        onPress={() => { setFilter(true) }}>
                        <Text className="text-center uppercase">FIlters</Text>
                    </Pressable>
                </View>
            </Container>
            <Container>
                <View className="lg:flex gap-3 py-9">
                    <View className={`fixed top-0 left-0 lg:static ${isFilter ? "min-h-screen" : "hidden"} bg-white lg:bg-transparent w-full z-50 lg:z-0 lg:block lg:w-1/4 px-3 lg:pr-9 lg:pl-0`}>
                        <View className="lg:sticky left-0 top-[calc(5rem+106px)] gap-6 lg:z-40">
                            <Pressable htmlTag='div' className="h-12 lg:hidden flex justify-end items-center text-gray-500 hover:text-black"
                                onPress={() => { setFilter(false) }}>
                                <FaX size={24} />
                            </Pressable>
                            <View className="flex pt-6 lg:pt-0 flex-col gap-6">
                                <View className="flex justify-between text-xl items-end w-full">
                                    <Text className="font-bold">Filters</Text>
                                    <Text className="text-sm">677 results</Text>
                                </View>
                                <View className="flex flex-col gap-9 text-sm">
                                    <View>
                                        <View className="flex justify-between items-center">
                                            <Text>Sort by</Text>
                                            <CgChevronUp size={24} />
                                        </View>
                                        <View></View>
                                    </View>

                                    <View>
                                        <View className="flex justify-between items-center">
                                            <Text>Category</Text>
                                            <CgChevronUp size={24} />
                                        </View>
                                        <View></View>
                                    </View>

                                    <View>
                                        <View className="flex justify-between items-center">
                                            <Text>Size</Text>
                                            <CgChevronUp size={24} />
                                        </View>
                                        <View></View>
                                    </View>

                                    <View>
                                        <View className="flex justify-between items-center">
                                            <Text>Designers</Text>
                                            <CgChevronUp size={24} />
                                        </View>
                                        <View></View>
                                    </View>

                                    <View>
                                        <View className="flex justify-between items-center">
                                            <Text>Colour</Text>
                                            <CgChevronUp size={24} />
                                        </View>
                                        <View></View>
                                    </View>

                                    <View>
                                        <View className="flex justify-between items-center">
                                            <Text>Rental price</Text>
                                            <CgChevronUp size={24} />
                                        </View>
                                        <View></View>
                                    </View>

                                    <View>
                                        <View className="flex justify-between items-center">
                                            <Text>Available dates</Text>
                                            <CgChevronUp size={24} />
                                        </View>
                                        <View></View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View className="w-full grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6 gap-y-9 lg:w-3/4">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </View>
                </View>
            </Container>

        </View>
    )
}

export default Main