import { FormUser } from "../../../../components/Forms/FormUser";
import Admin from "../../../../layouts/Admin";

export async function getStaticPaths() {
  // Call an external API endpoint to get users
  // const res = await fetch(`${process.env.APIHOST}/users`)
  const { users } = {
    users: [
      {
        userID: 1,
        name: "João",
        email: "jvsrpassos@gmail.com",
        creationDate: "2021-07-09 12:22:42",
        status: true
      }
    ],
    total: 1
  };

  // Get the paths we want to pre-render based on users
  const paths = users.map((user) => ({
    params: { id: user.userID },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the user `id`.
  // If the route is like /users/1, then params.id is 1
  // const res = await fetch(`${process.env.APIHOST}/users/${params.id}`)
  const { user } = {
    user: {
      userID: 1,
      name: "João",
      email: "jvsrpassos@gmail.com",
      creationDate: "2021-07-09 12:22:42",
      status: true
    }
  };

  // Pass user data to the page via props
  return { props: { user } }
}

export default FormUser;

FormUser.layout = Admin;
FormUser.titlePage = "Editar Usuários";