import { relative } from 'path'
import React from 'react'

interface MapProps {}

const Map: React.FC<MapProps> = () => {
  return (
    <>
      <h1
        style={{
          color: 'purple',
          marginBottom: '50px',
        }}
      >
        Де взагалі взяти цей зефір?
      </h1>
      <div style={{ width: '100%', height: '50%' }}>
        <iframe
          src='https://www.google.com/maps/d/u/0/embed?mid=1Wzkg8px2nh9clcyZFbfSSLOhv_Tp9jI&ehbc=2E312F&noprof=1'
          title='map'
          style={{
            width: '100%',
            height: '100%',
            border: 0,
            position: 'relative',
            // top: '-60px',
          }}
          allowFullScreen
        ></iframe>
      </div>
    </>
  )
}

export default Map
