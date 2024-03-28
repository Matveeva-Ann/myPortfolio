import img from "../../../assets/OIG2-removebg-preview.png";
import "./Banner.scss";

export default function Banner() {
  return (
    <div className="banner__wrapper">
      <img src={img} alt="girl with laptop" className="banner__img" />
      <div className="banner__infoLeft">
        <p className="banner__infoText">
          This is not just an image — it's an interpretation of me by AI through
          its own eyes. It sees me exactly like this!
        </p>
        <svg
          className="banner__arrow"
          xmlns="http://www.w3.org/2000/svg"
          height="10"
          width="70"
          viewBox="0 0 123.85 12.57"
        >
          <path
            d="M60.09.07A261.23,261.23,0,0,0,15.3,5.13C11.35,6.6,1.76,6.93,0,10.5a1.11,1.11,0,0,0,1.36.77C10.8,7.86,20.79,6.15,30.7,4.76l-.3,0c24.23-3.16,49-3.54,73.16.35a154,154,0,0,1,18.85,4.33,1.15,1.15,0,0,0,1.4-.79c-1.66-3.57-13-4.09-17.11-5.53C91.32.38,75.69-.23,60.09.07Z"
            fill="currentColor"
          ></path>
          <path
            d="M109.1.57c-.73,3.33,8.28,4.55,10.41,7.11,1.67,2.26,5.58,2.91,3.95-.75-2.7-2.34-11.21-8.29-14.36-6.36Z"
            fill="currentColor"
          ></path>
          <path
            d="M121.27,6.28C118,7.8,107,7,107.16,11.28c2.2,3.51,11.31-1.23,15.17-1.16,2.49-.63,1.42-4.57-1.06-3.84Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <button className="banner__btnGame">
        Start Mini Game
        <div className="banner__BtnInfo">
          <svg
            className="banner__btnGame--arrow"
            xmlns="http://www.w3.org/2000/svg"
            height="10"
            width="70"
            viewBox="0 0 123.85 12.57"
          >
            <path
              d="M60.09.07A261.23,261.23,0,0,0,15.3,5.13C11.35,6.6,1.76,6.93,0,10.5a1.11,1.11,0,0,0,1.36.77C10.8,7.86,20.79,6.15,30.7,4.76l-.3,0c24.23-3.16,49-3.54,73.16.35a154,154,0,0,1,18.85,4.33,1.15,1.15,0,0,0,1.4-.79c-1.66-3.57-13-4.09-17.11-5.53C91.32.38,75.69-.23,60.09.07Z"
              fill="currentColor"
            ></path>
            <path
              d="M109.1.57c-.73,3.33,8.28,4.55,10.41,7.11,1.67,2.26,5.58,2.91,3.95-.75-2.7-2.34-11.21-8.29-14.36-6.36Z"
              fill="currentColor"
            ></path>
            <path
              d="M121.27,6.28C118,7.8,107,7,107.16,11.28c2.2,3.51,11.31-1.23,15.17-1.16,2.49-.63,1.42-4.57-1.06-3.84Z"
              fill="currentColor"
            ></path>
          </svg>
          <p className="banner__BtnInfoText">Click here</p>
        </div>
      </button>
    </div>
  );
}