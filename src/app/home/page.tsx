import React from 'react'
import Pressable from '../components/nativeLike/Pressable'
import Text from '../components/nativeLike/Text'
import View from '../components/nativeLike/View'
import HowItWorks from '../how-it-works/page'
import BottomCarousel from '../components/includes/BottomCarousel'
import Container from '../components/Container'

type Props = {}

function page({ }: Props) {
    return (
        <main>
            <div>
                <div className="w-full h-[400px] sm:h-[600px] banner" >
                    <div className="flex items-center justify-center h-full">
                        <div className="row main-banner hero-banner text-white " >
                            <div>
                                <div className="flex flex-col p-2 text-center gap-6">
                                    <p className="text-2xl">HITTING THE SLOPES?</p>
                                    <View className="flex flex-col justify-center items-center gap-3">
                                        <h3 className="banner-header text-white text-3xl font-bold">Rentals to take you from mountainside to après</h3>
                                        <Pressable className="bg-black hover:bg-transparent text-white hover:text-black border w-fit  h-10 border-black px-3">
                                            <Text className="text-center uppercase">Get Started</Text>
                                        </Pressable>
                                    </View>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <HowItWorks />
                <Container>
                    <View className="py-9">
                        <BottomCarousel title="Just Landed" />
                    </View>
                </Container>
            </div>
        </main>
    )
}

export default page