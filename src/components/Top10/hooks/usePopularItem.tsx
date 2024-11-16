import { getPopularItemImages } from "@/remote/popular";
import { getSelectedResult } from "@/remote/selectItem";
import { useMutation, useQuery } from "@tanstack/react-query";

export function usePopularItemImagesOnly() {
  return useQuery({
    queryKey: ["popularItemsImages"],
    queryFn: () => getPopularItemImages(),
  });
}

export function usePollingResults({
  onSuccess,
  onError,
}: {
  onSuccess: () => void;
  onError: () => void;
}) {
  return useMutation<Promise<JSON>, Error, string>({
    mutationFn: (taskId) => getSelectedResult(taskId),
    onSuccess: () => {
      onSuccess();
    },
    onError: () => {
      console.log("polling error");
      onError();
    },
  });
}
