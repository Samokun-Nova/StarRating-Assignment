// import { range } from './utils';

export default StarRating;

function StarRating({ rating }) {
  let divs = [];

  for (let i = 0; i < rating; ++i) {
    divs.push('https://sandpack-bundler.vercel.app/img/gold-star.svg');
  }
  /*
    Here's the markup for a single star:
    
    <img
      alt=""
      className="gold-star"
      src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
    />
    
    Your job is to repeat this element
    based on the `rating` prop.
    If the rating is 4, we need 4 copies.
  */

  return (
    <div className="star-wrapper">
      {divs.map((index) => (
        <img key={index} alt="" className="gold-star" src={index} />
      ))}
    </div>
  );
}
