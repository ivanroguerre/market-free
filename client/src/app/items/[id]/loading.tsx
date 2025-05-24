import styles from "./page.module.scss";
import loadingStyles from "./loading.module.scss";

export default function Loading() {
  return (
    <div className={styles.page}>
      <div className={loadingStyles.breadcrumbSkeleton}>
        <div className={`${loadingStyles.skeleton} ${loadingStyles.breadcrumbItemSkeleton}`} />
      </div>
      <div className={loadingStyles.detailContainer}>
        <div className={loadingStyles.imageSection}>
          <div className={`${loadingStyles.skeleton} ${loadingStyles.mainImageSkeleton}`} />
          <div className={loadingStyles.thumbnailContainer}>
            {[...Array(4)].map((_, index) => (
              <div key={index} className={`${loadingStyles.skeleton} ${loadingStyles.thumbnailSkeleton}`} />
            ))}
          </div>
        </div>
        <div className={loadingStyles.infoSection}>
          <div className={`${loadingStyles.skeleton} ${loadingStyles.conditionSkeleton}`} />
          <div className={`${loadingStyles.skeleton} ${loadingStyles.titleSkeleton}`} />
          <div className={`${loadingStyles.skeleton} ${loadingStyles.priceSkeleton}`} />
          <div className={`${loadingStyles.skeleton} ${loadingStyles.buttonSkeleton}`} />
          <div className={`${loadingStyles.skeleton} ${loadingStyles.descriptionSkeleton}`} />
        </div>
      </div>
    </div>
  );
} 