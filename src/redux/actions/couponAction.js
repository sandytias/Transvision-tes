import axios from "axios"


export const getCoupon = () => {
    return (dispatch) => {
        axios.get(`${process.env.REACT_APP_COUPON}`)
            .then((data => {
                // console.log('data', data.data.result)
                dispatch({
                    type: "SET_COUPON",
                    coupon: data.data.result
                })
            }))
    }
}