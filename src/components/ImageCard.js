import React from 'react'

const ImageCard = ({src , user , views, downloads , likes , tags}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">~
      <img src={src} alt="" className="w-full h-[50%]" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {user}
        </div>
        <ul>
          <li>
            <strong>Views : </strong>
            {views}
          </li>
          <li>
            <strong>Downloads : </strong>
            {downloads}
          </li>
          <li>
            <strong>Likes : </strong>
            {likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag , index)=>(

        <span key={index} className="inline-block cursor-pointer hover:bg-gray-300 bg-gray-200 rounded-full px-5 py-2 text-sm font-semibold text-gray-700 mr-2 ">
          {tag}
        </span>
        ))}
        
      </div>
    </div>
  )
}

export default ImageCard