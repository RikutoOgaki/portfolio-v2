'use client'

import style from '@/styles/components/common/cube.module.scss'

export function Cube() {

    const faces = [1, 2, 3, 4, 5, 6]

    const trouts = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <>
            <div className={style.cubeWrap}>
                {faces.map((v, idx) =>
                    <div
                        key={idx}
                        className={v === 1 ? style.oneFaces
                            : v === 2 ? style.twoFaces
                                : v === 3 ? style.threeFaces
                                    : v === 4 ? style.fourFaces
                                        : v === 5 ? style.fiveFaces
                                            : v === 6 ? style.sixFaces
                                                : undefined}>
                        {trouts.map((x, idx2) =>
                            <div key={idx2} className={
                                x === 1 ? style.subCubeRed
                                    : x === 2 ? style.subCubeBlue
                                        : x === 3 ? style.subCubeGreen
                                            : x === 4 ? style.subCubeOrenge
                                                : x === 5 ? style.subCubeWhite
                                                    : x === 6 ? style.subCubeWhite
                                                        : x === 7 ? style.subCubeYellow
                                                            : x === 8 ? style.subCubeGreen
                                                                : x === 9 ? style.subCubeYellow :
                                                                    style.subCubeBox}>

                            </div>
                        )}
                    </div>
                )}
            </div >
        </>
    )
}