import { type SchemaTypeDefinition } from 'sanity'
import { projectType } from './projectType'
import { serviceType } from './serviceType'
import { testimonialType } from './testimonialType'
import { insightType } from './insightType'
import { siteSettingsType } from './siteSettingsType'
import { globalThemeType } from './globalThemeType'
import { globalSeoType } from './globalSeoType'
import { navigationType } from './navigationType'
import { seoType } from './seoType'
import { heroSectionType } from './heroSectionType'
import { statementSectionType } from './statementSectionType'
import { transmissionsSectionType } from './transmissionsSectionType'
import { servicesSectionType } from './servicesSectionType'
import { processSectionType } from './processSectionType'
import { testimonialsSectionType } from './testimonialsSectionType'
import { controlRoomSectionType } from './controlRoomSectionType'
import { aboutSectionType } from './aboutSectionType'
import { formulaSectionType } from './formulaSectionType'
import { insightsSectionType } from './insightsSectionType'
import { pageType } from './pageType'

export const schemaTypes: SchemaTypeDefinition[] = [
  projectType,
  serviceType,
  testimonialType,
  insightType,
  siteSettingsType,
  globalThemeType,
  globalSeoType,
  navigationType,
  seoType,
  heroSectionType,
  statementSectionType,
  transmissionsSectionType,
  servicesSectionType,
  processSectionType,
  testimonialsSectionType,
  controlRoomSectionType,
  aboutSectionType,
  formulaSectionType,
  insightsSectionType,
  pageType
]
