export default function Button({ id, text, Xpad}) {
    return (
        <>
        <button id={id} className={`poppins-med uppercase bg-[#f97316b3] hover:bg-[#f97416f3] transition-all py-3 ${Xpad} rounded-lg drop-shadow-md text-black hover:text-gray-200 font-bold`}>{text}</button>
        </>
    )
}