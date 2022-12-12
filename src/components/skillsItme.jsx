import { useForm } from "react-hook-form";

const Skills = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      skill: "",
      level: "",
    },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        props.handleSkills(data);
        reset();
      })}
    >
      <div className="form-group">
        <label>Skill</label>
        <input
          {...register("skill", { required: "this is required" })}
          className="form-control"
        ></input>
        <p>{errors.skill?.message}</p>
      </div>

      <div class="form-group">
        <label for="exampleFormControlSelect1">Example select</label>
        <select
          class="form-control"
          {...register("level", { required: "this is required" })}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </div>

      <button type="submit" className="btn btn-dark mt-2">
        next
      </button>
      <button type="submit" className="btn btn-dark mt-2">
        add another skill
      </button>
    </form>
  );
};

export default Skills;
