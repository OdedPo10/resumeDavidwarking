import { useForm } from "react-hook-form";
import Select from "react-select";

const options = [
  { value: "sql", label: "sql" },
  { value: "java", label: "java" },
  { value: "pyton", label: "pyton" },
  { value: "html", label: "html" },
];

const Techs = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      linkdinLink: "",
      githubLink: "",
    },
  });

  return (
    <form
      onSubmit={handleSubmit((links) => {
        props.handleLinks(links);
        reset();
      })}
    >
      <Select
        options={options}
        isMulti
        onChange={(picks) => props.handleTechs(picks)}
      />

      <div className="form-group">
        <label>Linkdin link</label>
        <input
          {...register("linkdinLink")}
          className="form-control"
          type="text"
        ></input>
      </div>

      <div className="form-group">
        <label>Git hub link</label>
        <input
          {...register("githubLink")}
          className="form-control"
          type="text"
        ></input>
      </div>

      <button type="submit" className="btn btn-dark mt-2">
        next
      </button>
    </form>
  );
};

export default Techs;
