import { gql, useQuery } from "@apollo/client"

type User = {
  id: string;
  name: string;
}

const GET_USER = gql`
  query {
    users {
      id
      name
    }
  }
`;

function App() {

  const { data, loading } = useQuery<{ users: User[] }>(GET_USER)

  if (loading) {
    return <p>Carregando...</p>
  }

  return (
    <ul>
      {data?.users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  )

  console.log(data)

  return (
    <h1>Hello World</h1>
  )
}

export default App
