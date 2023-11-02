import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,
} from "reactstrap";


function RenderCard({ item }) {
  return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
            <CardTitle >{item.name}</CardTitle>
            <CardText class="fa fa-calendar" >{item.date}</CardText>
            <CardText>{item.description}</CardText>
            <a href="#" class="btn btn-primary">View More</a>
            </CardBody>
        </Card>
  );
}

function Home(props) {
  return (
    <div className="container">
     
        <div className="row row-header">
          <div className="jumbotron bg-info">
            <h1 className="display-4">FPT UNIVERSITY</h1>
            <p className="lead">
            FPT University is a private higher education institution located in Vietnam. It is part of FPT Corporation, a leading technology company in Vietnam.
            FPT University is known for its focus on technology and information technology-related programs. !
            </p>
            <hr className="my-4" />
            <p>
              HanK DP
            </p>
          </div>
      </div>
    
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard item={props.news} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.news1} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.news2} />
        </div>
      </div>
    </div>
  );
}

export default Home;
