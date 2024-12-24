import Sidebar from './Sidebar';
import Header from './Navbar'
import StudentTable from './StudentsTable';
import { useState } from 'react';

const StudentsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex-1 bg-gray-50">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
          <StudentTable searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default StudentsPage;
