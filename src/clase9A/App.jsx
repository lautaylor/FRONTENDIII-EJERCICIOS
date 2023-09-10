import { useEffect, useState } from "react";

const ChangeTitleExample = () => {
const [title, setTitle] = useState(
"Certified Tech Developer | DH"
);
useEffect(() => {
document.title = title;
}, [title]);

return <div />;
};

export default ChangeTitleExample;