import AdvisorLog   from '../../components/AdvisorScreen/AdvisorLog'
import { mapProps } from 'recompose'

type AdvisorData = {
  advisorId: string,
  reflections: Array<any>,
}

type Props = {
  advisor: {
    id: string,
  },
  data: {
    value: Array<AdvisorData>,
  },
}

const handleReflections = ({ advisor, data }: Props): Array<any> => {
  if (!data || !data.value) return []
  const advisorInStore = data.value.find(adv => adv.advisorId === advisor.id)
  if (!advisorInStore) return []
  const reflections = advisorInStore.reflections || []
  return reflections
}

const merge = (props: Props) => {
  const reflections = handleReflections(props)
  return {
    reflections,
  }
}

export default mapProps(merge)(AdvisorLog)
