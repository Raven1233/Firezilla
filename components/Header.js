import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import {MicrophoneIcon, SearchIcon, XIcon} from "@heroicons/react/solid";
import Avatar from "../components/Avatar"
import HeaderOptions from "./HeaderOptions";
function Header() {

    const router = useRouter();
    const searchInputRef = useRef();

    const search=(e)=>{
        e.preventDefault();
        const term = searchInputRef.current.value;

        if(!term) return;

        router.push(`/search?term=${term}`);
    }

    return (
        <header className="sticky top-0 bg-blue-300 bg-gradient-to-r from-blue-300 to-green-300">
            <div className="flex w-full p-6 items-center">
                <Image 
                    src="https://raw.githubusercontent.com/Raven1233/Projectwork/main/logo.svg"
                    height={90}
                    width={100}
                    onClick={()=> router.push("/")}
                    className="cursor-pointer"
                />
                <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border 
                border-blue-400 rounded-full hover:shadow-lg 
                focus-within:shadow-lg max-w-3xl items-center">
                    <input 
                        ref={searchInputRef} 
                        className="flex-grow w-4 focus:outline-none bg-transparent" 
                        type="text" 
                    />
                    <XIcon 
                        className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition
                        duration-100 transform hover:scale-125"
                        onClick={()=>(searchInputRef.current.value="")}
                    />
                    <MicrophoneIcon 
                        className="mr-3 h-6 hidden sm:inline-flex
                        text-blue-500 border-l-2 pl-4 border-gray-300"
                    />
                    <SearchIcon 
                        className="h-6 text-blue-500 hidden sm:inline-flex"
                    />
                    <button hidden type="submit" onClick={search} ></button>
                </form>
                <Avatar 
                    className="ml-auto" 
                    url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLaoiVChJYmLSdfsWtgKL_deeSguvjFYeHqw&usqp=CAU" 
                />
            </div>
           
            <HeaderOptions />

        </header>
    )
}

export default Header
