import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";

let wereTogo = true;

const Educaition = (props) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      school: "",
      degree: "",
      filed: "",
      Sdate: "",
      Edate: "",
      description: "",
    },
  });

  return (
    <div id="backround" >
      <div id="container" className="shadow-sm p-3 mt-3 mb-5 bg-body rounded">
        <form
          onSubmit={handleSubmit((data) => {
            props.handleEducaition(data);
            reset();

            if (wereTogo) {
              wereTogo = !wereTogo;
              navigate("/educaition");
            }
            else
              navigate("/techs");
          })}
        >
          <h3 className="mb-4 mt-1 mt-1">Education</h3>
          <div class="form-control mb-2">
            <div class="row">
              <div class="col">
                <div className="form-group">
                  <label>School Name</label>
                  <input
                    {...register("school", { required: "this is required" })}
                    className="form-control"
                    type="text"
                    placeholder="e.g Ironi H Tel Aviv"
                  ></input>
                  <p>{errors.school?.message}</p>
                </div>
              </div>

              <div class="col">
                <div className="form-group">
                  <label>Degree</label>
                  <input
                    {...register("degree", { required: "this is required" })}
                    className="form-control"
                    type="text"
                    placeholder="e.g B.A in computer sience "
                  ></input>
                  <p>{errors.degree?.message}</p>
                </div>
              </div>
            </div>



            <div className="form-group">
              <label>Field of Study</label>
              <input
                {...register("filed", { required: "this is required" })}
                className="form-control"
                type="text"
                placeholder="e.g technology and logistics "
              ></input>
              <p>{errors.filed?.message}</p>
            </div>
          </div>

          <div class="form-control mb-1">
            <div class="row">
              <div class="col">
                <div className="form-group">
                  <label>Start Date</label>
                  <input
                    {...register("Sdate")}
                    className="form-control"
                    type="date"
                  ></input>
                </div>
              </div>



              <div class="col">
                <div className="form-group">
                  <label>End Date</label>
                  <input
                    {...register("Edate")}
                    className="form-control"
                    type="date"
                  ></input>
                </div>
              </div>
            </div>
          </div>

          <div class="form-control mb-1">
            <div className="form-group ">
              <label>Describe</label>
              <textarea
                {...register("description", { required: "this is required" })}
                className="form-control"
                rows="5"
                placeholder="Give us some informaition about your achivments"
              ></textarea>
              <p>{errors.description?.message}</p>
            </div>
          </div>

          <button onClick={() => changepath} type="submit" className="btn btn-dark mt-2">add another</button>
          <button type="submit" className="btn btn-dark mt-2">
            next
          </button>
        </form>
      </div>
    </div>
  );
};


let changepath = () => {
  wereTogo = !wereTogo;
}

export default Educaition;
