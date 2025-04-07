import React from 'react'

const Footer = () => {
    const date = new Date();
  return (
    <footer className="flex justify-center p-4 bg-black text-white mt-auto">
      {date.getFullYear()} Min Shwe Hin Thar
    </footer>
  )
}

export default Footer
