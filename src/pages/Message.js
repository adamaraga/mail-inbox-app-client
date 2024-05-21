import { useParams } from "react-router-dom";

const Message = () => {
  const { id } = useParams();

  console.log("id", id);
  return (
    <div className="message">
      <h1>Me Again</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
        tempora possimus quo quidem laboriosam culpa sed consequatur omnis
        voluptatibus recusandae quibusdam dolores cum velit neque itaque, libero
        asperiores soluta amet!
      </p>
    </div>
  );
};

export default Message;
