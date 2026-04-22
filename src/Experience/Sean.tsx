import React, { Suspense } from 'react'
import Model from './models/MyModel'
import { AmbientLight } from 'three'

const Sean = () => {
  return (
    <>
      <Suspense>
        <ambientLight intensity={0.01} />
        <Model />
      </Suspense>

    </>
  )
}

export default Sean