import useState from 'react';

export default function App(){
    const employees = [
        {id: 1, name: 'John Doe', title: 'Software Engineer'},
        {id: 2, name: 'Jane Smith', title: 'Product Manager'},
        {id: 3, name: 'Bob Johnson', title: 'UX Designer'},
    ];

    const [search, setSearch] = useState("");
    const filtered = employees.filter(employee => employee.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div>

            <input
                value = {search}
                onChange={(emp) => setSearch(emp.value)}
                placeholder = "Search"
            />

            {filtered.length === 0 ? <p>No employees found</p> :
            filtered.map(employee=>(
                <div key={employee.id}>{employee.name}</div>
            ))
        }
        </div>
    );
}