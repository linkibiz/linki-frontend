// import { useBearStore } from '@/store/bearstore';
// import { CircularProgress } from '@mui/material';
// import { useFormik } from 'formik'
// import React from 'react'
// import PinInput from 'react-pin-input'

// function delay(time){
// 	return new Promise(resolve => setTimeout(resolve, time));
// }


// const Pin = () => {
//   const authtrue = useBearStore((state) => state.authtrue)
//     const formik = useFormik({
//         initialValues: {
//           Pin: '',
//         },
//         onSubmit: async (values) => {
//           await delay(3000)
//           if (values.Pin==4444) {
//             authtrue()
//           }
//         },
//       });

      

//   return (

//     <div className='bg-[#BEBEBE] h-full min-h-screen flex justify-center py-4 '>
//     <div className='bg-white w-[395px] items-center justify-center flex flex-col min-h-screen h-full rounded-xl my-4'>
//     <p className=' text-xl '>Introduce tu pin</p>
//     <form onSubmit={formik.handleSubmit}>
//         <PinInput 
//             length={4} 
//             initialValue=""
//             secret
//             secretDelay={100} 
//             onChange={(val,index)=>formik.setFieldValue("Pin",val)} 
//             type="numeric" 
//             inputMode="number"
//             style={{padding: '10px'}}  
//             inputStyle={{borderColor: '#1180C2'}}
//             onComplete={(value, index) => {}}
//             autoSelect={true}
//             regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
//             />
//             <div className='flex items-center justify-center' >
//             {formik.isSubmitting?<CircularProgress/>:<button type='submit' className='bg-[#1180C2] my-4 text-white px-20  rounded-full'>Enviar</button>}
            
//             </div>
            
//     </form>
//     <img src='../../mmglogo.jpeg'></img>
//     </div>

    

//     </div>

//   )
// }

// export default Pin