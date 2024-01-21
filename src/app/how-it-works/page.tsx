import React from 'react'
import Text from '../components/nativeLike/Text'
import View from '../components/nativeLike/View'
import Container from '../components/Container'
import Pressable from '../components/nativeLike/Pressable'

type Props = {}

function HowItWorks({ }: Props) {
    return (
        <main className="flex flex-col py-9 px-3 sm:px-0">
            <Container >
                <View className="flex justify-center">
                    <Text className="text-2xl font-bold capitalize">How it works</Text>
                </View>
                <View className="flex flex-wrap lg:flex-row lg:flex-nowrap justify-between lg:gap-9 text-sm py-6">
                    <View className="sm:w-1/2 lg:w-1/3 sm:px-3 lg:px-0">
                        <View>
                            <img className="aspect-square" src="https://res.cloudinary.com/dcaptnlz3/image/upload/f_auto,q_auto:best/0q4l2t9l4xeedv93k4tks4np5czd" />
                        </View>
                        <View className="flex flex-col gap-3 py-6">
                            <Text className="font-bold">1. Book</Text>
                            <Text>Browse our rental collection and select the perfect piece.</Text>
                        </View>
                    </View>
                    <View className="sm:w-1/2 lg:w-1/3 sm:px-3 lg:px-0">
                        <View>
                            <img className="aspect-square" src="https://res.cloudinary.com/dcaptnlz3/image/upload/f_auto,q_auto:best/2558oxl0r6co3m187p4o2h8mfml6" />
                        </View>
                        <View className="flex flex-col gap-3 py-6">
                            <Text className="font-bold">2. Wear</Text>
                            <Text>Rent your pieces for 4, 8, 16, or 30 days. They’ll be delivered direct to your door.</Text>
                        </View>
                    </View>
                    <View className="sm:px-3 lg:px-0 sm:w-full lg:w-1/3 sm:flex sm:flex-col sm:items-center lg:block">
                        <View className="sm:flex sm:justify-center lg:justify-start sm:w-1/2 lg:w-full">
                            <img className="aspect-square" src="https://res.cloudinary.com/dcaptnlz3/image/upload/f_auto,q_auto:best/oaqy4pzn9q80ka80wwisaar63jqh" />
                        </View>
                        <View className="flex flex-col gap-3 sm:w-1/2 lg:w-full py-6">
                            <Text className="font-bold">3. Return</Text>
                            <Text>{"Simply send the item back to us using the pre-paid returns label, and we'll take care of the dry cleaning."}</Text>
                        </View>
                    </View>
                </View>
                <View className="flex w-full mt-9 justify-center items-center">
                    <Pressable className="bg-transparent hover:bg-black text-black hover:text-white border px-3  h-10 border-black">
                        <Text className="text-center uppercase">READ OUR FAQS</Text>
                    </Pressable>
                </View>
            </Container>
        </main>
    )
}

export default HowItWorks