import React, { useState } from 'react';
import MaterialTable from 'material-table';
const empList = [
  {
    id: 1,
    name: 'Neeraj',
    email: 'neeraj@gmail.com',
    phone: 9876543210,
    city: 'Bangalore'
  },
  {
    id: 2,
    name: 'Raj',
    email: 'raj@gmail.com',
    phone: 9812345678,
    city: 'Chennai'
  },
  {
    id: 3,
    name: 'David',
    email: 'david342@gmail.com',
    phone: 7896536289,
    city: 'Jaipur'
  },
  {
    id: 4,
    name: 'Vikas',
    email: 'vikas75@gmail.com',
    phone: 9087654321,
    city: 'Hyderabad'
  }
];

export default function DataTable() {
  const [data, setData] = useState(empList);
  const columns = [
    { title: 'ID', field: 'id', editable: false },
    { title: 'Name', field: 'name' },
    { title: 'Email', field: 'email' },
    { title: 'Phone Number', field: 'phone' },
    { title: 'City', field: 'city' }
  ];
  return <MaterialTable />;
}
