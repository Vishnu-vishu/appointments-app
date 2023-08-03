// Write your code here
import './index.css'

const AppointmentIem = props => {
    const {appointmentDetails, toggleIsStarrted} = props
    const {id, title, date, isStarred} = appointmentDetails
    const starImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

    const onClickStar = () => {
        toggleIsStarrted(id)
    }

    return (
        <li className="appointment-item">
        <div className="header-container">
        <p className="title">{title}</p>
        <button
        type="button"
        data-testid="star"
        className="star-button"
        onClick={onClickStar}
        >
          <img src={starImgUrl} className="start" alt="star" />
        </button>
        </div>
        <p className="date">Date: {date}</p>
        </li>
    )
}

export default AppointmentIem
