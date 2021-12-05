export default function Card({id,name,url,avatar}){
    return (
        <div
          style={{
            display: "flex",
            gap: "2rem",
            border: "1px solid black",
            padding: "1rem",
            marginTop: "2rem",
            background: "rgb(172, 164, 164)"

          }}
        >
          <img width="70" src={avatar} alt={id} />
          <div>
            <h3>{name}</h3>
            <div>{url}</div>
          </div>
        </div>
      );
}
