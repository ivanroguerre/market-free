import { Stack, StackItem } from "@/components/layout";
import styles from "./page.module.scss";
import loadingStyles from "./loading.module.scss";

export default function Loading() {
  return (
    <div className={styles.page}>
      <div className={styles.categoryName}>
        <div className={`${loadingStyles.skeleton} ${loadingStyles.categoryNameSkeleton}`} />
      </div>
      <Stack>
        {[...Array(8)].map((_, index) => (
          <StackItem key={index}>
            <div className={loadingStyles.itemSkeleton}>
              <div className={`${loadingStyles.skeleton} ${loadingStyles.imageSkeleton}`} />
              <div className={`${loadingStyles.skeleton} ${loadingStyles.titleSkeleton}`} />
              <div className={`${loadingStyles.skeleton} ${loadingStyles.descriptionSkeleton}`} />
            </div>
          </StackItem>
        ))}
      </Stack>
    </div>
  );
} 