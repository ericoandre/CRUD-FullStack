import { useMutation, useQuery, useQueryClient } from "react-query";
import { addColaborador,getColaborador, removeColaborador } from "./colaboradorDataApi";

export function colaboradorData(){
    const query = useQuery({
        queryFn: getColaborador,
        queryKey: ['colaborador-data'],
        retry: 2
    })
    return {
        ...query,
        data: query.data?.data
    }
}

export function colaboradorMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: addColaborador,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['colaborador-data'])
        }
    })

    return mutate;
}
export function deleteMutation(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: removeColaborador,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['colaborador-data']);
        }
    });
    return mutate;
};