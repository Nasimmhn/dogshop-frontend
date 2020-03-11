// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'

// import { AuthUser } from 'reducers/userdata'



// export const MemberArea = () => {
//   const [data, setData] = useState('')
//   const accessToken = useSelector((state) => state.userdata.isLoggedin)
//   const isLoggedin = useSelector((state) => state.userdata.isLoggedin)

//   const dispatch = useDispatch()
//   dispatch(AuthUser(SetAccessToken, setData))


//   return (
//     <div className="logedin-area">
//       {isLoggedin &&
//         <>
//           <p>welcome dear user, here is you info</p>
//           <p>{data}</p>
//         </>
//       }


//       <button>
//         Sign out
//       </button>
//     </div>
//   )
// }
