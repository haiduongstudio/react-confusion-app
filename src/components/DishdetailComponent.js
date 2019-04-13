import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  componentDidMount() {
    console.log("Dishdetail Component componentDidMount");
  }

  componentDidUpdate() {
    console.log("Dishdetail Component componentDidUpdate");
  }

  renderDish(dish) {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  renderComments(comments) {
    const commentList = comments.map(comment => {
      return (
        <div key={comment.id}>
          <p>{comment.comment}</p>
          <p>
            --{comment.author},
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit"
            }).format(new Date(Date.parse(comment.date)))}
          </p>
        </div>
      );
    });
    return commentList;
  }

  render() {
    console.log("Dishdetail Component render invoked");
    if (this.props.dish != null) {
      return (
        <div className="container">
          <div className="row">
            {this.renderDish(this.props.dish)}
            <div className="col-12 col-md-5 m-1">
              <h4>Comments</h4>
              {this.renderComments(this.props.dish.comments)}
            </div>
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default DishDetail;
