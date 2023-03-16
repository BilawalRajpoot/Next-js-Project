import React from 'react'
import { Input, FormControl, FormLabel, FormHelperText } from '@chakra-ui/react'
import  {useFormik}  from 'formik'
import axios from 'axios'
import { headers } from '../../../next.config'

const initialValues = {
  email:'', password: ''
}

const Test = () => {
  const {values , handleChange , handleBlur , handleSubmit } =  useFormik({
    initialValues: initialValues, 
    onSubmit: async (values) => {
      if (!values.email || !values.password) {
        alert("Fill input fields")
      }
      
      
      else {
        axios.post('http://localhost:1337/auth/local/register' ) 
        .then((res)=>{
          // console.log(values)
          console.log("Your response", res.data)
        })
        .catch(err=>{
          console.log('Your error', err)
        })
      }
      
      
    }  
  })
  
  return (
    <>
   <form onSubmit={handleSubmit}>
     <FormControl>
      <FormLabel>Email address</FormLabel>
      <Input w={290} placeholder='Email' name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
      <FormHelperText>We will never share your email.</FormHelperText>
      <FormLabel>Password</FormLabel>
      <Input w={290} placeholder='Password' name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} />
      <FormHelperText>We will never share your password.</FormHelperText>
      <button type='submit' className= 'w-44 border-sky-100 border '>
        Submit
      </button>
     </FormControl>
   </form>
     
   </>
  )
}

export default Test
