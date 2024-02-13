import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  const { isAuthenticated, signIn, errors: loginErr } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = handleSubmit((values) => {
    signIn(values);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated, navigate]);

  return (
    <div className="container text-center " style={{ maxWidth: "360px" }}>
      {loginErr?.map((err, i) => (
        <p className="form-control bg-danger fw-bold text-bg-primary " key={i}>
          {err}
        </p>
      ))}

      <form onSubmit={onSubmit}>
        <h2 className="mt-5 ">Login</h2>
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
          You already member? click <Link to="/register">Here</Link>
        </p>
        <button type="submit" className="btn btn-outline-dark mt-2">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
