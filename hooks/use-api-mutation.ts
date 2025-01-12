import { useMutation } from "convex/react";
import { useState } from "react"


export const useApiMutation = (mutationfunction : any) => {
    const [pending,setPending] = useState(false);
    const apiMutation = useMutation(mutationfunction);

    const mutate = (payload : any) => {
        setPending(true);
        return apiMutation(payload)
        .finally(() => setPending(false))
        .then((result) => {
            return result;
        })
        .catch((error) =>{
            throw error;
        })
    };

    return {
        mutate,
        pending,
    };
}