const Statistics = ({good, bad, neutral, total}) => {

  return (
    <>
      <p>{`good ${good}`}</p>
      <p>{`neutral ${neutral}`}</p>
      <p>{`bad ${bad}`}</p>
      <p>{`total ${total}`}</p>
      <p>{`average ${(good - bad)/total}`}</p>
      <p>{`percent positive ${good/total}%`}</p>
    </>
  )
}

export default Statistics