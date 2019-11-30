import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const NoLogEntries = () => {
  return (
    <Card style={{ textAlign: "left" }}>
      <CardBody>
          There are no matching Log Entries.{' '}
      <Link className="coral"
          to={{
            pathname: `/`,
            state: { type: 'all' }
          }}
        >
          Click to return to home.
        </Link>
      </CardBody>
    </Card>
  );
};

export default NoLogEntries;
