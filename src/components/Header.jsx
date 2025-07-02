
const Header = () => {
  const today = new Date()
  const month = today.getMonth() + 1
  const date = today.getDate()

  const weekdayIndex = today.getDay()
  const weekDayArray = ["일", "월", "화", "수", "목", "금", "토"]
  return (
    <header>
      <h1>
        할 것
      </h1>
      <p>
        {`${month}월 ${date}일 (${weekDayArray[weekdayIndex]})`}
      </p>
    </header>
  )
}

export default Header