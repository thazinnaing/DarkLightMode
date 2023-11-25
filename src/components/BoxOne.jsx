const Box = ({children}) => {
    return (
        <div className={`w-full h-screen flex flex-col gap-4 justify-center items-center bg-light dark:bg-dark `}>
            {children}
        </div>
    )
}

export default Box;