import { useMemo } from "react";
import Preview from "./Preview";

const UploadForm = (props) => {
  const isDisabled = useMemo(()=>{
    return !!Object.values(props.inputs).some(input => !input )
  },[props.inputs])
  return (
    props.isVisible && (
      <>
        <p className="display-6 text-center mb-3">Upload Stock Image</p>
        <div className="mb-5 d-flex align-items-center justify-content-center">
          <Preview {...props.inputs}/>
          <form
            className="mb-2"
            style={{ textAlign: "left" }}
            onSubmit={props.onSubmit}
          >
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="title"
                placeholder="title"
                aria-describedby="text"
                onChange={props.onChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="file"
                className="form-control"
                name="file"
                onChange={props.onChange}
              />
            </div>
            <button type="submit" className="btn btn-success float-end" disabled={isDisabled}>
              Save changes
            </button>
          </form>
        </div>
      </>
    )
  );
};

export default UploadForm;
