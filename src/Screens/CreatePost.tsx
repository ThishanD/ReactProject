import React, { useState, useEffect } from 'react';

const CreatePost:React.FC = () => {



  return (
    <div className='container'>
      <h2 className='text-start ms-1 ps-1 custom-page-title'>
        Create Blog
      </h2>
 <form className='m-1 p-1'>
  <div className="form-group mb-2">
    <label className='custom-label mb-2' htmlFor="exampleInputEmail1">Title</label>
    <input id='exampleInputEmail1' type="text" className="form-control custom-input-text custom-border"  aria-describedby="emailHelp" placeholder="Enter blog title"/>
  </div>
  <div className="form-group mb-2">
    <label className='custom-label mb-2'  htmlFor="exampleInputEmail1" >Content</label>
    <br></br>

    <textarea className="form-control custom-input-text custom-border" id='blogContent' rows={3}></textarea>
  </div>
  <button type="submit" className="custom-btn" >Submit</button>
</form>
    </div>
 
  );
}

export default CreatePost;


