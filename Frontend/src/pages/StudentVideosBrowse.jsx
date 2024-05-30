import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import axios from 'axios'
import TimerNavbar from '../components/TimerNavbar'

const StudentVideosBrowse = () => {

  return (
    <div className=''>
        <div>
            <TimerNavbar/>
        </div>
        <div className='flex justify-around'>
        <div className='m-5 space-y-3'>
            <video width="400" height="230" controls src="https://focus-flow-uploads.s3.eu-north-1.amazonaws.com/uploads/1716963330982-guts-rage-berserker-armor-moewalls-com.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA272DM3HYXSNOIGH2%2F20240529%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20240529T061842Z&X-Amz-Expires=900&X-Amz-Signature=ff6870ff7d71fb10153f0ba0129c51c1ad3a9b3ade2c09341fd9778e2235856a&X-Amz-SignedHeaders=host&x-id=GetObject" type="video/mp4">
            </video>
            <video width="400" height="300" controls src="https://focus-flow-uploads.s3.eu-north-1.amazonaws.com/uploads/1716963330982-guts-rage-berserker-armor-moewalls-com.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA272DM3HYXSNOIGH2%2F20240529%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20240529T061842Z&X-Amz-Expires=900&X-Amz-Signature=ff6870ff7d71fb10153f0ba0129c51c1ad3a9b3ade2c09341fd9778e2235856a&X-Amz-SignedHeaders=host&x-id=GetObject" type="video/mp4">
            </video>
            <video width="400" height="300" controls src="https://focus-flow-uploads.s3.eu-north-1.amazonaws.com/uploads/1716963330982-guts-rage-berserker-armor-moewalls-com.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA272DM3HYXSNOIGH2%2F20240529%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20240529T061842Z&X-Amz-Expires=900&X-Amz-Signature=ff6870ff7d71fb10153f0ba0129c51c1ad3a9b3ade2c09341fd9778e2235856a&X-Amz-SignedHeaders=host&x-id=GetObject" type="video/mp4">
            </video>
        </div>
        <div className='m-5 space-y-3'>
            <video width="400" height="270" controls src="https://focus-flow-uploads.s3.eu-north-1.amazonaws.com/uploads/1716963330982-guts-rage-berserker-armor-moewalls-com.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA272DM3HYXSNOIGH2%2F20240529%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20240529T061842Z&X-Amz-Expires=900&X-Amz-Signature=ff6870ff7d71fb10153f0ba0129c51c1ad3a9b3ade2c09341fd9778e2235856a&X-Amz-SignedHeaders=host&x-id=GetObject" type="video/mp4">
            </video>
            <video width="400" height="300" controls src="https://focus-flow-uploads.s3.eu-north-1.amazonaws.com/uploads/1716963330982-guts-rage-berserker-armor-moewalls-com.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA272DM3HYXSNOIGH2%2F20240529%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20240529T061842Z&X-Amz-Expires=900&X-Amz-Signature=ff6870ff7d71fb10153f0ba0129c51c1ad3a9b3ade2c09341fd9778e2235856a&X-Amz-SignedHeaders=host&x-id=GetObject" type="video/mp4">
            </video>
            <video width="400" height="300" controls src="https://focus-flow-uploads.s3.eu-north-1.amazonaws.com/uploads/1716963330982-guts-rage-berserker-armor-moewalls-com.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA272DM3HYXSNOIGH2%2F20240529%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20240529T061842Z&X-Amz-Expires=900&X-Amz-Signature=ff6870ff7d71fb10153f0ba0129c51c1ad3a9b3ade2c09341fd9778e2235856a&X-Amz-SignedHeaders=host&x-id=GetObject" type="video/mp4">
            </video>
        </div>
        <div className='m-5 space-y-3'>
            <video width="400" height="270" controls src="https://focus-flow-uploads.s3.eu-north-1.amazonaws.com/uploads/1716963330982-guts-rage-berserker-armor-moewalls-com.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA272DM3HYXSNOIGH2%2F20240529%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20240529T061842Z&X-Amz-Expires=900&X-Amz-Signature=ff6870ff7d71fb10153f0ba0129c51c1ad3a9b3ade2c09341fd9778e2235856a&X-Amz-SignedHeaders=host&x-id=GetObject" type="video/mp4">
            </video>
            <video width="400" height="300" controls src="https://focus-flow-uploads.s3.eu-north-1.amazonaws.com/uploads/1716963330982-guts-rage-berserker-armor-moewalls-com.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA272DM3HYXSNOIGH2%2F20240529%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20240529T061842Z&X-Amz-Expires=900&X-Amz-Signature=ff6870ff7d71fb10153f0ba0129c51c1ad3a9b3ade2c09341fd9778e2235856a&X-Amz-SignedHeaders=host&x-id=GetObject" type="video/mp4">
            </video>
            <video width="400" height="300" controls src="https://focus-flow-uploads.s3.eu-north-1.amazonaws.com/uploads/1716963330982-guts-rage-berserker-armor-moewalls-com.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA272DM3HYXSNOIGH2%2F20240529%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20240529T061842Z&X-Amz-Expires=900&X-Amz-Signature=ff6870ff7d71fb10153f0ba0129c51c1ad3a9b3ade2c09341fd9778e2235856a&X-Amz-SignedHeaders=host&x-id=GetObject" type="video/mp4">
            </video>
        </div>
        </div>
        
    </div>
  )
}

export default StudentVideosBrowse