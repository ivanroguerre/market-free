import { Stack, StackItem } from "@/components/layout";
import styles from "./page.module.scss";
import loadingStyles from "./loading.module.scss";

export default function Loading() {
  return (
    <div className={styles.page}>
      <div className={loadingStyles.breadcrumbSkeleton}>
        <div className={`${loadingStyles.skeleton} ${loadingStyles.breadcrumbItemSkeleton}`} />
      </div>
      <Stack>
        {[...Array(8)].map((_, index) => (
          <StackItem key={index}>
            <div className={loadingStyles.itemSkeleton}>
              <div className={`${loadingStyles.skeleton} ${loadingStyles.imageSkeleton}`} />
              <div className={loadingStyles.itemContent}>
                <div className={`${loadingStyles.skeleton} ${loadingStyles.priceSkeleton}`} />
                <div className={`${loadingStyles.skeleton} ${loadingStyles.titleSkeleton}`} />
                <div className={`${loadingStyles.skeleton} ${loadingStyles.locationSkeleton}`} />
              </div>
            </div>
          </StackItem>
        ))}
      </Stack>
    </div>
  );
} 