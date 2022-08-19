import React, { ReactComponentElement, ReactElement } from 'react'
import { BsCameraVideo, BsPlusLg, BsThreeDots } from 'react-icons/bs'
import { IoCallOutline } from 'react-icons/io5'
import { VscSearch } from 'react-icons/vsc'
import { TbMinusVertical } from 'react-icons/tb'


interface Props {
  photo?: string
  name?: string
  title?: string
  iconButtons?: ReactElement[]
}

const imgUrl = 'https://img.freepik.com/photos-gratuite/portrait-jeune-femme-heureuse-regardant-camera_23-2147892777.jpg?w=1380&t=st=1660654422~exp=1660655022~hmac=b2b9b675ed7bc34dba0e7437300c4a6319ef2b55050c6f3e787d833204ef8f01'

const Toolbar = ({ photo, name, title, iconButtons }: Props) => {
  return (
    <div className='flex flex-row justify-between p-2 bg-gray-100 w-full relative'>
      <img className='w-10 h-8 rounded-full object-cover mr-2'
        src={imgUrl}
        alt="profile"
      />

      <div className='flex flex-row justify-between space-x-4 pr-2'>
        {
          iconButtons?.map(icon => (<button className='hover:bg-white rounded-full p-1'>{icon}</button> ))
        }
      </div>


    </div>


  )
}

export default Toolbar