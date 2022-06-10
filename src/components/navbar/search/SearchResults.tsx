interface IProps {
    children: React.ReactNode;
}

function SearchResults({ children }: IProps) {
    return (
        <div className="group absolute top-full left-0 z-[1045] w-full divide-y divide-slate-300 rounded-b shadow-lg dark:divide-neutral-800">
            {children}
        </div>
    );
}

export default SearchResults;
