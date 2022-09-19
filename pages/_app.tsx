import React, { useEffect, useState } from 'react'
import {AppProps} from 'next/app'
import axios from 'axios'


const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
