import "./Skeleton.scss";
import SkeletonElem from "./SkeletonElem";

export default function SkeletonProjects() {
  return (
    <div className="skeleton__wrapper">
      <div className="skeleton__content">
        <div className="skeleton__space"></div>
        <SkeletonElem type="title__short"></SkeletonElem>
        <div className="skeleton__spaceShort"></div>
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
        <div className="skeleton__space"></div>
        <div className="skeleton__flexBetween">
          <div className="skeletonHome__textWrapper">
            <SkeletonElem type="text__little"></SkeletonElem>
            <SkeletonElem type="text__little"></SkeletonElem>
            <SkeletonElem type="text__little"></SkeletonElem>
            <SkeletonElem type="text__little"></SkeletonElem>
          </div>
          <SkeletonElem type="img__rectangle"></SkeletonElem>
        </div>
      </div>
    </div>
  );
}
