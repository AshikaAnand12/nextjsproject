import { useEffect, useState } from 'react';


const getUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
};

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <span>
      <table className="border-4 w-full divide-y divide-gray-200 dark:divide-gray-700">
  <thead>
    <tr>
      <th className="py-2 px-4 bg-gray-100 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Username
      </th>
      <th className="py-2 px-4 bg-gray-100 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Full Name
      </th>
      <th className="py-2 px-4 bg-gray-100 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Company
      </th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700">
    {users.map((u, index) => (
      <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
        <td className="py-3 sm:py-4 px-4">
          {u.username}
        </td>
        <td className="py-3 sm:py-4 px-4">
          {u.name}
        </td>
        <td className="py-3 sm:py-4 px-4">
          {u.company.name}
        </td>
      </tr>
    ))}
  </tbody>
</table>


        {/* <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
        {users.map((u, index) => (
        <li key = {index} className="pb-3 sm:pb-4">
            <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate ">
                    {u.username}
                    </p>
                    <p className="text-sm text-gray-500 truncate ">
                    {u.name}
                    </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold ">
                {u.company.name}
                </div>
            </div>
        </li>
        ))}
        </ul> */}

      {/* <ul>
        {users.map((u, index) => (
          <li key={index}>
            <strong>Username:</strong> {u.username}<br />
            <strong>Full Name:</strong> {u.name}<br />
            <strong>Company:</strong> {u.company.name}
          </li>
        ))}
      </ul> */}
    </span>
  );
}

export default User;