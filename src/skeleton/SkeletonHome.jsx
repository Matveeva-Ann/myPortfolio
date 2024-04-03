import "./Skeleton.scss";
import SkeletonElem from "./SkeletonElem";

export default function SkeletonHome() {
  return (
    <div className="skeleton__wrapper">
      <div className="skeleton__content">
        <div className="skeleton__space"></div>
        <div className="skeleton__flexBetween">
          <SkeletonElem type="img__big"></SkeletonElem>
          <div className="skeletonHome__textWrapper">
            <SkeletonElem type="text__middle"></SkeletonElem>
            <SkeletonElem type="text__middle"></SkeletonElem>
            <SkeletonElem type="text__middle"></SkeletonElem>
            <SkeletonElem type="text__middle"></SkeletonElem>
            <SkeletonElem type="text__middle"></SkeletonElem>
            <SkeletonElem type="text__middle"></SkeletonElem>
          </div>
        </div>
        <div className="skeleton__space"></div>
        <SkeletonElem type="title__big"></SkeletonElem>
        <div className="skeleton__flexBetween">
          <div className="skeletonHome__textWrapper">
            <SkeletonElem type="text__little"></SkeletonElem>
            <SkeletonElem type="text__little"></SkeletonElem>
            <SkeletonElem type="text__little"></SkeletonElem>
            <SkeletonElem type="text__little"></SkeletonElem>
          </div>
          <SkeletonElem type="img__rectangle"></SkeletonElem>
        </div>
        <div className="skeleton__space"></div>
        <div className="skeleton__flexBetween">
          <SkeletonElem type="img__rectangle"></SkeletonElem>
          <div className="skeletonHome__textWrapper">
            <SkeletonElem type="text__little"></SkeletonElem>
            <SkeletonElem type="text__little"></SkeletonElem>
            <SkeletonElem type="text__little"></SkeletonElem>
            <SkeletonElem type="text__little"></SkeletonElem>
          </div>
        </div>
      </div>
    </div>
  );
}
