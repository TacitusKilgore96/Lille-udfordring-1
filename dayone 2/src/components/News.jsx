import React from 'react'
import Newsletter from './Newsletter'

const News = ( props ) => {
  return (
    <div id='News'>
      <h1>{ props.newsTitle }</h1>
      <p>{ props.newsInfo }</p>
    </div>
  )
}

export default News
