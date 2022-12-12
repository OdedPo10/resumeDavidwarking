import { useForm } from "react-hook-form";

const Experience = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      jobTitle: "",
      employer: "",
      Sdate: "",
      Edate: "",
      description: "",
    },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        props.handleXP(data);
        reset();
      })}
    >
      <div className="form-group">
        <label>Job title</label>
        <input
          {...register("jobTitle", { required: "this is required" })}
          className="form-control"
          type="text"
        ></input>
        <p>{errors.jobTitle?.message}</p>
      </div>

      <div className="form-group">
        <label>Employer</label>
        <input
          {...register("employer", { required: "this is required" })}
          className="form-control"
          type="text"
        ></input>
        <p>{errors.employer?.message}</p>
      </div>

      <div className="form-group">
        <label>Start Date</label>
        <input
          {...register("Sdate")}
          className="form-control"
          type="date"
        ></input>
      </div>

      <div className="form-group">
        <label>End Date</label>
        <input
          {...register("Edate")}
          className="form-control"
          type="date"
        ></input>
      </div>

      <div className="form-group">
        <label>Describe</label>
        <textarea
          {...register("description", { required: "this is required" })}
          className="form-control"
          rows="5"
        ></textarea>
        <p>{errors.description?.message}</p>
      </div>

      <button type="submit" className="btn btn-dark mt-2">
        next
      </button>
    </form>
  );
};

export default Experience;
