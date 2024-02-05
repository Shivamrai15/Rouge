
interface LayoutPageProps {
    children : React.ReactNode;
}

const LayoutPage = ({
    children
} : LayoutPageProps) => {
    return (
        <div className='min-h-[calc(100%-4rem)] bg-gray-100 flex items-center justify-center py-10'>
            { children }
        </div>
    )
}

export default LayoutPage;