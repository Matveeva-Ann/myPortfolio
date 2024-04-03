import SkeletonElem from "./SkeletonElem";
import "./Skeleton.scss";

export default function SkeletonAbout() {
  return (
    <div className="skeleton__wrapper">
      <div className="skeleton__content">
        <div className="skeleton__spaceShort"></div>
        <SkeletonElem type="title__big"></SkeletonElem>
        <div className="skeleton__flexBetween">
          <div className="skeletonHome__textWrapper">
            <SkeletonElem type="title__short"></SkeletonElem>
            <SkeletonElem type="text__middle"></SkeletonElem>
            <SkeletonElem type="text__middle"></SkeletonElem>
            <SkeletonElem type="text__middle"></SkeletonElem>
            <SkeletonElem type="text__middle"></SkeletonElem>
            <SkeletonElem type="text__middle"></SkeletonElem>
            <SkeletonElem type="text__middle"></SkeletonElem>
          </div>
          <SkeletonElem type="img__big"></SkeletonElem>
        </div>
        <div className="skeleton__space"></div>
        <SkeletonElem type="title__short"></SkeletonElem>
        <SkeletonElem type='skeleton__oval'></SkeletonElem>
      </div>
    </div>
  );
}
