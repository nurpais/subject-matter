import { type SchemaTypeDefinition } from 'sanity'
import { about } from './schemas/about'
import { workTag } from './schemas/workTag'
import { work } from './schemas/work'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [about, workTag, work],
}
