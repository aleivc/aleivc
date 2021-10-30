import "./testimonials.scss";
const articles = [
  {
    title: "his is one for desc",
    img: "assets/web1.png",
  },
  {
    title: "some better second",
    img: "assets/web2.png",
  },
  {
    title: "and again",
    img: "assets/web3.jpg",
  },
  {
    title: "one more time",
    img: "assets/web2.png",
  },
];

export default function () {
  return (
    <div className="testimonials" id="testimonials">
      <h1>最近文章</h1>
      <div className="container">
        {articles.map((item) => (
          <div className="card">
            <div className="top">
              <img src={item.img} alt="" />
            </div>
            <div className="bottom">
              <h4>{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
