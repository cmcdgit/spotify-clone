import { Song } from "@/types"
import { useSupabaseClient } from "@supabase/auth-helpers-react"

const useLoadSongUrl = (song: Song) => {

    // use sessionContext contains supabaseClient - 
    // more correct would be to use authentication built into sessionContext
    const supabaseClient = useSupabaseClient();

    if (!song) {
        return '';
    }

    const { data: songData } = supabaseClient
        .storage
        .from('songs')
        .getPublicUrl(song.song_path)

    return songData.publicUrl;
}

export default useLoadSongUrl