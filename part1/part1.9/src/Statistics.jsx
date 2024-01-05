const Statistics = ({good, bad, neutral, total}) => {

  return (
    <>
      { total > 0 ? (
        <>
          <p>{`good ${good}`}</p>
          <p>{`neutral ${neutral}`}</p>
          <p>{`bad ${bad}`}</p>
          <p>{`total ${total}`}</p>
          <p>{`average ${(good - bad)/total}`}</p>
          <p>{`percent positive ${good/total}%`}</p>
        </>
        ) : <p>No feedback given</p>
      }
    </>
  )
}

export default Statistics