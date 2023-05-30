import React, {useState} from 'react';

const Navbar: React.FC = () =>
{
 const [blogPostCount,setBlogPostCount] = useState<number>(0);  

return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
  <h2 className="navbar-brand py-0 me-0 ms-5 ">Home</h2>
<h2 className='mb-0 me-5'>Total Posts: {blogPostCount}</h2>
</nav>
);
}

export default Navbar;