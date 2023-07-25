import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {codeInput} from '@sanity/code-input'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Studio',

  projectId: 'jwuld41g',
  dataset: 'production',

  plugins: [deskTool(), codeInput(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
