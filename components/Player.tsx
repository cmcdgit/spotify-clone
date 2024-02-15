'use client';

import useGetSongById from '@/hooks/useGetSongById';
import useLoadSongUrl from '@/hooks/useLoadSongUrl';
import usePlayer from '@/hooks/usePlayer';
import PlayerContent from './PlayerContent';

const Player = () => {
  const player = usePlayer();
  // this fetch something from the client component and is different to previous
  const { song } = useGetSongById(player.activeId);

  // adding exlamation as song might be undefined
  const songUrl = useLoadSongUrl(song!);

  if (!song || !songUrl || !player.activeId) {
    return null;
  }

  return (
    <div
      className="
                fixed
                bottom-0
                bg-black
                w-full
                py-2
                h-[80px]
                px-4
            "
    >
      <PlayerContent
        // using key like this allows for the player to be destroyed and a new one re-rendered
        // - allows users to skip to next song - using this trick as the hook to play the songs doesn't support dynamic and modular URL changes
        key={songUrl}
        song={song}
        songUrl={songUrl}
      />
    </div>
  );
};

export default Player;
