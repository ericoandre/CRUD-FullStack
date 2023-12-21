import { useMutation, useQuery, useQueryClient } from "react-query";
import { addSetor, editSetor, getSetor, getSetorId, removeSetor } from "./setorApi";

export function setorData(){
    const query = useQuery({
        queryFn: getSetor,
        queryKey: ['setor-data'],
        retry: 2
    })
    return {
        ...query,
        data: query.data?.data
    }
};

export function setorMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: addSetor,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['setor-data']);
        }
    });
    return mutate;
};
export function deleteMutation(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: removeSetor,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['setor-data']);
        }
    });
    return mutate;
};