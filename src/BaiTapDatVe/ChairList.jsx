import React from 'react'
import Chair from './Chair'
import cn from 'classnames'

const ChairList = ({data}) => {
  return (
    <div>

      <p className='text-center fw-bold fs-5 p-3 bg-info bg-opacity-10 border border-info rounded'>MÀN HÌNH</p>

      {
        data.map(hangGhe => (
          <div
            key={hangGhe.hang}
            className='d-flex gap-3'
            style={{
              justifyContent: 'center',
              alignContent: 'center'
            }}
          >
            <p className='mt-3 mb-0 fw-bold fs-5' style={{width: 30}}>{hangGhe.hang}</p>

            {
              hangGhe.danhSachGhe.map(ghe => (
                <Chair className={cn({disabled: !hangGhe.hang})} ghe={ghe} key={ghe.soGhe}/>
              ))
            }

          </div>
        ))
      }
    </div>
  )
}

export default ChairList