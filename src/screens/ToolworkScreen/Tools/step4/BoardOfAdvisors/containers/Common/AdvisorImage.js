// @flow
import { mapProps }       from 'recompose'
import { LifeCategories } from '2020_forms/forms/content'
import { displayBase64 }  from '2020_utils/formatHelpers'
import AdvisorImage       from '../../components/Common/AdvisorImage'

type Props = {
  advisor: {
    category: string,
    name: string,
    id: string,
    contact: any | null,
  },
}

const LIFE_CATEGORIES_TO_SVG_MAP = {
  [LifeCategories.Spirituality.key]: 'LifeCategoriesS',
  [LifeCategories.CoreWork.key]: 'LifeCategoriesCW',
  [LifeCategories.SpecialProjects.key]: 'LifeCategoriesSP',
  [LifeCategories.SkillsAndEducation.key]: 'LifeCategoriesSE',
  [LifeCategories.PersonalLife.key]: 'LifeCategoriesPL',
  [LifeCategories.BasicNeeds.key]: 'LifeCategoriesBN',
  [LifeCategories.HealthAndWellness.key]: 'LifeCategoriesHW',
}

const mapCategoryToSVG = (category: string) => {
  const cat = Object.values(LifeCategories).find(
    cat => cat.key === category || cat.title === category
  )
  return LIFE_CATEGORIES_TO_SVG_MAP[cat.key]
}

const merge = (props: Props) => {
  const { advisor } = props
  const { contact, category } = advisor
  const hasContact = !!contact
  const contactHasImage =
    hasContact && contact.contact && contact.contact.imageDataAvailable
  const imageSource = contactHasImage
    ? { uri: displayBase64(contact.contact.thumbnailImageData) }
    : null
  const svg = mapCategoryToSVG(category)

  return {
    imageSource,
    svg,
  }
}

export default mapProps(merge)(AdvisorImage)
