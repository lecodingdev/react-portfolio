/* eslint-disable react/prop-types */
import urlBuilder from '@sanity/image-url'
import {getImageDimensions} from '@sanity/asset-utils'
import React from 'react'

// Barebones lazy-loaded image component
const SampleImageComponent = ({value}) => {
  const {width, height} = getImageDimensions(value)
  return (
    <img
      src={urlBuilder({ projectId: 'jwuld41g', dataset: 'production' })
        .image(value)
        .width(200)
        .fit('max')
        .auto('format')
        .url()}
      alt={value.alt || ' '}
      loading="lazy"
      style={{
        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  )
}

export default SampleImageComponent;