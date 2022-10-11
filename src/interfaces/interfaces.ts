export interface formDataType {
    windowStart: string;
    windowEnd: string;
    agency: string;
    status?: number;
}

export interface InputsFormType {
    dispatch: React.Dispatch<any>;
    setSuccessful: React.Dispatch<React.SetStateAction<boolean>>
    formData: formDataType;
    agencies: string[];
}

export interface InputFormType {
    dispatch: React.Dispatch<any>;
    formActions: string;
    value: string;
    payloadValue: string;
}

export interface FetchParamsType {
    //these two are optional because we use them in separate cases
    windowStart?: string,
    windowEnd?: string,
    signal: AbortSignal,
    setState: React.Dispatch<React.SetStateAction<any[]>>
    status?: number;
}