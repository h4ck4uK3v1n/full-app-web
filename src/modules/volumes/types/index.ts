export interface Volume {
    _id: string;
    title: string
    article: string
    year_volume: string
    date: Date
    portrait: string
}

export interface VolumePost{
    title: string
    article: string
    year_volume: string
    file: File
}

export interface VolumesProps {
    volumeList: Volume[]
}

export interface BaseVolumeResponse {
    status: number;
    data: VolumesProps;
    error: Error;
}