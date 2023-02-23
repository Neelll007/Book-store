import React from "react";
// const Title = (props) => {
//     return (
//         <>
//             <h1 id="title">{props.text}</h1>
//         </>
//     );
// }
const Title = (props) => {
    //props destructuring
    const { title, desc } = props;
    return (
        <>
            <h1>{title}</h1>
            <p>{desc}</p>
        </>
    );
}
export default Title;