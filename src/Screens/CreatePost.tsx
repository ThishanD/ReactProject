import React, { useState, useEffect } from 'react';

const CreatePost:React.FC = () => {



  return (
    <div className='m-1 p-1'>
      <h2 className='text-center'>
        Create Blog
      </h2>
 <form className='m-1 p-1'>
  <div className="form-group mb-2">
    <label htmlFor="exampleInputEmail1">Title</label>
    <input id='exampleInputEmail1' type="text" className="form-control custom-border"  aria-describedby="emailHelp" placeholder="Enter blog title"/>
  </div>
  <div className="form-group mb-2">
    <label htmlFor="exampleInputEmail1" >Content</label>
    <br></br>
    <textarea className="form-control" id='blogContent' rows={3}></textarea>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
 
  );
}

export default CreatePost;


