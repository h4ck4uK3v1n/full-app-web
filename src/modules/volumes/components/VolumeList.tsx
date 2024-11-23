import React from 'react'
import type { Volume, VolumesProps } from '../types'
import { Volume as VolumeUi } from './Volume'

export function VolumeList({ volumeList }: VolumesProps) {
    return (
        <div className="max-w-6xl px-6 py-10 mx-auto bg-transparent">

            <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                Volumenes de prueba
            </h1>

            <div className="grid grid-cols-2 space-y-14">
                {
                    volumeList.map(({ _id, article, date, portrait, title, year_volume }: Volume) => (
                        <VolumeUi key={_id} _id={_id} article={article} date={date} portrait={portrait} title={title} year_volume={year_volume} />
                    ))
                }
            </div>
        </div>
    )
}