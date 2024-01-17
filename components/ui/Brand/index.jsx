import Image from "next/image"

const Brand = ({ ...props }) => (
    <Image
        src="/enqdb.svg"
        alt="Split logo"
        {...props}
        width={130}
        height={80}
        priority
    />
)
export default Brand