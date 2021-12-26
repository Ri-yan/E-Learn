import React from "react";
import './Register.css';

const Register=()=>{
    return(
        <div className='register-body'>
			<a href="index.html"><h3>Go back</h3></a> <br/>

<section class="log col-12">
	<h2>Register here</h2>
	<form>
	  <div class="mb-3">
	  	<label for="exampleInputName" class="form-label">Name </label>
	    <input type="text" class="form-control" id="exampleInputName" />

	    <label for="exampleInputEmail1" class="form-label">Email address</label>
	    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
	    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
	  </div>

	  <div class="mb-3">
	    <label for="exampleInputPassword1" class="form-label">Interested field</label>
	    <input type="text" class="form-control" id="exampleInputPassword1"/>
	  </div>

	  <div class="mb-3 form-check">
	    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
	    <label class="form-check-label" for="exampleCheck1">Check me out</label>
	  </div>

	 <button type="submit" class="btn btn-primary">  <a href="https://codeconvey.com/wp-content/uploads/2020/06/registration-successful-message-html.png">Submit</a></button>
	
	</form>
</section>
<footer class="col-12">
	<h6>Also check out:</h6>
	<a href="https://github.com/Ri-yan"><h6>https://github.com/Ri-yan</h6></a>
</footer>
</div>
    );
}
export default Register;