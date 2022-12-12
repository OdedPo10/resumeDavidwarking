import { useForm } from "react-hook-form";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

const options = [
  { value: "sql", label: "sql" },
  { value: "java", label: "java" },
  { value: "pyton", label: "pyton" },
  { value: "html", label: "html" },
];

const PersonalInfo = (props) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      wills: "",
      firstName: "",
      lastName: "",
      mail: "",
      phoneNumber: "",
    },
  });
  return (
    <div style={{ width: "" }}>
      <form
        onSubmit={handleSubmit((data) => {
          props.handlePersonalInfo(data);
          reset();
          navigate("/about");
        })}
      >
        <div class="form-row">
          <div class="form-group col-md-6">
            <label>wills</label>
            <input
              {...register("wills")}
              type="text"
              class="form-control"
              placeholder="My dream is to become.."
            ></input>
          </div>

          <div class="form-group col-md-6">
            <label>First name</label>
            <input
              {...register("firstName", { required: "this is required" })}
              type="text"
              class="form-control"
              placeholder="First name"
            ></input>
          </div>
        </div>

        <div class="form-group">
          <label for="inputAddress">Last name</label>
          <input
            {...register("lastName", { required: "this is required" })}
            type="text"
            class="form-control"
            placeholder="Last name"
          ></input>
        </div>

        <div class="form-group">
          <label for="inputAddress2">Email</label>
          <input
            {...register("phoneNumber", { required: "this is required" })}
            type="email"
            class="form-control"
            placeholder="0523351768"
          ></input>
        </div>

        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity">Phone number</label>
            <input
              {...register("mail")}
              type="text"
              class="form-control"
              id="inputCity"
            ></input>
          </div>

          <Select
            options={options}
            isMulti
            onChange={(seleced) => props.handlePersonalInfo_Multis(seleced)}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          next
        </button>
      </form>
    </div>
  );
};

export default PersonalInfo;
