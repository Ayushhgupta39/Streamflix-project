import React from "react";

import useMovie from "@/hooks/useMovie";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Watch = () => {
    const router = useRouter();

    const { movieId } = router.query;

    const { data } = useMovie(movieId as string);

    // This is a test comment

    return (
        <div className="h-screen w-screen bg-black">
            <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
                <AiOutlineArrowLeft className="text-white" size={40}  />
            </nav>
        </div>
    )
}

export default Watch;