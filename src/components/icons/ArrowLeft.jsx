import * as React from "react"

const ArrowLeftIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width ?? 28}
        height={props.height ?? 16}
        fill="none"
        viewBox="0 0 28 16"
        {...props}
    >
        <path
            fill={props.color ?? "#fff"}
            d="M21.875 8.75H6.125a.867.867 0 0 1-.875-.875c0-.49.385-.875.875-.875h15.75c.49 0 .875.385.875.875s-.385.875-.875.875Z"
        />
        <path
            fill={props.color ?? "#fff"}
            d="M10.5 14.875a.822.822 0 0 1-.613-.262L3.762 8.488a.866.866 0 0 1 0-1.243l6.125-6.107a.866.866 0 0 1 1.243 0c.35.35.35.892 0 1.242L5.617 7.893l5.513 5.512c.35.35.35.893 0 1.243a.879.879 0 0 1-.613.262l-.017-.035Z"
        />
    </svg>
)

export default ArrowLeftIcon