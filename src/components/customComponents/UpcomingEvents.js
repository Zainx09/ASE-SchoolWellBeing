import React from "react";
import { Card, List, Col, Row } from "antd";
import {
  CalendarOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const eventsData = [
  {
    id: "1",
    title: "Science Fair",
    date: "2024-07-15",
    time: "10:00 AM",
    location: "School Auditorium",
    description: "A science fair showcasing projects from students.",
  },
  {
    id: "2",
    title: "Sports Day",
    date: "2024-07-20",
    time: "9:00 AM",
    location: "School Ground",
    description:
      "A day filled with various sports activities and competitions.",
  },
  {
    id: "3",
    title: "Art Exhibition",
    date: "2024-07-25",
    time: "11:00 AM",
    location: "Art Gallery",
    description: "An exhibition of artwork created by students.",
  },
];

const UpcomingEvents = () => {
  return (
    <Card title="Upcoming Events and Activities">
      <List
        itemLayout="vertical"
        dataSource={eventsData}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <List.Item.Meta
              title={item.title}
              description={
                <>
                  <p>
                    <CalendarOutlined /> {item.date}
                  </p>
                  <p>
                    <ClockCircleOutlined /> {item.time}
                  </p>
                  <p>
                    <EnvironmentOutlined /> {item.location}
                  </p>
                  <p>{item.description}</p>
                </>
              }
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default UpcomingEvents;
