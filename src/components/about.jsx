import { useForm } from "react-hook-form";

const About = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      about: "",
    },
  });

  // let formStyle={

  //     width:"100%",
  //     float:"left",
  //     position: 'relative',
  //     float: 'left',

  // }

  return (
    <form
      onSubmit={handleSubmit((data) => {
        props.handleAbout(data);
        reset();
      })}
    >
      <div className="form-group">
        <label>about</label>
        <textarea
          {...register("about", { required: "this is required" })}
          className="form-control"
          rows="3"
        ></textarea>
        <p>{errors.about?.message}</p>
      </div>

      <button type="submit" className="btn btn-dark mt-2">
        next
      </button>
    </form>
  );
};

export default About;
