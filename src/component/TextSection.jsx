import React from 'react'

const TextSection = ({ title, content }) => {
  return (
    <>
      {title && (
        <div class="text-gray-200 mb-4 tracking-wide text-xl font-bold">{title}</div>

      )}
      <div class="text-gray-300 mb-4 tracking-wide">{content}</div>
    </>
  )
}

export default TextSection