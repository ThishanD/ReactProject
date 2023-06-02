import React, {useState} from 'react';

const Navbar: React.FC = () =>
{
 const [blogPostCount,setBlogPostCount] = useState<number>(0);  

return (
    <nav className="navbar custom-navbar justify-content-between mb-3">
  <a className="navbar-brand py-0 me-0 ms-5 ">Home</a>
<a className='mb-0 me-5'>Total Posts: {blogPostCount}</a>
</nav>
);
}

export default Navbar;