import { getSelectedResult, getTaskStatus } from "@/remote/selectItem";
import { useQuery } from "@tanstack/react-query";
interface Props {
  selected: string;
}
export function useTaskStatus({ selected }: Props) {
  return useQuery({
    queryKey: ["selectItems", selected],
    queryFn: () => getTaskStatus(selected),
    refetchInterval: 2000,
    staleTime: 0,
  });
}

export function useSelectedItemResults(taskId: string, enabled: boolean) {
  return useQuery({
    queryKey: ["selectItemsResults", taskId],
    queryFn: () => getSelectedResult(taskId),
    enabled,
  });
}
