import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";

const Register = () => {
  const navigate = useNavigate();
  const { signUp, isAuthenticated } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = handleSubmit((values) => {
    signUp(values);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated, navigate]);

  return (
    <div className="container text-center " style={{ maxWidth: "360px" }}>
      <form onSubmit={onSubmit}>
        <h2 className="mt-5 ">Register</h2>
        <div className="mb-2 ">
          <input
            className="form-control"
            type="text"
            {...register("userName", { required: true })}
            placeholder="Enter a username"
          />
          {errors.userName && (
            <p className="text-decoration-underline">UserName is required</p>
          )}
        </div>

        <div className="mb-2">
          <input
            className="form-control"
            type="email"
            {...register("email", { required: true })}
            placeholder="Enter an email"
          />
          {errors.email && (
            <p className="text-decoration-underline">Email is required</p>
          )}
        </div>

        <div>
          <input
            className="form-control"
            type="password"
            {...register("password", { required: true })}
            placeholder="Enter a password"
          />
          {errors.password && (
            <p className="text-decoration-underline">Password is required</p>
          )}
        </div>
        <p>
          You already have an account? click <Link to="/login">Here</Link>
        </p>
        <button type="submit" className="btn btn-outline-dark mt-2">
          Send
        </button>
      </form>
    </div>
  );
};

export default Register;
