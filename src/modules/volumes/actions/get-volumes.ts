import { fetcher, FetcherProps } from "@/utils/fetcher";
import { BaseVolumeResponse, Volume, VolumePost } from "../types";

export async function getVolumes() {
    const props: FetcherProps<VolumePost> = {
        url: '/volumes',
        method: 'GET',
    }

    const { data, error, status } = await fetcher<BaseVolumeResponse, VolumePost, Error, Volume>(props)
    console.log(status);
    

    if (error.message) {
        return {
            status: status,
            data: [],
            error: error
        }
    }

    return {
        status: status,
        data: data.volumeList,
        error: error
    }
}