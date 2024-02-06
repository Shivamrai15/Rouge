import { AlertTriangle } from "lucide-react";

interface FormErorrProps {
    message : string;
}

export const FormError = ({
    message
} : FormErorrProps) => {

    return (
        <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
            <AlertTriangle className="h-4 w-4"/>
            <p className="font-medium">{message}</p>
        </div>
    )
}
