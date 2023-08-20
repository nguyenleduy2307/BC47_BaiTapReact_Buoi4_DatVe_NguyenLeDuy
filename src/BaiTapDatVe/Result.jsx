import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { baiTapMovieBookingAction } from '../Store/slice'

const Result = () => {
  const { chairBooking, chairBooked } = useSelector(state => state.baiTapMovie)
  const dispatch = useDispatch()

  const gheConLai = 120 - chairBooking.length - chairBooked.length;

  return (
    <div className='ms-2 ps-4 pb-3 border-start border-primary'>
      <p className='text-center fs-5 fw-bold mt-3'>DANH SÁCH GHẾ BẠN CHỌN</p>

      <div>
        <div className='d-flex'>
          <div className="Chair booked"></div>
          <p className='mb-0 mt-3 ms-3'>Ghế đã đặt ({chairBooked.length})</p>
        </div>
        <div className='d-flex'>
          <div className="Chair booking"></div>
          <p className='mb-0 mt-3 ms-3'>Ghế đang chọn ({chairBooking.length})</p>
        </div>
        <div className='d-flex'>
          <div className="Chair"></div>
          <p className='mb-0 mt-3 ms-3'>Ghế chưa đặt ({gheConLai})</p>
        </div>
      </div>

      <table className='table table-bordered border-primary mt-4'>
        <thead>
          <tr>
            <th>Số ghế</th>
            <th>Giá</th>
            <th>Hủy</th>
          </tr>
        </thead>
        <tbody>
          {
            chairBooking.map(item => (
              <tr key={item.soGhe}>
                <td>{item.soGhe}</td>
                <td>{item.gia.toLocaleString()} VND</td>
                <td
                  className='fw-bold text-danger'
                  style={{
                    cursor: 'pointer'
                  }}
                  onClick={() => {
                    dispatch(baiTapMovieBookingAction.setChairBooking(item))
                  }}
                >X</td>
              </tr>
            ))
          }

          <tr>
            <td className='fw-bold text-primary'>Tổng tiền</td>
            <td className='fw-bold text-primary'>
              {
                chairBooking.reduce((tong, item) => {
                  return (tong += item.gia)
                }, 0).toLocaleString()
              } VND
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <button
        className='btn btn-success'
        data-bs-toggle='modal'
        data-bs-target='#exampleModal'
        onClick={() => {
          dispatch(baiTapMovieBookingAction.setChairBooked())
        }}
      >Thanh toán</button>


    </div>
  )
}

export default Result