'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import Pressable from './nativeLike/Pressable'
import Text from './nativeLike/Text'
import { usePathname } from 'next/navigation'
import { FaChevronRight } from 'react-icons/fa'
import View from './nativeLike/View'

type Props = {}

function Header({ }: Props) {
    const clearRef = useRef<any>()
    const mainInputRef = useRef<HTMLInputElement>(null)
    const [isDrawer, setDrawer] = useState(false);
    const [isPerson, setIsPerson] = useState(false);
    const [isClothing, setClothing] = useState(false);
    const pathName = usePathname();

    useEffect(() => {
        setDrawer(false)
        setIsPerson(false)
        setClothing(false)
    }, [pathName])

    return (
        <div className="bg-white sticky top-0 z-50">
            <div className="">
                <div className="text-black">
                    <div className="px-3 sm:px-6 lg:px-0 pb-3 lg:pb-0">
                        <div className="">
                            <div className="w-full flex justify-between items-center h-12 sm:h-16 lg:h-20  lg:px-[114px]">
                                <div className="flex w-1/3">
                                    <Link href="/">
                                        <Image width={178} height={37.4} className="img img-fluid h-[37px]"
                                            alt="John Lewis Rental logo"
                                            src="https://res.cloudinary.com/dcaptnlz3/image/asset/john_lewis-rental-logo-b2eb6c2dc485bb0c9acdac26ea426909.svg" />
                                    </Link>
                                </div>

                                <div className="hidden lg:flex w-1/3 justify-center text-center items-center my-auto">
                                    <div data-controller="nav-secondary-search" className="d-flex justify-content-center">
                                        <form className="position-relative mb-n3" action="/search" acceptCharset="UTF-8" method="get">
                                            <div className="flex justify-center items-center">
                                                <div className="flex border border-black w-[338px] focus-within:border-2 h-12 px-3">
                                                    <div className='flex items-center justify-center'>
                                                        <Image width={24} height={24} className="left-icon" alt='' src="https://res.cloudinary.com/dcaptnlz3/image/asset/search-b61a300bd1103c3c6929cfc083558a12.svg" />
                                                    </div>
                                                    <input ref={mainInputRef} name="search_for" onInput={(e: any) => {
                                                        clearRef.current?.classList.add("hidden")
                                                        if (e.target.value) {
                                                            clearRef.current?.classList.add("flex")
                                                            clearRef.current?.classList.remove("hidden")
                                                        }
                                                    }}
                                                        placeholder="Search product or brand" className="text-black px-3 grow outline-none" type="text" id="listing_search_for" />

                                                    <Pressable ref={clearRef} onPress={(e: any) => {
                                                        if (mainInputRef.current) {
                                                            mainInputRef.current.value = ""
                                                            clearRef.current?.classList.add("hidden")
                                                            clearRef.current?.classList.remove("flex")
                                                        }
                                                    }} className='items-center justify-center outline-none hidden'>
                                                        <Image width={24} height={24} alt="Clear search bar" src="https://res.cloudinary.com/dcaptnlz3/image/asset/close-icon-a9a29f62a47bc7d408e473a7abbdfa60.svg" />
                                                    </Pressable>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="flex justify-end gap-2 sm:gap-3 col-md-4 text-end w-1/3">
                                    <div className="c-dropdown">
                                        <Link href="/accounts" onClick={(e) => {
                                            if (window.outerWidth < 1024) {
                                                e.preventDefault()
                                                setIsPerson(!isPerson)
                                            }
                                        }}>
                                            <Image width={24} height={24} alt='' src="https://res.cloudinary.com/dcaptnlz3/image/asset/user-icon-552f796e9953ab41f25975b7a422ecd1.svg" />
                                        </Link>
                                        <div className="c-dropdown-content left-[-80px] w-[180px]">
                                            <div className="hidden lg:flex py-2 font-bold bg-white text-center flex-col border border-black text-xs">
                                                <Link className="px-3 py-2 hover:bg-gray-200" href="/accounts?page=rentals"><span className="whitespace-nowrap uppercase">My Rentals</span></Link>
                                                <Link className="px-3 py-2 hover:bg-gray-200" href="/accounts?page=purchases"><span className="whitespace-nowrap uppercase">My Purchases</span></Link>
                                                <Link className="px-3 py-2 hover:bg-gray-200" href="/accounts?page=purchases"><span className="whitespace-nowrap uppercase">Sign Out</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <Pressable className='lg:hidden flex items-center justify-center' onPress={() => { setDrawer(!isDrawer) }}>
                                        {
                                            isDrawer ?
                                                <Image width={24} height={24} alt="Menu" src="https://res.cloudinary.com/dcaptnlz3/image/asset/close-icon-a9a29f62a47bc7d408e473a7abbdfa60.svg" />
                                                :
                                                <Image width={24} height={24} id="closeIcon" alt="Close" src="https://res.cloudinary.com/dcaptnlz3/image/asset/hamburguer-menu-9e39f5d51531c861903a4910c6a7d35d.svg" />
                                        }
                                    </Pressable>
                                </div>
                            </div>
                        </div>
                        <div className={`flex lg:hidden border-gray-200 h-12 gap-3 border px-3 focus-within:border-black`}>
                            <input name="search_for" placeholder="Type to search..." className="text-black grow outline-none" data-action="keyup->nav-secondary-search#toggleClearButton" type="text" id="listing_search_for" />
                            <div className='flex items-center justify-center'>
                                <Image width={24} height={24} className="left-icon" alt='' src="https://res.cloudinary.com/dcaptnlz3/image/asset/search-b61a300bd1103c3c6929cfc083558a12.svg" />
                            </div>
                        </div>
                        <div className={`lg:hidden flex-col mt-6 lg:mt-0 font-medium ${isPerson ? "flex" : "hidden"}`}>
                            <Link className="px-3 py-2 capitalize" href="/accounts?page=rentals"><span className="whitespace-nowrap">My Account</span></Link>
                            <Link className="px-3 py-2 capitalize" href="/accounts?page=purchases"><span className="whitespace-nowrap">My Rentals</span></Link>
                            <Link className="px-3 py-2 capitalize" href="/accounts?page=purchases"><span className="whitespace-nowrap">My Purchases</span></Link>
                            <Pressable className="bg-black hover:bg-transparent text-white hover:text-black border  h-10 border-black">
                                <Text className="text-center uppercase">Sign out</Text>
                            </Pressable>
                        </div>
                    </div>
                    <nav className={`lg:bg-[#f5f5f5] mt-6 lg:mt-0 ${isDrawer ? "flex" : "hidden"} relative lg:block pb-3 lg:pb-0`}>
                        <div className="px-3 sm:px-6 lg:px-0 lg:flex lg:justify-center items-center min-h-[56px] w-full">
                            <div className="flex flex-col lg:flex-row list-none gap-3 font-medium text-sm">
                                <li className="lg:mx-3 p-0">
                                    <Link className="text-black flex justify-between w-full" href="/women/new_arrivals">Just In</Link>
                                </li>
                                <li className="lg:mx-3 p-0">
                                    <Link className="text-black flex justify-between w-full" href="/women/dresses">Dresses</Link>
                                </li>
                                <li className="lg:mx-3 p-0" onMouseEnter={() => {
                                    if (window.outerWidth >= 1024) {
                                        setClothing(true)
                                    }
                                }}
                                    onMouseLeave={() => {
                                        if (window.outerWidth >= 1024) {
                                            setClothing(false)
                                        }
                                    }}>
                                    <Link className="text-black flex justify-between w-full" href="/women/clothing" onClick={(e) => {
                                        e.preventDefault()
                                        setClothing(!isClothing)
                                    }}>Clothing
                                        <View className="lg:hidden">
                                            <FaChevronRight />
                                        </View>
                                    </Link>

                                    <div className={`bg-white lg:bg-[#f5f5f5] absolute top-0 lg:top-[100%] left-0 z-50 w-full bg-light-grey ${isClothing ? "" : "hidden"}`}>
                                        <div className="px-6 lg:flex sm:justify-center">
                                            <div className="w-full my-container">
                                                <Pressable className="lg:hidden d-flex align-items-center justify-content-start pb-3 mb-3 d-block text-black flex items-center gap-3 mt-9" onPress={() => { setClothing(false) }}>
                                                    <Image width={24} alt='' height={24} src="https://res.cloudinary.com/dcaptnlz3/image/asset/chevron-left-eef602dd7d139738a76c90e8386c4564.svg" />
                                                    <Text>Back</Text>
                                                </Pressable>
                                                <div>
                                                    <div>
                                                        <div>
                                                            <div className="font-medium py-4">
                                                                <div className="py-4">
                                                                    <Link className="uppercase text-black" href="/women/clothing">Categories</Link>
                                                                </div>
                                                                <div>
                                                                    <ul className="flex flex-col gap-6 lg:gap-0">
                                                                        <li className="border-b pb-3 lg:border-0"><Link className="text-black" href="/women/dresses">Dresses</Link></li>
                                                                        <li className="border-b pb-3 lg:border-0"><Link className="text-black" href="/women/tops">Tops</Link></li>
                                                                        <li className="border-b pb-3 lg:border-0"><Link className="text-black" href="/women/skirts">Skirts</Link></li>
                                                                        <li className="border-b pb-3 lg:border-0"><Link className="text-black" href="/women/trousers">Trousers</Link></li>
                                                                        <li className="border-b pb-3 lg:border-0"><Link className="text-black" href="/women/jumpsuits &amp; playsuits">Jumpsuits &amp; Playsuits</Link></li>
                                                                        <li className="border-b pb-3 lg:border-0"><Link className="text-black" href="/women/skiwear">Skiwear</Link></li>
                                                                        <li className="border-b pb-3 lg:border-0"><Link className="text-black" href="/women/maternity">Maternity</Link></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </li>
                                <li className="lg:mx-3 p-0">
                                    <Link className="text-black flex justify-between w-full" href="/women/handbags">Handbags</Link>
                                </li>
                                <li className="lg:mx-3 p-0">
                                    <Link className="text-black flex justify-between w-full" href="/women/accessories">Accessories</Link>
                                </li>
                                <li className="lg:mx-3 p-0">
                                    <Link className="text-black flex justify-between w-full" href="/women/designers">Designers</Link>
                                </li>
                                <li className="lg:mx-3 p-0">
                                    <Link className="text-black flex justify-between w-full" href="/edits">Edits</Link>
                                </li>
                                <li className="lg:mx-3 p-0">
                                    <Link className="text-black flex justify-between w-full" href="/women/resale">Resale</Link>
                                </li>
                                <li className="lg:mx-3 p-0">
                                    <Link className="text-black flex justify-between w-full" href="/how-it-works">How It Works</Link>
                                </li>
                                <li className="lg:mx-3 p-0">
                                    <Link className="text-black flex justify-between w-full" target="_blank" href="https://www.johnlewis.com">Johnlewis.com</Link>
                                </li>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header