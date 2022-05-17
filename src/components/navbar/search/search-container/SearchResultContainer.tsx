interface IProps {
    children: React.ReactNode;
}

function SearchResultContainer({ children }: IProps) {
    return (
        <div className="group absolute top-full left-0 z-[1045] w-full divide-y divide-slate-300 rounded-b bg-slate-200 shadow-lg dark:divide-neutral-800 dark:bg-neutral-900">
            {children}
        </div>
    );
}

export default SearchResultContainer;
