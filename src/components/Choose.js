import { Children } from 'react'

const Choose = ({ children }) => {
  const arrayOfChildren = Children.toArray(children)

  const allowedChildren = arrayOfChildren.filter(child => child.type.name === 'When')

  if (allowedChildren.length === 0) {
    throw new Error(`You must have at least one 
      <When condition={/* your condition */>}/> statement 
      when you use the <Choose/>`)
  }
  const otherwise = arrayOfChildren.find(child => child.type.name === 'Otherwise')

  if (otherwise && allowedChildren.every(child => !child.props.condition)) return otherwise

  return allowedChildren.map(child => child)
}

export default Choose
