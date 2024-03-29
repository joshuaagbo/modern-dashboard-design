import { Avatar } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { Link } from "react-router-dom";
import gems from "../static/gems.jpg";
import "./sales/sales.css";
import { handleDelete } from "../pages/users/users";

export const CustomerAnalyticsData = [
  {
    name: "Jan",
    sales: 500,
    pv: 900,
    amt: 235,
  },
  {
    name: "Feb",
    sales: 2400,
    pv: 2200,
    amt: 235,
  },
  {
    name: "Mar",
    sales: 2300,
    pv: 1500,
    amt: 235,
  },
  {
    name: "Apr",
    sales: 4500,
    pv: 100,
    amt: 235,
  },
  {
    name: "May",
    sales: 1200,
    pv: 760,
    amt: 235,
  },
  {
    name: "Jun",
    sales: 1900,
    pv: 10,
    amt: 235,
  },
  {
    name: "Jul",
    sales: 1300,
    pv: 100,
    amt: 235,
  },
  {
    name: "Aug",
    sales: 2000,
    pv: 1200,
    amt: 235,
  },
  {
    name: "Sep",
    sales: 3400,
    pv: 1800,
    amt: 235,
  },
  {
    name: "Oct",
    sales: 3700,
    pv: 2300,
    amt: 235,
  },
  {
    name: "Nov",
    sales: 4400,
    pv: 2200,
    amt: 235,
  },
  {
    name: "Dec",
    sales: 5400,
    pv: 3800,
    amt: 235,
  },
];

export const usersColumns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "username",
    headerName: "Username",
    width: 200,
    renderCell: (params) => (
      <div className="TransactionCustomerCell">
        <Avatar src={params.row.avatar} />
        <span className="TransactionCutomersName" style={{ marginLeft: "5px" }}>
          {params.row.userName}
        </span>
      </div>
    ),
  },
  { field: "email", headerName: "Email", width: 150 },
  { field: "transaction", headerName: "Transaction", width: 150 },

  {
    field: "status",
    headerName: "Status",
    width: 150,
    renderCell: (params) => (
      <span className={params.row.status}>{params.row.status}</span>
    ),
  },
  {
    field: "action",
    headerName: "Actions",
    width: 150,
    renderCell: (params) => (
      <>
        <Link to={`/user/${params.row.id}`} className="UserListEdit">
          Edit
        </Link>
        <Delete
          className="UserListDelete"
          onClick={() => handleDelete(params.row.id)}
        />
      </>
    ),
  },
];

export const usersRows = [
  {
    id: 1,
    avatar: `${gems}`,
    userName: "Jon Snow",
    email: "jon@gmail.com",
    date: "20-10-2020",
    transaction: "$30",
    status: "Approved",
  },
  {
    id: 2,
    avatar: `${gems}`,
    userName: "Ayan Taylor",
    email: "Ayantaylor@protonmail.com",
    date: "12-05-2021",
    transaction: "$18",
    status: "Pending",
  },
  {
    id: 3,
    avatar: `${gems}`,
    userName: "Bran Stark",
    email: "bran@gmail.com",
    date: "10-02-2020",
    transaction: "$45",
    status: "Approved",
  },
  {
    id: 4,
    avatar: `${gems}`,
    userName: "Rami Malik",
    email: "Rami404@yahoo.com",
    date: "10-02-2020",
    transaction: "$45",
    status: "Pending",
  },
  {
    id: 5,
    avatar: `${gems}`,
    userName: "Carly Chaikin",
    date: "10-02-2020",
    email: "carly@gmail.com",
    transaction: "$45",
    status: "Approved",
  },
  {
    id: 6,
    avatar: `${gems}`,
    userName: "Gems Now",
    email: "gems@gems.com",
    date: "10-02-2020",
    transaction: "$45",
    status: "Approved",
  },
  {
    id: 7,
    avatar: `${gems}`,
    userName: "Bran Stark",
    email: "testing@test.com",
    date: "10-02-2020",
    transaction: "$45",
    status: "Pending",
  },
  {
    id: 8,
    avatar: `${gems}`,
    userName: "Bran Stark",
    email: "test@test.com",
    date: "10-02-2020",
    transaction: "$45",
    status: "Approved",
  },
  {
    id: 9,
    avatar: `${gems}`,
    userName: "Bran Stark",
    email: "testing@test.com",
    date: "10-02-2020",
    transaction: "$45",
    status: "Pending",
  },
  {
    id: 10,
    avatar: `${gems}`,
    userName: "Bran Stark",
    email: "testing@test.com",
    occupation: "Writer",
    date: "10-02-2020",
    transaction: "$45",
    status: "Approved",
  },
];

export const LatestTransactionData = [
  {
    id: 8,
    date: "10-02-2020",
    transaction: "$45",
    status: "Approved",
    userId: 1,
  },
  {
    id: 3,
    date: "18-05-2020",
    transaction: "$12",
    status: "Approved",
    userId: 1,
  },
  {
    id: 6,
    date: "10-01-2020",
    transaction: "$55",
    status: "Approved",
    userId: 9,
  },
  {
    id: 1,
    date: "20-08-2020",
    transaction: "$16",
    status: "Approved",
    userId: 1,
  },
  {
    id: 2,
    date: "02-02-2021",
    transaction: "$23",
    status: "Pending",
    userId: 5,
  },
];

export const CustomersData = [
  {
    id: 1,
    avatar: `${gems}`,
    firstName: "Jon",
    lastName: "snow",
    userName: "Jon Snow",
    occupation: "Artist",
    email: "jon@gmail.com",
    date: "20-10-2020",
    isActive: true,
    phone: "90-54-40",
    transaction: "$30",
    status: "Approved",
    address: {
      city: "NY",
      country: "USA",
    },
  },
  {
    id: 2,
    avatar: `${gems}`,
    phone: "55-55-44",
    isActive: true,
    firstName: "Ayan",
    lastName: "Taylor",
    userName: "Ayan Taylor",
    occupation: "Gamer",
    email: "Ayantaylor@protonmail.com",
    date: "12-05-2021",
    transaction: "$18",
    status: "Pending",
    address: {
      city: "Washington",
      country: "USA",
    },
  },
  {
    id: 3,
    avatar: `${gems}`,
    firstName: "Bran",
    lastName: "Stark",
    userName: "Bran Stark",
    email: "bran@gmail.com",
    date: "10-02-2020",
    isActive: true,
    transaction: "$45",
    status: "Approved",
    occupation: "Writer",
    phone: "0523",
    address: {
      city: "Denvair",
      country: "Australia",
    },
  },
  {
    id: 4,
    avatar: `${gems}`,
    firstName: "Rami",
    lastName: "Malik",
    userName: "Rami Malik",
    email: "Rami404@yahoo.com",
    isActive: true,
    date: "10-02-2020",
    transaction: "$45",
    status: "Pending",
    occupation: "Ethical Hacker",
    phone: "2001",
    address: {
      city: "Quatar",
      country: "UAE",
    },
  },
  {
    id: 5,
    avatar: `${gems}`,
    firstName: "Carly",
    lastName: "Chaikin",
    userName: "Carly Chaikin",
    occupation: "Motivational Speaker",
    date: "10-02-2020",
    email: "carly@gmail.com",
    isActive: false,
    transaction: "$45",
    status: "Approved",
    phone: "2003",
    address: {
      country: "Isreali",
      city: "Jerusalem",
    },
  },
  {
    id: 6,
    avatar: `${gems}`,
    firstName: "Gems",
    lastName: "Now",
    userName: "Gems Now",
    email: "gems@gems.com",
    occupation: "Entrepreneur",
    date: "10-02-2020",
    transaction: "$45",
    status: "Approved",
    isActive: true,
    phone: "90166",
    address: {
      country: "Nigeria",
      city: "PH",
    },
  },
  {
    id: 7,
    avatar: `${gems}`,
    userName: "Bran Stark",
    firstName: "Bran",
    lastName: "Stark",
    occupation: "Movie Writer",
    email: "testing@test.com",
    date: "10-02-2020",
    transaction: "$45",
    status: "Pending",
    phone: "95-56-32",
    isActive: false,
    address: {
      country: "USA",
      city: "New Jersey",
    },
  },
  {
    id: 8,
    avatar: `${gems}`,
    userName: "Bran Stark",
    firstName: "Bran",
    lastName: "Stark",
    email: "test@test.com",
    date: "10-02-2020",
    transaction: "$45",
    status: "Approved",
    occupation: "Scientist",
    isActive: true,
    phone: "0223",
    address: { city: "England", country: "UK" },
  },
  {
    id: 9,
    phone: "25590",
    address: { city: "Delhi", country: "India" },
    avatar: `${gems}`,
    userName: "Bran Stark",
    firstName: "Bran",
    lastName: "Stark",
    email: "testing@test.com",
    date: "10-02-2020",
    transaction: "$45",
    status: "Pending",
    occupation: "Trader",
    isActive: false,
  },
  {
    id: 10,
    avatar: `${gems}`,
    firstName: "Bran",
    lastName: "Stark",
    userName: "Bran Stark",
    email: "testing@test.com",
    isActive: true,
    date: "10-02-2020",
    transaction: "$45",
    status: "Approved",
    occupation: "Musician",
    phone: "25949",
    address: {
      country: "Russia",
      city: "Moscow",
    },
  },
];

export const Transactions = [
  {
    id: 8,
    date: "10-02-2020",
    transaction: "$45",
    status: "Approved",
    userId: 2,
    itemId: 459,
  },
  {
    id: 3,
    date: "10-02-2020",
    transaction: "$45",
    status: "Approved",
    userId: 1,
    itemId: 411,
  },
  {
    id: 5,
    date: "10-02-2020",
    transaction: "$45",
    status: "Approved",
    userId: 8,
    itemId: 123,
  },
  {
    id: 2,
    date: "10-02-2020",
    transaction: "$45",
    status: "Approved",
    userId: 2,
    itemId: 980,
  },
];
