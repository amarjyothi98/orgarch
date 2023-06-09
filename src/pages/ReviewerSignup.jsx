import React, { useState } from 'react'
import { reviewerSignup } from '../utils/api'
import {useNavigate} from 'react-router-dom'
function ReviewerSignup() {
    const [form, setForm] = useState({})
    const navigate=useNavigate()
    const handleSubmit = () => {
        var result=reviewerSignup(form);

        if(result==="success"){
            navigate('/reviewer/home')
        }

    }

    return (

        <div className="reviewerSignup">
            <form onSubmit={(e) =>{
            e.preventDefault()
            handleSubmit()
        }}>
            <h1>Welcome Reviewer</h1>
            <input required={true} type="text" placeholder='Full Name' onChange={e => {
                setForm({ ...form, name: e.target.value })
            }} />
            <input required={true} type="email" placeholder='Email' onChange={e => {
                setForm({ ...form, email: e.target.value })
            }} />
            <input required={true} type="text" placeholder='Country' onChange={e => {
                setForm({ ...form, country: e.target.value })
            }} />
            <input required={true} type="phone" placeholder='Phone Number' onChange={e => {
                setForm({ ...form, phone: e.target.value })
            }} />
            <input required={true} type="text" placeholder='Education (e.g. Bachelors in Data Science)' onChange={e => {
                setForm({ ...form, education: e.target.value })
            }} />
            <input required={true} type="text" placeholder='Area of Interest (e.g. Machine Learning)' onChange={e => {
                setForm({ ...form, interest: e.target.value })
            }} />
            <input required={true} type="number" placeholder='Experience (e.g. 2 years) ' onChange={e => {
                setForm({ ...form, experience: e.target.value })
            }} />
            <input required={true} type="password" placeholder='Password (min 6 letters) ' onChange={e => {
                setForm({ ...form, password: e.target.value })
            }} />
            <input required={true} type="password" placeholder='Confirm Password ' onChange={e => {
                setForm({ ...form, confirmpwd: e.target.value })
            }} />

            <button type='submit' disabled={!((form.password) && form.confirmpwd && form.password === form.confirmpwd)}>Submit</button>
        </form>
        </div>
    )
}

export default ReviewerSignup