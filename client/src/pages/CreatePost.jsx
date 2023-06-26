import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

import {preview} from '../assets';
import {getRandomPrompt} from '../utils';
import { FormField, Loader } from '../components';


const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name:'',
    prompt:'',
    photo:'',
  });
  const [generatingImg, setgeneratingImg] = useState(false); //while making contact to api and setting the image
  const [loading, setLoading] = useState(false); //general loading

  const  //this function will run when we click submit button
  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w [500px]">Create imaginative and visually stunning images generated through DALL-E AI and share them with community</p>
      </div>
      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>

      </form>

    </section>
  )
}

export default CreatePost