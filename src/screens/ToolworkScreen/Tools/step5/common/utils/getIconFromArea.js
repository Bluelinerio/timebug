import { GoalTypesEnum } from '2020_forms/forms/content'

const GOAL_ICONS = {
  [GoalTypesEnum.ENERGY_AND_TIME]: 'GoalTypesET',
  [GoalTypesEnum.ACHIEVEMENTS_AND_SKILLS]: 'GoalTypesAS',
  [GoalTypesEnum.HEALTH_INDICATORS]: 'GoalTypesHI',
  [GoalTypesEnum.INTERNAL_QUALITIES]: 'GoalTypesIQ',
  [GoalTypesEnum.ENVIRONMENT]: 'GoalTypesPE',
  [GoalTypesEnum.MATERIAL_OUTCOMES]: 'GoalTypesMO',
  [GoalTypesEnum.RELATIONSHIP_QUALITY]: 'GoalTypesRQ',
}

export const getIcon = (areaOfLife: string) => {
  const icon =
    GOAL_ICONS[areaOfLife] || GOAL_ICONS[GoalTypesEnum.ENERGY_AND_TIME]
  return icon
}
