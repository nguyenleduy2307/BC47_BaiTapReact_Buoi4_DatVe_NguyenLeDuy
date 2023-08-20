import React from 'react'
import ChairList from './ChairList'
import Result from './Result'
import data from './Data.json'
import Modal from './Modal'

const BaiTapDatVe = () => {
  return (
    <div className='container mt-3 mb-5'>
      <h3 className='text-center mb-4 text-danger border-bottom border-danger'>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h3>

      <div className="row">
        <div className="col-8">
          <ChairList data={data} />
        </div>
        <div className="col-4">
          <Result />
        </div>
      </div>

      <Modal/>
    </div>
  )
}

export default BaiTapDatVe