
const Header = () => {
  const today = new Date()
  const month = today.getMonth() + 1
  const date = today.getDate()

  const weekdayIndex = today.getDay()
  const weekDayArray = ["일", "월", "화", "수", "목", "금", "토"]
  return (
    <header>
      <div>
        <h1>
          아주 작은 일
        </h1>
        <p>
          {`${month}월 ${date}일 (${weekDayArray[weekdayIndex]})`}
        </p>
      </div>
    </header>
  )
}

export default Header