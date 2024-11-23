import { getVolumes } from "../actions/get-volumes";
import { VolumeList } from "./VolumeList";

export async function Volumes() {
    const { data, error, status } = await getVolumes()
    
    if (error.message) {
        return (
            <div>{error.message}</div>
        )
    }
    if (status >= 400) {
        return (
            <div>Something went wrong</div>
        )
    }
    return <VolumeList volumeList={data} />
}
