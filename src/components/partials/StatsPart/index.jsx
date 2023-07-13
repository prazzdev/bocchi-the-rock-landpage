export default function StatsPart({ id, title, children }) {
    return (
        <>
        <div id={id} className="w-[33%]">
            <h4 className="poppins-med text-xl mb-3">{title}</h4>
            <div className="flex">
            {children}
            </div>
        </div>
        </>
    )
}