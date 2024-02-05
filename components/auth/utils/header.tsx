interface HeaderProps {
    label : string;
}

export const Header = ({
    label
} : HeaderProps) => {
    return (
        <div className="w-full flex flex-col space-y-4 items-center justify-center overflow-hidden">
            <p className="text-muted-foreground font-semibold">
                {label}
            </p>
        </div>
    )
}
