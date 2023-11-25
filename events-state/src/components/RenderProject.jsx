import Projectlist from "./Projectlist";

const RenderProject = (props) => {
    return (
        <div className="images">
        {props.pics.map((pic, i) => (
          <Projectlist pic={pic} />
        ))}
      </div>
        );
}

export default RenderProject