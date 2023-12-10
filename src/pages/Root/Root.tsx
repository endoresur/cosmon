import { cc } from '@/utils/combineClasses'
import styles from './styles.module.scss'

interface Props {
  className?: string
}

const Root = ({ className }: Props) => {
  return <div className={cc(styles.rootRoot, className)}>Root component</div>
}


export default Root
