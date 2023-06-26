import { Grid, Skeleton } from "@chakra-ui/react";

export default function SkeletonList() {
    return (
        <Grid templateColumns={"repeat(6, 1fr)"} w="full" gap="4">
            <Skeleton width="full" height="240px"/>
            <Skeleton width="full" height="240px"/>
            <Skeleton width="full" height="240px"/>
            <Skeleton width="full" height="240px"/>
            <Skeleton width="full" height="240px"/>
            <Skeleton width="full" height="240px"/>
        </Grid>
    )
}