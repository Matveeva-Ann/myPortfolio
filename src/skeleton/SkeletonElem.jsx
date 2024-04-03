import './Skeleton.scss';

export default function SkeletonElem ({type}) {

  return(
    <div className={`skeleton ${type}`}></div>
  )
}