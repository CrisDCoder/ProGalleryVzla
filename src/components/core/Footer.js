import React from 'react'
import { APP_NAME } from '../../config/globals'

export default function Footer() {
  return (
    <footer className='py-5'>
        <div className="content-footer">
                <div className="container">
                <p className="mb-0 text-center">
                    <strong>{APP_NAME} &copy;</strong> (Todos los derechos reservaos)
                </p>
            </div>
        </div>
    </footer>
  )
}
