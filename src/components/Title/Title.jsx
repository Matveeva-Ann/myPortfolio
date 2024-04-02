import './Title.scss';

export default function Title ({children, textAline='left'}) {

  return(
    <h2 className="title" style={{textAlign: `${textAline}`}}>{children}</h2>
  )
}