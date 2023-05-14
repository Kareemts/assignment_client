import React, { useEffect, useState } from "react";
import { Table, Input } from "antd";
import { axiosUrl } from "../../services/axiosInstance";

export const Dashboard = () => {
  const [users, setUsrs] = useState([]);

  useEffect(() => {
    axiosUrl.get("/orders").then(({ data }) => {
      setUsrs(data.orderData);
    });
  }, []);

  const columns = [
    {
      title: "Order Id",
      dataIndex: "order_id",
      key: "order_id",
      render: (order_id) => <a>{order_id}</a>,
    },
    {
      title: "First Name",
      dataIndex: "Users",
      key: "first_name",
      render: (Users) => <a>{Users.first_name}</a>,
    },
    {
      title: "Last Name",
      dataIndex: "Users",
      key: "laset_name",
      render: (Users) => <a>{Users.laset_name}</a>,
    },
    {
      title: "Email",
      dataIndex: "Users",
      key: "email",
      render: (Users) => <a>{Users.email}</a>,
    },
    {
      title: "Product Name",
      dataIndex: "product_name",
      key: "product_name",
      render: (product_name) => <a>{product_name}</a>,
    },
    {
      title: "Order Date",
      dataIndex: "created_date",
      key: "created_date",
      render: (created_date) => {
        const date = new Date(created_date);
        const dateString = date.toLocaleDateString();
        return <a>{dateString}</a>;
      },
    },
    {
      title: "Order Status",
      dataIndex: "status",
      key: "status",
      render: (status) => <a>{status}</a>,
    },
  ];

  const handleSearch = (event) => {
    axiosUrl.post("/filter", { data: event.target.value }).then(({ data }) => {
      setUsrs(data.orderData);
    });
  };

  return (
    <div className="p-10">
      <div className="flex justify-end mb-5">
        <Input
          className="w-40"
          placeholder="Search product..."
          onChange={handleSearch}
        />
      </div>
      <Table
        rowSelection
        columns={columns}
        dataSource={users}
        scroll={{ x: 500 }}
      />
    </div>
  );
};
