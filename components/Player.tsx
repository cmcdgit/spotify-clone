"use client";

import useGetSongById from "@/hooks/useGetSongById";
import usePlayer from "@/hooks/usePlayer";

const Player = () => {
    const player = usePlayer();
    // this fetch something from the client component and is different to previous
    const { song } = useGetSongById(player.activeId);

    const songUrl = useLoadSongUrl();



    return (
        <div>
            Player
        </div>
    )
}

export default Player