import notfound from '../images/notfound.svg';

export default function NotFound() {
    return (
        <div className="container">
            <h2 className="title">ไม่พบหน้าเว็ป (404 Not Found)</h2>
            <img src={notfound} alt="notfound" />
        </div>
    )
}