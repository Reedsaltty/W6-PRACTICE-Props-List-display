
export default function Card (data){
    return (
        <div className="card">
            <img src={data.img.src} alt={data.img.alt} />   
            <div className="name">{data.name}</div>
            <div className="class">Class {data.class}</div>
            <div className="hobby">{data.hobby}</div>
        </div>
    );
}
