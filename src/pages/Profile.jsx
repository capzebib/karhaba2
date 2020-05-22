import React from "react";
import { Link, withRouter } from "react-router-dom";
import FormUserEdit from "../components/Forms/FormUserEdit";
import { withUser } from "../components/Auth/withUser";


const Profile = (props) => {
  return (
    <div>
    Je suis la
    <FormUserEdit />
    </div>
    
  );
};

export default withUser(Profile);
