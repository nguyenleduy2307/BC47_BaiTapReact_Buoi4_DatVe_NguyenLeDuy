import React from 'react'
import './style.scss'
import {useDispatch, useSelector} from 'react-redux'
import { baiTapMovieBookingAction } from '../Store/slice'
import cn from 'classnames'

const Chair = ({ghe, className}) => {
  const dispatch = useDispatch ()

  const {chairBooking, chairBooked} = useSelector(state => state.baiTapMovie)
  console.log("chairBooked: ", chairBooked);
  console.log("chairBooking: ", chairBooking);

  return (
    <div 
      className={cn('Chair', className,  {
        booking: chairBooking.find(item => item.soGhe === ghe.soGhe),
        booked: chairBooked.find(item => item.soGhe === ghe.soGhe)
      })}
      onClick={() => {
        dispatch(baiTapMovieBookingAction.setChairBooking(ghe))
      }}
    >{ghe.soGhe}
    </div>
  )
}

export default Chair